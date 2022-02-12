import { contextBridge, ipcRenderer } from 'electron';
import FileAccessRequest from '@/models/file/file-access-request.model';

console.log('hello');

contextBridge.exposeInMainWorld('electronAPI', {
  retrieveFiles: (request: FileAccessRequest) => ipcRenderer.send('retrieve:files', request),
});
