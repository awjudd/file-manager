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

  async created(): Promise<void> {
    this.fileAccess = getModule(FileAccess, this.$store);

    console.log(
      await this.fileAccess.list({
        source: 's3',
        path: '123',
      }),
    );
  }
}
</script>
