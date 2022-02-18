<template>
  <div class="contents">
    <div id="meny">
      <center>
      <h1>Meny</h1>
      <hr>
        <p>
        Årets meny är ännu inte satt men när den är det kan du hitta den här!
        </p>
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
