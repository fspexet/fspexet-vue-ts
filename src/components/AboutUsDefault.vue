<template>
  <div class="contents">
    <h1>Om F-spexet</h1>
    <p
      class="bparagraph"
    >Under våren och hösten kommer F-spexet framföra 2019 års fantastiska uppsättning. Allt om denna finns att läsa om här.</p>
    <h2>Vad är F-spexet?</h2>
    <p>F-spexet är Chalmers F-sektions studentspex. Men vad är ett spex?</p>
    <p>Jo, det är teater fast lite galnare, lite roligare och lite bättre. Det blandas friskt teater med sång, dans, skämt och ordvitsar under tre spexiga akter. Dessutom serverar F-spexets en eminent trerätters middag till föreställningarna. Något så bra får man väl inte missa?</p>

    <hr>
    <h2>Mat och dryck</h2>
    <p>I middagen ingår förrätt, huvudrätt och efterrätt. Vi bjuder på vatten och har en välfylld bar där vi säljer allt från läsk och mineralvatten. Vill man ha alkohol får man ta med det själv.</p>
    <p>För en titt på menyn,
      <b></b>
      <router-link to="/menu">klicka här.</router-link>
    </p>

    <hr>
    <h2>Inrop</h2>
    <p>F-spexet har tolkat begreppet rösträtt alldeles helt underbart fel. Vi tillämpar nämligen inrop från själva publiken!</p>
    <p>Genom att ropa regi mot scenen under pågående föreställningen tvingas ensemblen genomföra inropet efter bästa förmåga. Gör det svårt för våra ensemblister, har du en kul idé så tveka ej, ropa in till scen!</p>
    <p>Ifall fantasin tryter kommer här några förslag:</p>
    <ul>
      <li>Mer psykadeliskt!</li>
      <li>Byt dialekt!</li>
      <li>Prata baklänges!</li>
      <li>Byt roller!</li>
      <li>Som en professor!</li>
      <li>Mer ordvitsar!</li>
      <li>På norska!</li>
      <li>I falsett!</li>
      <li>Golvet är lava!</li>
      <li>Taket läcker!</li>
      <li>Förinta Borås!</li>
      <li>Åk Skidor!</li>
    </ul>

    <hr>
    <h2>Poster i F-spexet</h2>
    <p>Undrat vilka poster eller grupper som finns i f-spexet, eller vad de gör? Kanske funderar du på att vara med själv i nästa års spex? Ta då en titt på
      <router-link to="/about-us/groups">Poster i F-spexet</router-link>
    </p>

    <hr>
    <h2>Samarbeten</h2>
    <p>F-spexet är en medlemsförening på
      <a href="http://www.ftek.se/" target="_blank">Fysikteknologsektionen</a> på Chalmers. Strax över hälften av våra medlemmar varje år går på Teknisk Fysik eller Teknisk Matematik, men det är inget krav för att vara med.
    </p>
  </div>
</template>

<style scoped>
.bparagraph {
  font-size: 20px;
}

a{
  font-weight: bold;
}

ul {
  color: white;
}
</style>
