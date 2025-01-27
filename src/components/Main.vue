<template>
  <div id="app-container">
    <main-header />
    <div class="main-body">
      <router-view></router-view>
    </div>
    <main-footer />
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
    title: 'F-spexet',
  },
};
</script>