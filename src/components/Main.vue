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

<style>
  #contents{
    background-color: gray;
    align-self: center;
    margin: 5px;
    padding-left: 20px;
    padding-right: 20px;
  }

  body{
    background-color: black
  }
  a:link,a:visited{
    text-decoration: none;
  }

  h1,h2,h3,p{
    color: white;   
  }
  
</style>
