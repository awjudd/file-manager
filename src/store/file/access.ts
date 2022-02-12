import { Action, Module, VuexModule } from 'vuex-module-decorators';
import FileAccessRequest from '@/models/file/file-access-request.model';

const { electronAPI } = window;

@Module({
  name: 'fileAccess',
  stateFactory: true,
  namespaced: true,
})
export default class FileAccess extends VuexModule {
  @Action
  list(request: FileAccessRequest): Promise<File[]> {
    return electronAPI.retrieveFiles(request) || [];
  }
}
