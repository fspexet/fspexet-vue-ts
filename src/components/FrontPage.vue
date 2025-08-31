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
    <div class="sky">
      <h2>F-spexet 2025 presenterar</h2>
      <h1>Ernest & Earharts<br>Äventyrsbyrå AB</h1>
    </div>
    <div class="water-surface">
      <img src="@/assets/front-page-art/boat.svg" class="boat" />
      <div class="ice_container">
        <img src="@/assets/front-page-art/isflak.svg" class="ice" />
        <img src="@/assets/front-page-art/seal2.svg" class="seal" />
      </div>
    </div>
    <div class="water">
      <img src="@/assets/front-page-art/light-ray.png" class="light-ray" />
      <img src="@/assets/front-page-art/seal1.svg" class="seal" />

      <div class="text-box">
        <h1>Välkommen till F-spexet 2025</h1>
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
          <h2>Premiär om</h2>
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
    font-size: min(9vw, 5em);
    margin: 0.25em;
  }

  h2 {
    font-size: min(5vw, 2em);
    margin: 0;
  }

  .sold_out {
    text-decoration: line-through;
    color: #ff7474;
  }

  .sky {
    height: 30vw;
    min-height: 40vh;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .sky > * {
    z-index: 10;
  }

  .water-surface {
    height: 20vw;
    min-height: 20vh;

    position: relative;
    background: linear-gradient(0deg, rgb(25, 32, 50) 0%, rgb(52, 58, 84) 100%);
    /* border-bottom: 2vw solid white; */
  }

  .boat {
    position: absolute;
    width: 20vw;
    right: 10vw;
    bottom: 2vw;
  }

  .water-surface .ice_container {
    position: absolute;
    left: 8vw;
    top: 2vw;
  }

  .ice_container > img {
    position: absolute;
  }

  .ice_container .seal {
    width: 8vw;
    left: 7vw;
    top: -4vw;
  }

  .ice_container .ice {
    width: 20vw;
  }

  .water {
    min-height: 100vw;
    background: rgb(22,16,0);
    background: linear-gradient(0deg, rgba(22, 16, 0, 1) 0%, rgb(26 57 62) 100%);
    color: white;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 1em;

    margin-bottom: -5em;
    padding-bottom: 5em;

    position: relative;
  }

  .water .seal {
    position: absolute;
    filter: blur(2px) brightness(0.5);
    right: 5vw;
    top: 5vw;
    width: 20vw;
  }

  .light-ray {
    width: 100%;
    filter: blur(10px);
    transform: translateY(-300px);
    opacity: 0.1;

    top: 0;
    position: absolute;
  }

  .text-box {
    max-width: 800px;
    z-index: 1;
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
  
    .water-surface .ice_container {
      display: none;
    }

    .boat {
      width: 40vw;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10vw;
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
