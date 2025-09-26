<script lang="ts">
  import { ref } from 'vue';
  import { formatDurationAsArray } from "@/helper-functions";
  import Collaborations from './Collaborations.vue';
import { spex_descriptions, spex_names } from '@/old-spex';

  let interval: number;

  export default {
    setup() {
      const releaseDate = new Date("2026-04-01T00:00Z");
      const countdownLabel = ref([ "00", "00", "00", "00" ]);

      const f = () => {
        const now = new Date();
        const duration = new Date(releaseDate.valueOf() - now.valueOf());
        countdownLabel.value = formatDurationAsArray(duration);
      };
      interval = setInterval(f, 1000);
      f();

      return {
        showCountdown: !isNaN(releaseDate.valueOf()),
        countdownLabel,

        latestSpexYear: 2004 + spex_names.length,
        latestSpexName: spex_names[spex_names.length - 1],
        latestSpexDesc: spex_descriptions[spex_descriptions.length - 1],
      }
    },

    beforeDestroy() {
      clearInterval(interval);
    }
  }

</script>

<template>
  <div>
    <div class="front-picture">
      <img class="front-picture__background" src="../assets/pictures/group_picture.JPG" />
      <div class="front-picture__content">
        <img
          class="logo"
          src="@/assets/logos/fspexet.png"
          alt="F-spexets logga"
        />
        <h2>
          <span>Fysikteknologsektionens studentspex</span>
          <span>på Chalmers</span>
        </h2>
      </div>
    </div>

    <div class="contents">
      <h1>Vad är F-spexet?</h1>
      <p>
        F-Spexet är Chalmers F-sektions studentspex. Men vad är ett spex?
        Jo, det är teater fast lite galnare, lite roligare och lite bättre. Det
        blandas friskt teater med sång, dans, skämt och ordvitsar under tre
        spexiga akter. Dessutom serverar F-spexet en eminent trerätters middag
        till föreställningarna. Något så bra får man väl inte missa?
      </p>

      <h1>Inrop</h1>
      <p>
        F-Spexet har tolkat begreppet rösträtt alldeles underbart fel. Vi
        tillämpar nämligen inrop från själva publiken! Genom att ropa
        regi mot scenen under pågående föreställningen tvingas
        ensemblen genomföra inropet efter bästa förmåga. Gör det svårt för våra
        ensemblister, har du en kul idé så tveka ej, ropa in till scen!
      </p>
    </div>

    <div class="pictures-collection">
      <img src="@/assets/pictures/DSC_0051.JPG" />
      <img src="@/assets/pictures/DSC_4548.JPG" />
    </div>

    <div class="contents">
      <h1>Aspa</h1>
      <p>
        Om du är intresserad av att medverka i F-spexet kan ni fylla i vårt aspformulär under en föreställning eller mejla
        <a href="mailto:jagvill@f-spexet.se?subject=Jag vill aspa!">jagvill@f-spexet.se</a>
        och sedan kontaktar vi dig när saker händer.
      </p>
      <div class="center">
        <a href="mailto:jagvill@f-spexet.se?subject=Jag vill aspa!" class="cta">
          Jag vill aspa!
          <i class="pi pi-external-link"></i>
        </a>
      </div>

      <h1>Senaste spexet</h1>
      <div class="card">
        <div class="image_and_desc">
          <img :src="`/assets/posters/${latestSpexYear}.jpg`" width="250" />
          <div>
            <h2 style="margin-top: 0;">{{ latestSpexName }} ({{ latestSpexYear }})</h2>
            <p>Det senaste spexet var "{{ latestSpexName }}". Du kan se våra gamla spex samlade under fliken <router-link to="/about-us/history">Tidigare spex</router-link>.</p>
            <p>{{ latestSpexDesc }}</p>
          </div>
        </div>
      </div>

      <div class="center">
        <router-link to="/about-us/history" class="cta" >
          Visa tidigare spex
        </router-link>
      </div>
    </div>

    <div class="next_spex_header" v-if="showCountdown">
      <span class="heading_small">Nästa spex har temasläpp om</span>
      <div class="countdown_clock">
        <span class="digit">{{ countdownLabel[0] }}</span>
        <span>:</span>
        <span class="digit">{{ countdownLabel[1] }}</span>
        <span>:</span>
        <span class="digit">{{ countdownLabel[2] }}</span>
        <span>:</span>
        <span class="digit">{{ countdownLabel[3] }}</span>

        <span class="label">dagar</span>
        <span></span>
        <span class="label">timmar</span>
        <span></span>
        <span class="label">minuter</span>
        <span></span>
        <span class="label">sekunder</span>
      </div>
    </div>
    
    <div class="contents">
      <Collaborations />
    </div>
  </div>
</template>

<style scoped>

h1 {
  margin-top: 2em;
}

.card {
  background: rgb(37, 37, 37);
  padding: 1.5rem;
  border-radius: 12px;
}

.image_and_desc img {
  border-radius: 6px;
}

.front-picture {
  width: 100%;
  aspect-ratio: 3840 / 2000;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  margin-bottom: 100px;
}

.front-picture::before {
  content: '';
  z-index: 2;
  inset: 0;
  display: block;
  position: absolute;
  background: linear-gradient(0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 95%,
    rgba(0, 0, 0, 1) 100%
  );
  pointer-events: none;
}

.front-picture::after {
  content: '';
  z-index: 100;
  width: 100%;
  height: 100px;
  bottom: 0;
  transform: translateY(100%);
  display: block;
  position: absolute;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  pointer-events: none;
}

.front-picture__background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  filter: brightness(0.6);
  z-index: 1;
}

.front-picture__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  max-width: 640px;
  padding: 1rem;
  transform: translateY(-15%);

  z-index: 3;
}

.front-picture__content .logo {
  max-width: 16em;
  min-width: 6em;
  width: 25vw;
  filter: drop-shadow(0 0 0.5rem black);
}

.front-picture__content h1 {
  font-size: 5rem;
  /* margin: 0; */
  text-shadow: 0 0 2rem black;
}

.front-picture__content h2 {
  margin: 0;
  font-size: min(4vw, 1.75rem);
  font-weight: normal;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.front-picture__content h2 span {
  width: max-content;
  background: white;
  color: black;
  padding: 0.2em;
}

.pictures-collection {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 6rem 0;
}

.pictures-collection img {
  width: 100%;
}

.next_spex_header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  margin: 10rem 0;
  padding-top: 4rem;
  padding-bottom: 6rem;
}

.heading_small {
  text-align: center;
}

.countdown_clock {
  font-size: min(4vw, 2rem);
  display: grid;
  grid-template-columns: repeat(7, auto);
  place-items: center;
  gap: 0.0em 0.5em;
}

.countdown_clock .digit {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 3em;
  color: white;
}

.countdown_clock .label {
  font-size: 1rem;
}

@keyframes float_around {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -5px) rotate(-2deg);
  }
  100% {
    transform: translate(0, 5px) rotate(3deg);
  }
}

</style>
