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
  font-style: normal;
  src: url(../assets/fonts/EBGaramond12-Regular.otf) format('opentype');
}
@font-face {
  font-family: EB Garamond;
  font-style: italic;
  src: url(../assets/fonts/EBGaramond12-Italic.otf) format('opentype');
}
@font-face {
  font-family: EB Garamond SC;
  src: url(../assets/fonts/EBGaramondSC12-Regular.otf) format('opentype');
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
  background: url(../assets/background_2023.png);
  background-repeat: no-repeat;
  background-size: cover;
  /*background-color: #640101;*/
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

/* Define the fonts for the following components */
h1,
h2,
h3,
h4,
p,
ul {
  color: white;
  font-family: 'EB Garamond', 'Times New Roman', Times, serif;
  font-weight: normal;
}

p { /* Paragraph font I think */
  color: #FFFFFF;
  font-size: 20px;
  font-style: normal;
  font-variant: normal;
  margin-top: 15px;
  margin-bottom: 15px;
}

h0 { /* Main header font */
  color: #FFFFFF; /* hex #RRGGBB */
  font-family: Josefin, Futura, 'PakType Tehreer', sans;
  font-size: 35px;
  font-weight: bold;
  font-style: normal;
}

h1 { /* Header 1 font */
  color: #FFFFFF;
  font-variant: small-caps;
  font-size: 48px;
}

h2 { /* Header 2 font */
  color: #FFFFFF;
  font-size: 32px;
  font-variant: small-caps;
}

h3 { /* Header 3 font */
  color: #FFFFFF;
  font-size: 26px;
  font-style: italic;
  margin-top: 25px;
  margin-bottom: 5px;
}

h4 { /* Header 4 font */
  color: #FFFFFF;
  font-size: 24px;
  font-style: italic;
  margin-top: 0px;
  margin-bottom: 0px;
}

a { /* Link colour (in general text of type a) */
  color: #00BFFF;/*20206A */
  font-weight: normal;
  font-style: italic;
  font-size: 21px;
}

li { /* List fonts I think */
  color: #FFFFFF;
  font-size: 20px;
}

.bparagraph {
  color: #FFFFFF;
  font-size: 20px;
}

/*Test used when resizing screen, colours page black when 5 px wide*/
@media screen and (max-width: 5px) {
  .contents {
    background-color: black;
  }
}
</style>
