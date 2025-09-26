<script lang="ts">

import { spex_descriptions, spex_names } from '@/old-spex';

export default {
  metaInfo: () => ({
    title: 'F-Spexet - Ett gammalt Spex',
  }),
  computed: {
    year() {
      return this.$route.params.year;
    },
    index() {
      const index = parseInt(this.year) - 2005;
      return index;
    },
    name() {
      return spex_names[this.index];
    },
    description() {
      return spex_descriptions[this.index];
    }
  },
}

</script>

<template>
  <div class="contents">
    <h1>{{ name }} ({{ year }})</h1>
    <div class="image_and_desc">
      <img width="250" :src="'/assets/posters/' + year + '.jpg'" />
      <p style="white-space: pre-wrap; margin: 0;">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>


</style>
