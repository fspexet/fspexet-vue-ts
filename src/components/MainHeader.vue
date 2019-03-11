<template>
  <header>
    <div id="top">
      <router-link class="toplink" to="/tickets">
        <h1>Biljetter</h1>
      </router-link>
      <router-link class="toplink" to="/menu">
        <h1>Meny</h1>
      </router-link>
      <router-link class="toplink" id="logo" to="/">
        <img id="logo-image" src="@/assets/logo.png" alt="loggan för f-spexet 2019">
      </router-link>
      <router-link class="toplink" to="/about-us">
        <h1>Om oss</h1>
      </router-link>
      <router-link class="toplink" to="/contact">
        <h1>Kontakt</h1>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  width: max-content;
  background-color: black;
  margin: 5px auto;
}

@media screen and (max-width: 800px) {
  header {
    width: 100%;
    height: 100%;
  }
  #top {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
  a.toplink {
    position: relative;
    order: 3;
    xflex: 1 1 30%;
    flex-shrink: 5;
  }
  #logo:nth-child(3) {
    flex: 0 0 100%;
    order: 1;
    justify-self: auto;
    }
  h1 {
    text-decoration: underline;
  }
  img {
    width: 100%;
    height: 100%;
    /* max-width: 256px; */
    /* max-height: 350px; */
  }
}

a.toplink {
  margin-right: 3px;
  text-decoration: none;
}
a:hover {
  color: white;
  text-decoration: underline;
}

</style>
