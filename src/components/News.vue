<template>
  <div class="contents">
    <h1>Nyheter</h1>
    <hr>

    <div id="news2">
      <h2>Lösning</h2>
      <p>
        Kort förklaring av rebusen.
        <br>Om du summerar alla bokstäver i de stora bilderna som inte har kryss över sig (nödlandning, rök och öken)
        och sedan drar bort dem bokstäver som finns i de kryssade bilderna(king, lan, örn och kön) så har du kvar bokstäverna d d e n ö.
        Sen följer man instruktionerna på den lilla pilen i hörnet och kastar om dem så kan du bilda ordet Döden.
      </p>
    </div>

    Ta bokstäverna i nödlandning, rök och öken.
    Ta bort bokstäverna i king, lan, örn och kön
    <div id="news1">
      <h2>3...2...1... DRA IGÅNG</h2>
      <p id="intro">
        <i>
          Är ni trötta på allt pappersarbete och skulle behöva semester?
          <br>Hade livet känns enklare med en assistent? Döden känner precis likadant, och ikväll kommer ni att få se hur det går
          när Döden skaffar sig en hjälpreda för att sortera alla själar i
          Dödsriket.
          <br>
          <br>Kan en människa klara av Dödens jobb?
          <br>Vad kan hända om Döden tar semester?
        </i>
      </p>

      <br>

      <p>
        Nu är temat släppt och det är lite mindre än en månad kvar till första föreställning.
        Om du är intresserad av att se på föreställningen så kan du klicka på biljettknappen och börja din färd till en fantastisk underjordsresa
      </p>
      <router-link to="/tickets">
        <button>Biljett</button>
      </router-link>
      <p>
        Du får även ett försök till att gissa på rebusen nu när du vet årets tema, kan ni förstå hur det hänger ihop nu när du vet svaret?
        Vi kommer ladda upp lösningen vid slutet av veckan.
      </p>
      <img src="../assets/ökenrebus.png" alt>
    </div>
  </div>
</template>

<style scoped>
#intro {
  font-size: 20px;
  text-decoration: ivory;
}

button {
  font-size: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 2px #fff, /*bottom external highlight*/ 0 -1px 1px #666,
    /*top external shadow*/ inset 0 -1px 1px rgba(0, 0, 0, 0.5),
    /*bottom internal shadow*/ inset 0 1px 1px rgba(255, 255, 255, 0.8); /*top internal highlight*/
}

img {
  width: 100%;
}
</style>
