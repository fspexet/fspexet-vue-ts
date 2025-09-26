<script lang="ts">

  const names = [
    "Billy the Kid",
    "Hera",
    "Agatha Christie",
    "Beowulf",
    "Fantomen på operan",
    "Mary Read",
    "Medici och Pazzi",
    "Thor Heyerdahl",
    "Ludwig Emil Grimm",
    "Kubakrisen",
    "Zelda Fitzgerald",
    "UR",
    "Jules Verne",
    "Cecilia Vasa",
    "Döden",
    "Johannes Kepler",
    "Rockefeller",
    "Tillbaka till Dåtiden",
    "Marius Jacob",
    "Pesten",
    "Ernest & Earharts Äventyrsbyrå AB",
  ];

  names.reverse();

  export default {
    metaInfo: {
      title: 'F-Spexet - Tidigare Spex',
    },
    methods: {
      getImgUrl(item: number) {
        return new URL('/assets/posters/' + (2025 + 1 - item) + '.jpg', import.meta.url);
      }
    },
    setup() {
      return {
        names
      }
    },
  }

</script>

<template>
  <div class="contents">
    <h1>Tidigare F-Spex</h1>
    <p>Vi har framfört föreställningar sedan 2005! Nedan har vi samlat alla tidigare spex, tryck bara på en av affischerna för att se vad spexet handlade om.</p>

    <div class="poster-container">
      <router-link v-for="item in (2025-2004)" :key="item" :to="'/about-us/history/' + (2025 + 1 - item)">
        <div class="poster">
          <h3>{{ 2025 + 1 - item }}</h3>
          <img :src="getImgUrl(item).toString()" />
          <p>{{ names[item - 1] }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

a {
  color: inherit;
}

.poster-container {
  margin-top: 4rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
  gap: 4rem 2rem;
}

.poster {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;
  font-style: normal;
  text-align: center;
}

.poster img {
  width: 100%;
  transition: 100ms scale;
}

.poster:hover img {
  scale: 1.025;
}

.poster p,
.poster h3 {
  font-style: normal;
  margin: 0;
}

</style>
