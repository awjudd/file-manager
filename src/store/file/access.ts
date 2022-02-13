import { Module, VuexModule } from 'vuex-module-decorators';

@Module({
  name: 'fileAccess',
  stateFactory: true,
  namespaced: true,
})
export default class FileAccess extends VuexModule {}
