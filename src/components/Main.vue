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
@font-face {
  font-family: EB Garamond;
  src: url(../assets/fonts/EBGaramond12-Regular.otf) format('opentype');
  font-style: normal;
}
@font-face {
  font-family: EB Garamond;
  src: url(../assets/fonts/EBGaramond12-Italic.otf) format('opentype');
  font-style: italic;
}
@font-face {
  font-family: EB Garamond;
  src: url(../assets/fonts/EBGaramondSC12-Regular.otf) format('opentype');
  font-style: oblique;
}
@font-face {
  font-family: Josefin;
  src: url(../assets/fonts/JosefinSans-Bold.ttf) format('truetype');
}

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
  background: url(../assets/background.png);
  background-repeat: no-repeat;
  background-size: cover;
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

h1{
  color: white;
}
h2,
h3,
h4,
p,
ul {
  color: white;
  font-family: 'EB Garamond', 'Times New Roman', Times, serif;
  font-weight: normal;
}

p {
  font-size: 20px;
  font-style: normal;
}

h2 {
  font-size: 32px;
  font-style: oblique;
}

h3 {
  font-size: 24px;
  font-style: italic;
}

h4 {
  font-size: 24px;
  font-style: italic;
}

div > h1 {
  font-family: 'EB Garamond', 'Times New Roman', Times, serif;
  font-weight: normal;
  font-style: oblique;
  font-size: 48px;
}

a {
  color: green;
  font-weight: normal;
  font-style: italic;
}

li {
  font-size: 20px;
}

.smallcaps {
  font-style: oblique;
}

.bparagraph {
  font-size: 20px;
}

/*Test used when resizing screen, colours page black when 5 px wide*/
@media screen and (max-width: 5px) {
  .contents {
    background-color: black;
  }
}
</style>
