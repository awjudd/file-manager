import { injectable } from 'tsyringe';
import FileAccessRequest from '@/models/file/file-access-request.model';
import File from '@/models/file/file.model';

const { electronAPI } = window;

@injectable()
export default class FileApi {
  public async list(request: FileAccessRequest): Promise<File[]> {
    const files = await electronAPI.retrieveFiles(request);
    return files.map((file: File) => new File(file));
  }
}
