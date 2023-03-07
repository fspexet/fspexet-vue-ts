<template>
  <div class="contents">
    <div id="meny">
      <center>
        <h1>Meny</h1>
        <hr>

        <h2> Förrätt: Sötpotatisquiche </h2>
        <p>
        Kvällen inleds med en paj från Marius hemland, med en enkel purjolöksfyllning och ett skal av sötpotatis.
        </p>
        <div id="forratt">
          <img src="../assets/forratt_2023.jpg" contain
            width="80%" class="big_image" alt>
        </div>

        <h2> Huvudrätt: Hasselbackspotatis med bönbiffar och en kraftig rödvinssås </h2>
        <p>
        Har vi nämnt att Doyle även är stjärnkock? I första aktpausen får ni smaka på hans bästa matlagningskonst.
        </p>
        <div id="huvudratt">
          <img src="../assets/huvudratt_2023.jpg" contain
            width="80%" class="big_image" alt>
        </div>

        <h2> Efterrätt: Panna cotta med earl gray-infusion </h2>
        <p>
        Avslutningsvis serveras en panna cotta värdig en drottning. Se bara upp så att den inte blir stulen av din bordsgranne!
        </p>
        <div id="efterratt">
          <img src="../assets/efterratt_2023.jpg" contain
            width="60%" class="big_image" alt>
        </div>
      </center>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  metaInfo: {
    title: 'Meny',
  },
};
</script>

<style scoped>
h3,
h4 {
  text-rendering: optimiseLegibility;
  -ms-font-feature-settings: "dlig", "hlig", "swsh", "cv04", "cv05";
  -webkit-font-feature-settings: "dlig", "hlig", "swsh", "cv04", "cv05";
  -moz-font-feature-settings: "dlig", "hlig", "swsh", "cv04", "cv05";
  font-feature-settings: "dlig", "hlig", "swsh", "cv04", "cv05";
}
h3 {

  font-variant: small-caps;
}
</style>
