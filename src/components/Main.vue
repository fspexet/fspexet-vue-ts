<template>
  <div id="app-container">
    <div id="mainpage">
      <main-header />
      <div class="main-body">
        <router-view></router-view>
      </div>
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
    title: 'F-Spexet 2025',
  },
};
</script>
