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
    <div class="sky">
      <h2>F-spexet 2025 presenterar</h2>
      <h1>Ernest & Earharts Äventyrsbyrå AB</h1>
    </div>
    <div class="water-surface">
      <img src="@/assets/logos/boat.svg" class="boat" />
    </div>
    <div class="water">
      <img src="@/assets/light-ray.png" class="light-ray" />
      <div class="text-box">
        <h2>This is a heading</h2>
        <p>lorm ismum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui, possimus inventore tempora ullam asperiores itaque obcaecati, voluptate suscipit quia ipsum, illo blanditiis architecto ad numquam incidunt quos iusto. Dolore?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum vero maiores nostrum eos? Illum odit, accusamus ipsam vitae excepturi natus culpa optio beatae, hic ad a soluta nostrum veritatis!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .sky {
    height: 50vw;
    background: rgb(36,62,131);
    background: linear-gradient(180deg, rgb(153 176 238) 2%, rgba(220, 250, 255, 1) 100%);
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .water-surface {
    position: relative;
    height: 20vw;
    background: linear-gradient(0deg, rgb(25, 32, 50) 0%, rgb(52, 58, 84) 100%);
    border-bottom: 20px solid white;
  }

  .boat {
    position: absolute;
    right: 10%;
    top: -90%;
  }

  .water {
    height: 100vw;
    background: rgb(22,16,0);
    background: linear-gradient(0deg, rgba(22, 16, 0, 1) 0%, rgb(26 57 62) 100%);
    color: white;
    overflow: hidden;
    display: flex;
    justify-content: center;

    position: relative;
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
  }

</style>
