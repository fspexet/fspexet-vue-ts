<template>
  <div id="main">
    <main-header/>
    <router-view></router-view>
    <div class="contents">
      <h1>Nyheter</h1>
    </div>
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
  .contents{
    background-color: gray;
    align-self: center;
    margin:1%;
    padding-left: 20px;
    padding-right: 40px;
  }
  body{
    background-color: black
  }
  h1,h2,h3,p{
    color: white;   
  }
</style>
