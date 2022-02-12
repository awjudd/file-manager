import FileAccess from './file-access.interface';

export default class S3FileAccess implements FileAccess {
  async list(): Promise<File[]> {
    return [];
  }
}
