<template>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Inject from '@/decorators/inject.decorator';
import FileApi from '@/services/file/api.class';

@Options({
  components: {},
})
export default class Home extends Vue {
  @Inject()
  private fileAccess!: FileApi;

  async created(): Promise<void> {
    console.log(
      await this.fileAccess.list({
        source: 's3',
        path: '123',
      }),
    );
  }
}
</script>
