<template>
  <header>
    <div id="top">
      <router-link class="toplink" to="/tickets">
        <h0>BILJETTER</h0>
      </router-link>
      <router-link class="toplink" to="/menu">
        <h0>MENY</h0>
      </router-link>
      <router-link class="toplink" id="logo" to="/">
        <img id="logo-image" src="@/assets/logo.png" alt="F-spexet 2020">
      </router-link>
      <router-link class="toplink" to="/about-us">
        <h0>OM OSS</h0>
      </router-link>
      <router-link class="toplink" to="/contact">
        <h0>KONTAKT</h0>
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

@media screen and (max-width: 1350px) {
  header {
    overflow-x: hidden;
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
    flex-shrink: 0;
    width: 500%;
    text-align: center;
  }
  #logo:nth-child(3) {
    flex: 0 0 100%;
    width: 100%;
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
