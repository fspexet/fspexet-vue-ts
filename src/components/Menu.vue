<template>
  <div class="contents">
    <div id="meny">
      <center>
      <h1>Meny</h1>
      <hr>

      <p
        class="bparagraph"
      >
        På våra föreställningar serveras en full, trerätters middag. När en meny har 
        fastställts, kommer man kunna se den här.
      </p>



      <h2>Alternativ kost</h2>
        <p>
        Vi serverar självklart mat även om du behöver specialkost (vegetarisk,
        veganskt, glutenfritt etc.). Kom bara ihåg att ange det när du beställer
        biljett. Om du vill veta spexifikt vad för justeringar som görs kan du skicka
        mail till <a href="mailto:mat@f-spexet.se"> mat@f-spexet.se</a>
        </p>
      </center>
    </div>

    <hr>

    <div id="drinks">
      <center>
      <h2>Drycker</h2>
      <p>Utöver den inkluderade trerätters middagen har vi även en bar där man kan köpa alkoholfri dryck som läsk eller drinkar.</p>
      <p>Om du önskar dricka alkohol på våra föreställningar är du tvungen att ta med eget. Vi har ingen möjlighet till försäljning av alkohol.</p>
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
