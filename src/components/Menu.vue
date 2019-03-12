<template>
  <div class="contents">
    <div id="meny">
      <h1>Menyn</h1>
      <p
        class="bparagraph"
      >Ibland gillar man att veta vad man äter. Därför presenterar vi våran meny här nedanför.</p>

      <h3>Förrätt</h3>
      <p>Soppa gjord på blodet från ett flertal tomater.</p>

      <h3>Huvudrätt</h3>
      <p>Död ugnsstekt kyckling med ännu dödare ugnsbakade rotfrukter</p>

      <h3>Efterrätt</h3>
      <p>Chokolad begraven i en kaka.</p>
    </div>

    <hr>

    <h2>Baren</h2>
    <p>Utöver den inkluderade tre rätters middagen har vi även en bar där man kan köpa alkoholfridryck som läsk eller drinkar.</p>
    <p>Om du önskar dricka alkohol på föreställning är du tvungen att ta med eget. Vi har ingen möjlighet till försäljning av alkohol.</p>
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
h1 {
  margin-bottom: 10px;
}
h3 {
  margin-top: 20px;
  margin-bottom: 00px;
}
h3+p {
  margin-top: 00px;
  margin-bottom: 20px;
}
</style>
