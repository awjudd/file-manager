export default interface FileAccess {
  list(): Promise<File[]>;
}
