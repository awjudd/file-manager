import { S3 } from 'aws-sdk';
import File from '@/models/file/file.model';
import FileAccess from './file-access.interface';

const client = new S3({
  region: 'us-east-1',
  accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY!,
});

export default class S3FileAccess implements FileAccess {
  list(): Promise<File[]> {
    return new Promise<File[]>((resolve, reject) => {
      client.listObjects(
        {
          Bucket: process.env.VUE_APP_AWS_S3_BUCKET!,
        },
        (err, data) => {
          if (err) {
            return reject(err);
          }

          return resolve(
            data.Contents!.map(
              (d) => new File({
                name: d.Key,
                createdAt: d.LastModified,
                modifiedAt: d.LastModified,
              }),
            ),
          );
        },
      );
    });
  }
}
