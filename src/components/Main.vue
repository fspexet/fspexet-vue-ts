<template>
  <div id="main">
    <main-header/>
    <router-view></router-view>
    <main-footer/>
  </div>
</template>
<script lang="ts">
import Header from '@/components/MainHeader.vue';
import Footer from '@/components/MainFooter.vue';

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
  },
  metaInfo: {
      title: 'Home',
  },
};
</script>
