import { createStore } from 'vuex';
import FileAccess from '@/store/file/access';

export default createStore({
  modules: {
    fileAccess: FileAccess,
  },
});
