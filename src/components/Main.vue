<template>
  <div id="main">
    <main-header/>
    <div class="main">
      <router-view></router-view>
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
/*Normalize html and body elements,this style is just good to have*/
html,
body {
  margin: 0;
  padding: 0;
}
html {
  position: relative;
  min-height: 100%;
}
body {
  /* background: url(../assets/beach.jpg); */
  background: black;
}
.main {
  background: url(../assets/marble_1.png);
  padding: 10px 30px 10px 30px;
  box-shadow: inset 0 5px 50px rgba(0, 0, 0, 0.5),
    /*bottom internal shadow*/ inset 0 30px 85px rgba(0, 0, 0, 1); /*top internal highlight*/
}
.contents {
  width: 60%;
  margin: auto;
}

h1,h2,h3,h4,p,ul {
  color: white;
}

a {
  color: gold;
}
</style>