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

<style>
#mainpage {
  min-height: 100vh;
}
</style>

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
