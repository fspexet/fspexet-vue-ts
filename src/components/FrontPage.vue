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
  <div>
    <div class="sky"></div>
    <div class="water-surface"></div>
    <div class="water">
      <img src="@/assets/light-ray.png" class="light-ray" />
    </div>
  </div>
</template>

<style scoped>

  .sky {
    height: 50vw;
    background: rgb(36,62,131);
    background: linear-gradient(180deg, rgb(153 176 238) 2%, rgba(220, 250, 255, 1) 100%);
  }

  .water-surface {
    height: 20vw;
    background: linear-gradient(0deg, rgb(25, 32, 50) 0%, rgb(52, 58, 84) 100%);
    border-bottom: 20px solid white;
  }

  .water {
    height: 100vw;
    background: rgb(22,16,0);
    background: linear-gradient(0deg, rgba(22, 16, 0, 1) 0%, rgb(26 57 62) 100%);
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  .light-ray {
    width: 100%;
    filter: blur(10px);
    transform: translateY(-300px);
    opacity: 0.4;
  }

</style>
