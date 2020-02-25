<template>
  <div class="contents">
    <div id="meny">
      <h1>Menyn</h1>
      <p
        class="bparagraph"
      >Ibland gillar man att veta vad man äter. Därför tänkte vi dela med oss av våran meny.</p>

      <h3>Mat</h3>
       <p>Exakt info bör vara tillgänglig nära början av Mars.</p>

      <h2>Alternativ kost</h2>
        <p>
        Vi serverar självklart mat även om du behöver specialkost (vegetarisk,
        veganskt, glutenfritt etc.). Kom bara ihåg att ange det när du beställer
        biljett. Om du vill veta spexifikt vad som för justeringar som görs kan du skicka
        mail till <a href="mailto:mat@f-spexet.se"> mat@f-spexet.se</a>
        </p>
    </div>

    <hr>

    <h2>Baren</h2>
      <p>Utöver den inkluderade trerätters middagen har vi även en bar där man kan köpa alkoholfri dryck som läsk eller drinkar.</p>
      <p>Om du önskar dricka alkohol på våra föreställningar är du tvungen att ta med eget. Vi har ingen möjlighet till försäljning av alkohol.</p>
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
