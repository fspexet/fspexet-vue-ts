<template>
  <header>
    <div class="menu">
      <router-link class="menu_button" to="/">
        PREMIÄR
      </router-link>
      <router-link class="menu_button" to="/tickets">
        BILJETTER
      </router-link>
      <router-link class="menu_button" id="logo" to="/">
        <img
          id="logo-image"
          src="@/assets/logga_default.png"
          alt="F-spexets logga"
        />
      </router-link>
      <router-link class="menu_button" to="/about-us">
        OM OSS
      </router-link>
      <router-link class="menu_button" to="/contact">
        KONTAKT
      </router-link>
    </div>
  </header>
</template>

<style scoped>

header {
  width: max-content;
  margin: 5px auto;
}

.menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.menu_button {
  color: inherit;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: normal;
}

.menu_button {
  margin-right: 3px;
  text-decoration: none;
}

.menu_button:hover {
  text-decoration: underline;
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
