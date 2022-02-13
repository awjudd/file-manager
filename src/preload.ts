import { contextBridge, ipcRenderer } from 'electron';
import FileAccessRequest from '@/models/file/file-access-request.model';

contextBridge.exposeInMainWorld('electronAPI', {
  retrieveFiles: (request: FileAccessRequest) => ipcRenderer.sendSync('retrieve:files', request),
});
