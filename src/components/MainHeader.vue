<template>
  <header>
    <div id="top">
      <router-link class="toplink" to="/tickets">
        <h1>BILJETTER</h1>
      </router-link>
      <router-link class="toplink" to="/menu">
        <h1>MENY</h1>
      </router-link>
      <router-link class="toplink" id="logo" to="/">
        <img id="logo-image" src="@/assets/logo_new.png" alt="F-spexet 2020">
      </router-link>
      <router-link class="toplink" to="/about-us">
        <h1>OM OSS</h1>
      </router-link>
      <router-link class="toplink" to="/contact">
        <h1>KONTAKT</h1>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  width: max-content;
  background-color: black;
  margin: 5px auto;
  font-family: Josefin, Futura, 'PakType Tehreer';
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
    width: 1%;
  }
  #logo:nth-child(3) {
    flex: 0 0 100%;
    width: 1%;
    order: 1;
    /* justify-self: auto; */
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
