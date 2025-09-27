<script lang="ts">

import { ref } from 'vue';

let f = () => {};
let last = 0;

export default {
  setup() {
    const visible = ref(innerWidth > 650);

    f = () => {
      if (innerWidth <= 650 && last > 650) {
        visible.value = false;
      }
      if (innerWidth > 650) {
        visible.value = true;
      }

      last = innerWidth;
    }

    window.addEventListener("resize", f);

    return {
      visible
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", f);
  }
}

</script>

<template>
  <header>
    <router-link to="/">
      <img
        id="logo-image"
        src="@/assets/logos/fspexet.png"
        alt="F-spexets logga"
      />
    </router-link>

    <button class="toggle" @click="visible = !visible">
      <i class="pi pi-bars"></i>
    </button>

    <div class="menu" v-if="visible">
      <router-link class="menu_button" to="/about-us/history">
        Tidigare spex
      </router-link>
      <router-link class="menu_button" to="/about-us">
        Om oss
      </router-link>
      <router-link class="menu_button" to="/contact">
        Kontakt
      </router-link>

      <div class="socials">
        <a href="https://www.instagram.com/fspexet" title="Följ oss på Instagram">
          <i class="pi pi-instagram"></i>
        </a>
        <a href="https://www.facebook.com/FSpexet" title="Följ oss på Facebook">
          <i class="pi pi-facebook"></i>
        </a>
        <a href="mailto:styret@f-spexet.se" title="Kontakta oss via mejl">
          <i class="pi pi-envelope"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>

a {
  color: inherit;
}

header {
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0.25rem 1rem;

  background: black;
  z-index: 200;
}

.menu,
.socials {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.socials {
  gap: 1rem;
}

.menu_button {
  color: inherit;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
}

.menu_button:hover {
  text-decoration: underline;
}

#logo-image {
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
  width: 100px;
}

.toggle {
  all: unset;
  cursor: pointer;
  width: 4rem;
  height: 4rem;

  justify-content: center;
  align-items: center;

  display: none;
}

@media screen and (max-width: 651px) {
  .toggle {
    display: flex;
  }

  .menu {
    flex-direction: column;
    gap: 0;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(100%);

    background: white;
    color: black;
    box-shadow: 0 0 3rem rgba(0, 4, 26, 0.5);
  }

  .menu_button {
    padding: 1em;
  }

  .socials {
    font-size: 1.5rem;
    gap: 2rem;
    padding: 0.5em;
  }

  /* header {
    overflow-x: hidden;
    width: 100%;
    margin-bottom: 3rem;
  }
  .menu {
    gap: 0;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
  .menu_button {
    position: relative;
    order: 3;
    flex-shrink: 0;
    width: 500%;
    text-align: center;
  }
  #logo {
    flex: 0 0 100%;
    width: 100%;
    order: 1;
  } */
}

</style>
