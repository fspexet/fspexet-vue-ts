<script>
  import { ref } from 'vue';

  function formatDuration(duration) {
    duration = Math.max(0, duration);
    const millis = Math.abs(duration.valueOf());
    const days = Math.floor(millis / 1000 / 60 / 60 / 24);
    const hours = Math.floor(millis / 1000 / 60 / 60 - days * 24);
    const minutes = Math.floor(millis / 1000 / 60 - days * 24 * 60 - hours * 60);
    const seconds = Math.floor(millis / 1000 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);
    
    const output = [];
    output.push(`${days}`);
    output.push(`${hours.toString().padStart(2, "0")}`);
    output.push(`${minutes.toString().padStart(2, "0")}`);
    output.push(`${seconds.toString().padStart(2, "0")}`);

    if (
        days === 0 &&
        hours === 0 &&
        minutes === 0 &&
        seconds === 0
    ) {
        output.push("0 sekunder");
    }

    return output;
}

  export default {
    setup() {
      const releaseDate = new Date("2025-01-25T00:00Z");
      const countdownLabel = ref("")

      const f = () => {
        const now = new Date();
        const duration = new Date(releaseDate - now);
        countdownLabel.value = formatDuration(duration);
      };
      setInterval(f, 1000);
      f();

      return {
        countdownLabel
      }
    },

    beforeDestroy() {

    }
  }

</script>

<template>
  <div class="contents">
    <div class="next_spex_header">
      <span class="header_small">Nästa spex</span>
      <span class="header_big">2025 Q2</span>

      <span class="header_small">Temat släpps om</span>
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
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  min-height: 25vh;
}

.header_small {
  font-size: 2rem;
}

.header_big {
  font-size: 5rem;
  font-weight: bold;
}

.countdown_clock {
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(7, auto);
  /* grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; */
  place-items: center;
  gap: 0.0em 0.5em;
}

.countdown_clock .digit {
  font-weight: bold;
  font-size: 3em;
}

.countdown_clock .label {
  font-size: 0.75em;
}

</style>
