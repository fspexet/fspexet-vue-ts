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
        <button>
          <a href="https://goo.gl/maps/bUjXVzHU9sm">Google maps</a>
        </button>
      </div>
      <div class="content" id="wiki">
        <h2>Till Wikin</h2>
        <button>
          <a href="https://wiki.f-spexet.se/">wiki.f-spexet.se</a>
        </button>
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
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

a {
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
  background-color: #0a0a0a;
}

h2,
p {
  color: white;
  margin-top: 5px;
  margin-bottom: 00px;
}
</style>