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
html{
  position:relative; 
  min-height: 100%;
}
/*Normalize html and body elements,this style is just good to have*/
html,body{
  margin:0;
  padding:0;
}
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
