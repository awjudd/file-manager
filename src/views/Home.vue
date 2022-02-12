<template>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import FileAccess from '@/store/file/access';

@Options({
  components: {},
})
export default class Home extends Vue {
  private fileAccess!: FileAccess;

  created(): void {
    this.fileAccess = getModule(FileAccess, this.$store);

    setTimeout(() => {
      this.fileAccess.list({
        source: 's3',
        path: '123',
      });
    }, 1000);
  }
}
</script>
