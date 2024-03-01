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
        <img
          id="logo-image"
          src="@/assets/logga_2024_text.svg"
          alt="F-spexet"
        />
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
  background-color: #000000; /* hex #RRGGBB */
  margin: 5px auto;
}

h0 {
  font-family: 'Tilt Neon', sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  font-variation-settings: 'XROT' 0, 'YROT' 0;

  color: #fff;
  /*  animation: vfx 2s infinite alternate; */
  text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 15px #fff, 0 0 25px #1bb82a,
    0 0 25px #1bb82a, 0 0 25px #1bb82a, 0 0 25px #1bb82a, 0 0 25px #1bb82a;
}

@keyframes vfx {
  100% {
    /* Larger blur radius */
    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
      0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
  }
  0% {
    /* Smaller blur radius */
    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #0fa,
      0 0 45px #0fa, 0 0 55px #0fa, 0 0 70px #0fa, 0 0 80px #0fa;
  }
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
