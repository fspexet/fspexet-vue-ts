<template>
  <footer>
    <hr>
    <h1 id="domain">F-spexet.se</h1>
    <div id="box">
      <div class="content" id="plats">
        <h2>Var?</h2>
        <p>Kalle Glader,
          <br>Hugo Grauers gata 4A
        </p>
          <a href="https://goo.gl/maps/bUjXVzHU9sm">Google maps</a>
      </div>
      <div class="content" id="wiki">
        <h2>Länkar</h2>
          <a href="https://wiki.f-spexet.se/">Wikin</a>
          <br>
          <a href="https://www.facebook.com/FSpexet">Facebook</a>
      </div>
    </div>
  </footer>
</template>



<style scoped>
footer {
  margin-top: auto;
  margin-bottom: 0;
}

#domain {
  text-align: center;
}

#box {
  margin: auto;
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: center;
}

button a {
  color: black;
}

h1 {
  font-family: 'Times New Roman', Times, serif;
}

.content {
  border-radius: 30px;
  width: 20%;
  margin: 10px;
  min-width: 250px;
  padding: 10px 20px;  
  padding-bottom: 10px;
  background-color: #151515;
}

h2,
p {
  color: white;
  margin-top: 5px;
  margin-bottom: 00px;
}
</style>