export type ElectronAPI = Api & {
  retrieveFiles: (request: FileAccessRequest) => Promise<File[]>;
};

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
