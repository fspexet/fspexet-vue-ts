<script lang="ts">
  import { ref } from 'vue';
  import { formatDurationAsArray } from "@/helper-functions";

  let interval: number;

  export default {
    setup() {
      const releaseDate = new Date("2025-02-28T13:00:00");
      const countdownLabel = ref([ "00", "00", "00", "00" ]);

      const f = () => {
        const now = new Date();
        const duration = new Date(releaseDate.valueOf() - now.valueOf());
        countdownLabel.value = formatDurationAsArray(duration);
      };
      interval = setInterval(f, 1000);
      f();

      return {
        countdownLabel
      }
    },

    beforeDestroy() {
      clearInterval(interval);
    }
  }

</script>

<template>
  <div class="contents">
    <div class="next_spex_header">
      <span class="heading_small">Årets spex har temasläpp om</span>
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
</template>

<style scoped>

.next_spex_header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  margin-top: 15%;
  min-height: 55vh;
}

.heading_small {
  font-size: 2rem;
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
  /*animation: float_around infinite alternate-reverse 10s;*/
}

/* 
.countdown_clock .digit:nth-child(1) { animation-delay: 0; }
.countdown_clock .digit:nth-child(2) { animation-delay: 2534ms; }
.countdown_clock .digit:nth-child(3) { animation-delay: 5821ms; }
.countdown_clock .digit:nth-child(4) { animation-delay: 7928ms; }
*/

.countdown_clock .label {
  font-size: 0.75em;
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
