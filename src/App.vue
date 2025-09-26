<script lang="ts">

// Add parallax effect to the stars in the background
const onScroll = () => {
  const y = window.pageYOffset;
  const app = document.querySelector("#app") as HTMLDivElement;
  app.style.backgroundPosition = `0 ${-0.1 * y}px`;
};

export default {
  setup() {
    document.addEventListener("scroll", onScroll);
  },

  beforeDestroy() {
    document.removeEventListener("scroll", onScroll);
  }
}

</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './app.scss';
</style>
