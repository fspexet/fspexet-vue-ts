<template>
  <div id="main">
    <main-header/>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Header from '@/components/MainHeader.vue';

export default {
  components: {
    'main-header': Header,
  },
};
</script>
