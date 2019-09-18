<template>
  <div class="contents">
    <h1>Nyheter</h1>
    <hr>
    <div id="news4">
      <h2>Spexets nästa återuppståndelse</h2>
      <p>
        Vi har nu haft vår sista föreställning för det här året. Det var ett fantastiskt år men någon gång 
        måste det ta stopp. Men för att kunna återuppstå till nästa år behöver vi nya medlemmar så kom på något av våra 
        Asptillfällen där du kan göra något roligt lära dig hur F-spexet går till.<br>
      </p>
      <p>
      <ul>
        <li>Kanelbullkväll Onsdag 2019-09-18 kl 17:15 på Focus</li>
        Kom ät kanelbullar och fråga erfarna spexare vad de gör, när de gör, hur de gör eller vad du nu kan tänka dig. 
        <br><br>  
        <li>Aspexpressen Lördag 2019-09-21 kl 13:00 i Signes </li>
        En komprimering av ett spexår ner till en eftermiddag. Kom och testa spexupplevelsen.
        <br><br>
        <li>Spelkväll Måndag 2019-09-23 kl 17:15 på Focus </li>
        Häng med oss och spela brädspel. Erfarna spexara finns på plats för att svara på eventuella frågor.
        <!-- <li class="obs">Tisdag 2019-04-02 kl 18:00 - SLUTSÅLD</li> -->
      </ul>
      Om du har tid att gå på något av våra asptillfällen men vill söka ändå så kan du även skicka mail till <a
          href="mailto:JagVill@f-spexet.se"
        >
          <b>JagVill@f-spexet.se</b>
        </a>
        med information om vad du vill söka så får du snart svar med information.
      </p>
    </div>
    
    <hr>
    <div id="news3">
      <h2>Vi är tillbaka</h2>
      <p>
        Sommaren är slut och vi är tillbaka med vår andra uppställning av "F-spexet 2019, Döden". <br>
      </p>
    </div>

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

  <hr>

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
