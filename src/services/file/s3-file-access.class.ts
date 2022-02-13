import { S3Client } from '@aws-sdk/client-s3';
import File from '@/models/file/file.model';
import FileAccess from './file-access.interface';

const client = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY!,
  },
});

export default class S3FileAccess implements FileAccess {
  async list(): Promise<File[]> {
    console.log([process.env.VUE_APP_AWS_SECRET_ACCESS_KEY]);

    return [
      new File({
        path: 'hi',
      }),
    ];
  }
}
