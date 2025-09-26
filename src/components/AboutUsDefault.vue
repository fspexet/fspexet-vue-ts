<script setup lang="ts">
import Collaborations from './Collaborations.vue';

</script>

<template>
  <div class="contents">
    <h1>Vad är F-spexet?</h1>
    <p>
      F-Spexet är Chalmers F-sektions studentspex. Men vad är ett spex?
      Jo, det är teater fast lite galnare, lite roligare och lite bättre. Det
      blandas friskt teater med sång, dans, skämt och ordvitsar under tre
      spexiga akter. Dessutom serverar F-spexet en eminent trerätters middag
      till föreställningarna. Något så bra får man väl inte missa?
    </p>

    <h2>Mat och dryck</h2>
    <p>
      Utöver trerätters middagen så säljer vi läsk och alkoholfria drinkar I
      våran bar, kallad <i>MåBaren</i>.
    </p>

    <h2>Inrop</h2>
    <p>
      F-Spexet har tolkat begreppet rösträtt alldeles underbart fel. Vi
      tillämpar nämligen inrop från själva publiken! Genom att ropa
      regi mot scenen under pågående föreställningen tvingas
      ensemblen genomföra inropet efter bästa förmåga. Gör det svårt för våra
      ensemblister, har du en kul idé så tveka ej, ropa in till scen!
    </p>
    <p>Ifall fantasin tryter kommer här några förslag:</p>
    <ul class="inrop">
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
      <li>Korståg!</li>
      <li>Förinta Borås!</li>
      <li>Åk Skidor!</li>
      <li>HÅRDARE!</li>
    </ul>

    <h1>Poster i F-spexet</h1>
    <p>
      Undrat vilka poster eller grupper som finns i F-spexet, eller vad de gör?
      Kanske funderar du på att vara med själv i nästa års spex? Ta då en titt
      på
      <router-link to="/about-us/groups">poster i F-spexet</router-link>.
    </p>

    <h1>Aspa</h1>
    <p>
      Om du är intresserad av att medverka i F-spexet kan ni fylla i vårt
      aspformulär under en föreställning
      eller mejla
      <a href="mailto:jagvill@f-spexet.se?subject=Jag vill aspa!">jagvill@f-spexet.se</a> och sedan
      kontaktar vi dig när saker händer.
    </p>

    <h1>Tidigare spex</h1>
    <p>
      Om du är intresserad av vad som F-spexet har gjort tidigare kan du läsa
      lite om våra
      <router-link to="/about-us/history">tidigare spex</router-link>.
    </p>

    <Collaborations style="margin-top: 6rem" />
  </div>
</template>

<style scoped>

h1 {
  margin-top: 2em;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.inrop {
  all: unset;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  gap: 1rem;
}

.inrop li {
  all: unset;
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 1rem;
}

</style>
