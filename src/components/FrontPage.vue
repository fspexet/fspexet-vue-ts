<script lang="ts">
  import { ref } from 'vue';
  import { formatDurationAsArray, getPrettyDay, prettySemester } from "@/helper-functions";
  import EVENT from '@/event';

  const performance = EVENT.performances[0];
  // Antag att alla föreställningar är när det är sommartid
  const premiereDate = new Date(`${performance.day}T${performance.time}+0200`);
  // Vid vintertid:
  // const premiereDate = new Date(`${performance.day}T${performance.time}+0100`);
  let interval: number;

  export default {
    setup() {
      const countdownLabel = ref([ "00", "00", "00", "00" ]);

      const f = () => {
        const now = new Date();
        const duration = new Date(premiereDate.valueOf() - now.valueOf());
        countdownLabel.value = formatDurationAsArray(duration);
      };
      interval = setInterval(f, 1000);
      f();

      const semester = prettySemester(EVENT) + "ens";

      return {
        countdownLabel,
        EVENT,
        getPrettyDay,
        semester,
      }
    },

    beforeDestroy() {
      clearInterval(interval);
    }
  }

</script>

<template>
  <div>
    <div class="earth">
      <img src="@/assets/front-page-art/jorden.svg" class="earth_img">
    </div>
    <div class="presentation">
      <h3>F-spexet 2026 presenterar</h3>
      <h1>Månlandningen</h1>
    </div>
    <div class="early_space">
      <div class="rocket">
        <img src="@/assets/front-page-art/raketen2.svg" class="rocket_img">
      </div>
    </div>
    
    <div class="space">
      <div class="text-box">
        <h2>Välkommen till F-spexet 2026</h2>
        <p>
          {{ semester }} föreställningar kommer att framföras {{ EVENT.location.preposition ?? "i" }}
          <a :href="EVENT.location.maps" target="_blank">
            {{ EVENT.location.name }}
          </a>
          dessa datum:
        </p>
        <ul class="days">
          <li v-for="p in EVENT.performances" :key="p.day" :class="p.sold_out ? 'sold_out' : ''">
            {{ getPrettyDay(p) }} kl {{ p.time }} <span v-if="p.note">({{ p.note }})</span>
          </li>
        </ul>

        <p>Priser:</p>
        <ul>
          <li v-for="p in EVENT.prices" :key="p.name">
            {{ p.name }}
            <a v-if="p.note" href="/tickets#clarifications">
              {{ "*".repeat(1 + EVENT.prices.filter(p => p.note).findIndex(q => q.name === p.name)) }}
            </a>
            : {{ p.price }} kr
          </li>
        </ul>
        <p>I dessa priser ingår även en trerätters middag!</p>

        <a class="cta" :href="EVENT.tickets.form_link" target="_blank">
          Köp biljetter här!
        </a>

        <div class="countdown_clock_wrapper">
          <h3>Premiär om</h3>
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
      </div>
    </div>
    <div class="moon">
        <img src="@/assets/front-page-art/manen.svg" class="moon_img">
      </div>
  </div>
</template>

<style scoped>

  a {
    color: white;
  }

  .cta a {
    color: black;
  }

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  h1, h2, h3, h4, h5, h6 {
    text-align: center;
  }

  h1 {
    font-size: min(15vw, 7em);
    margin: 0.25em;
  }

  h2 {
    font-size: min(9vw, 5em);
    margin: 0.25em;
  }

  h3 {
    font-size: min(5vw, 2em);
    margin: 0;
  }

  .sold_out {
    text-decoration: line-through;
    color: #ff7474;
  }
  .earth {
    height: 70em;

    position: relative;

    top: -25em;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: radial-gradient(circle at top, rgb(21, 177, 255) 30em, rgb(0, 0, 0, 0) 50em);
  }


  .earth_img {
    width: 70em;
    position: relative;
    top: -30em;

    rotate: 100deg;

    z-index: 20;
  }
  
  .early_space {
    width: 40em;

    top: -50em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .rocket{
    position: relative;
    
    left: 60vw;

    width: 5em;
    top: -40em;
   

    rotate: 210deg;
  }

  .presentation {
    height: 10em;
    
    position: relative;
    top: -40em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    z-index: 20
  } 

  .sky > * {
    z-index: 10;
  }

  .space {
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 1em;

    top: -40em;

    margin-bottom: -5em;
    padding-bottom: 5em;

    position: relative;
  }

  .moon{
    height: 80em;

    position: relative;
    top: -30em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    overflow: hidden;
  }

  .moon_img {
    height: 80em;
  }



  .text-box {
    max-width: 800px;
    z-index: 20;
  }

  .text-box h1 {
    margin-top: 1em;
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    .sky {
      justify-content: start;
      padding-top: 5vh;
    }
  
  }

  .countdown_clock_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }

  .countdown_clock {
    width: fit-content;
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
  }

  .countdown_clock .label {
    font-size: 0.75em;
  }

</style>
