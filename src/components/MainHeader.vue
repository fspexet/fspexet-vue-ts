<template>
<header>
    <div id="top">
      <router-link class="toplink" to="/tickets">
        <h1 class="link_text">Biljetter</h1>
      </router-link>
      <router-link class="toplink" to="/menu">
        <h1 class="link_text">Meny</h1>
      </router-link>
      <router-link id="logo" to="/">
        <img id="logo-image" src="@/assets/logo.png">
      </router-link>
      <router-link class="toplink" to="/about-us">
        <h1 class="link_text">Om oss</h1>
      </router-link>
      <router-link class="toplink" to="/contact">
        <h1 class="link_text">Kontakt</h1>
      </router-link>
    </div>
  </header>
</template>

<style>
  header{
    align-self: center;
    background-color: red;  
    margin: 20px
  }
    .link_text{
    color: white;
  }
</style>
