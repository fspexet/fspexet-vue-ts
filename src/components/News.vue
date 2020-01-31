<template>
  <div class="contents">
    <h1>Nyheter</h1>
    <div id="news-5">
      <h2>Spexets sommarvisa</h2>
        <p>
          Du ska inte tro det blir spex snart <br>
          ifall inte rebus snart dyker upp <br>
          och när vår rebus den dyker upp <br>
          då kommer spexet snart <br>

      <router-link to="/tickets">
        <button>Biljett</button>
      </router-link>
<!-- 
Du ska inte tro det blir sommar
Ifall inte nån sätter fart
På sommarn och gör lite somrigt
Då kommer blommorna snart
Jag gör så att blommorna blommar
Jag gör hela kohagen grön
Och nu så har sommaren kommit
För jag har just tagit bort snön

Jag gör mycket vatten i bäcken
Så där så det hoppar och far
Jag gör fullt med svalor som flyger
Och myggor som svalorna tar
Jag gör löven nya på träden
Och små fågelbon här och där
Jag gör himlen vacker om kvällen
För jag gör den alldeles skär

Och smultron det gör jag åt barna
För det tycker jag dom kan få
Och andra små roliga saker
Som passar när barna är små
Och jag gör så roliga ställen
Där barna kan springa omkring
Då blir barna fulla med sommar
Och bena blir fulla med spring
-->

      </p>
    </div>   

    <hr>
   
    <!-- <div id="news_rebus">
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
  
      <p>
        Du får även ett försök till att gissa på rebusen nu när du vet årets tema, kan ni förstå hur det hänger ihop nu när du vet svaret?
        Vi kommer ladda upp lösningen vid slutet av veckan.
      </p>
      <img src="../assets/rebus.png" alt>
    </div> -->

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
