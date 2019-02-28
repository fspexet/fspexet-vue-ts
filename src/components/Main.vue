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
/*Normalize html and body elements,this style is just good to have*/
html,body {
  margin: 0;
  padding: 0;
}
html {
  position: relative;
  min-height: 100%;
}
body {
  background-color: black;
  /*  background-image: url("beach.jpg");*/
}
.contents {
  background-image: url("marble_1.png");
  background-color: gray;
  margin: auto 4% auto 4%;
  padding: 10px 30px 10px 30px;
box-shadow: inset 0 5px 50px rgba(0,0,0,0.5), /*bottom internal shadow*/
inset 0 30px 85px rgba(0,0,0,1); /*top internal highlight*/
}
h1,h2,h3,p,ul{
  color: white;
}
</style>
