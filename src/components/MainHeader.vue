<template>
  <header>
    <div id="top">
      <router-link class="toplink" to="/tickets">
        <h1>Biljetter</h1>
      </router-link>
      <router-link class="toplink" to="/menu">
        <h1>Meny</h1>
      </router-link>
      <router-link id="logo" to="/">
        <img id="logo-image" src="@/assets/logo.png">
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
  background-color: red;
  margin: 5px auto;
}
h1 {
  color: white;
}
a {
  text-decoration: none;
}
</style>
