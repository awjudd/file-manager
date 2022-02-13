import File from '@/models/file/file.model';

export default interface FileAccess {
  list(): Promise<File[]>;
}
