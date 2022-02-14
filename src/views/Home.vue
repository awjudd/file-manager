<template>
  <div class="text-left">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="
              px-6
              py-3
              text-left text-xs
              font-medium
              text-gray-500
              uppercase
              tracking-wider
            "
          >
            Name
          </th>
          <th
            scope="col"
            class="
              px-6
              py-3
              text-left text-xs
              font-medium
              text-gray-500
              uppercase
              tracking-wider
            "
          >
            Last Modified
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- Odd row -->
        <tr
          v-for="(file, index) in files"
          :key="`file-${file.name}`"
          :class="{
            'bg-white': index % 2 === 0,
            'bg-gray-50': index % 2 === 0,
          }"
        >
          <td
            class="
              px-6
              py-4
              whitespace-nowrap
              text-sm
              font-medium
              text-gray-900
            "
          >
            {{ file.name }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ file.modifiedAt }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import FileAccess from '@/store/file/access';
import File from '@/models/file/file.model';

@Options({
  components: {},
})
export default class Home extends Vue {
  private fileAccess!: FileAccess;

  public files: File[] = [];

  async created(): Promise<void> {
    this.fileAccess = getModule(FileAccess, this.$store);

    this.fetch();
  }

  async fetch() {
    this.files = await this.fileAccess.list({
      source: 's3',
      path: '123',
    });
  }
}
</script>
