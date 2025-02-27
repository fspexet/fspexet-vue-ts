<template>
  <header>
    <div class="menu">
      <router-link class="menu_button" to="/">
        <img class="board" src="@/assets/logos/plankor.svg" />
        <span>HEM</span>
      </router-link>
      <router-link class="menu_button" to="/tickets">
        <img class="board" src="@/assets/logos/plankor.svg" />
        <span>BILJETTER</span>
      </router-link>
      <router-link class="menu_logo_button" id="logo" to="/">
        <img
          id="logo-image"
          src="@/assets/logos/logga_hemsida.svg"
          alt="F-spexets logga för 2025"
        />
      </router-link>
      <router-link class="menu_button" to="/about-us">
        <img class="board" src="@/assets/logos/plankor.svg" />
        <span>OM OSS</span>
      </router-link>
      <router-link class="menu_button" to="/contact">
        <img class="board" src="@/assets/logos/plankor.svg" />
        <span>KONTAKT</span>
      </router-link>
    </div>
  </header>
</template>

<style scoped>

header {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}

.menu_button {
  color: white;
  text-shadow: 0 0 15px black;
  box-shadow: 0 0 30px 20px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;

  transition: transform 100ms;

  width: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu_button .board {
  width: 150px;
  position: absolute;
}

.menu_button span {
  z-index: 1;
}

.menu_button:hover {
  text-decoration: underline;
  transform: rotate(-3deg) scale(1.05);
}

@media screen and (max-width: 800px) {
  header {
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
  }
}

</style>
