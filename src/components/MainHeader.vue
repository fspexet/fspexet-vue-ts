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
  background-color: black;
  margin: 10px auto;
}

@media screen and (max-width : 600px) {
  header{
    width: 100%;
  }
  #top {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    
  }
  a.toplink{
    position: relative;
    flex: 1 1 30%;
    order: 2;
    flex-shrink: 5;

  }
  #logo:nth-child(3){
    flex: 0 0 100%;
    order: 1;
  }
  h1 {
    text-decoration: underline;

  }


}
a.toplink{
  margin-right: 3px;
  text-decoration: none;
}
a:hover {
  color: white;
  text-decoration: underline;
}
h1 {
  font-family: 'Times New Roman', Times, serif;
}
</style>
