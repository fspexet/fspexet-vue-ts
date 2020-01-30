<template>
  <div class="contents">
    <div id="meny">
      <h1>Menyn</h1>
      <p class="bparagraph">
        Ibland gillar man att veta vad man äter. Därför presenterar vi våran
        meny här nedanför.
      </p>

      <h3>Huvudrätt</h3>
      <p>Ugnsrostade rotfrukter med marinerad kyckling.</p>
      <form name="contents">
        <input type="checkbox" name="contents" value="1" disabled />Vegetarisk
        <input type="checkbox" name="contents" value="2" disabled />Vegan
        <input
          type="checkbox"
          name="contents"
          value="3"
          checked
          disabled
        />Glutenfri
      </form>

      <h2>Alternativ kost</h2>
      <p>
        Vi serverar självklart mat även du behöver specialkost (vegetarisk,
        veganskt, glutenfritt etc.). Kom bara ihåg att ange det när du beställer
        biljett. Om du vill veta vad som för justeringar som görs kan du skicka
        mail till <a href="mailto:mat@f-spexet.se"> <b>mat@f-spexet.se</b></a>
      </p>
    </div>

    <hr />

    <h2>Baren</h2>
    <p>
      Utöver den inkluderade tre rätters middagen har vi även en bar där man kan
      köpa alkoholfridryck som läsk eller drinkar.
    </p>
    <p>
      Om du önskar dricka alkohol på föreställning är du tvungen att ta med
      eget. Vi har ingen möjlighet till försäljning av alkohol.
    </p>
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
#meny {
    justify-content: center;
  text-align: center;
}
h3 + p {
  margin-top: 00px;
  margin-bottom: 20px;
}
.contents {
  color: white;
}
.contents input:checked ~ .checkmark {
  background-color: #2196f3;
}
</style>
