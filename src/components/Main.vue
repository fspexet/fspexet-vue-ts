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
    title: 'F-spexet',
  },
};
</script>

<style>
/*Normalize html and body elements,this style is just good to have*/
* {
  box-sizing: border-box;
}

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
  background: black;
}
.main {
  background: url(../assets/marble_1_seam.png);
  padding: 10px 30px 10px 30px;
  width: 100%;
  box-shadow: inset 0 5px 50px rgba(0, 0, 0, 0.5),
    /*bottom internal shadow*/ inset 0 20px 85px rgba(0, 0, 0, 1); /*top internal highlight*/
}
.contents {
  width: 60%;
  margin: auto;
  min-width: 280px;
  max-width: 700px;
}

h1,
h2,
h3,
h4,
p,
ul {
  color: white;
}

div > h1 {
  font-family: Brush Script MT, Brush Script Std, cursive;
}

a {
  color: gold;
}


@media screen and (max-width: 375px) {
  .contents {
    /* background-color: red; */
  }
}
</style>