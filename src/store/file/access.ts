import { Action, Module, VuexModule } from 'vuex-module-decorators';
import FileAccessRequest from '@/models/file/file-access-request.model';
import File from '@/models/file/file.model';

const { electronAPI } = window;

@Module({
  name: 'fileAccess',
  stateFactory: true,
  namespaced: true,
})
export default class FileAccess extends VuexModule {
  @Action
  async list(request: FileAccessRequest): Promise<File[]> {
    const files = await electronAPI.retrieveFiles(request);
    return files.map((file: File) => new File(file));
  }
}
