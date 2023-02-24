<template>
  <footer>
    <hr>
    <h1 id="domain">F-spexet.se</h1>
    <div id="box">
      <div class="content" id="plats">
        <h2>Var?</h2>
        <p>F-spexet kommer under våren hållas i</p>
        <!--<p>Sektionslokalen Focus,
          <br>Kemivägen 11,
          <br>412 58 Göteborg
        </p>
          <a href="https://goo.gl/maps/MjCnfJkefUu6JHhR6">Google maps</a>-->
        <p>Kalle Glader,
          <br>Hugo Grauers gata 4B,
          <br>411 33 Göteborg
        </p>
          <a href="https://goo.gl/maps/vGRffRGxgRMErT4RA">Google maps</a>
      </div>

      <div class="content" id="datum">
        <h2>När?</h2>
        <ul>
        <li>Tisdag 28 mars kl 18:00 (premiär!) </li>
        <li>Onsdag 29 mars kl 18:00 </li>
        <li>Fredag 31 mars kl 18:00 </li>
        <li>Lördag 1 april kl 17:00 </li>
        <li>Söndag 2 april kl 16:00 (busk!) </li>
        </ul>
      </div>

      <div class="content" id="wiki_2">
        <h2>Uppdatera hemsidan</h2>
            <p>
                För att vara säker på att du ser den senaste versionen av hemsidan rekommenderas att du rensar din cache och laddar om hemsidan. En genväg att göra detta i vissa webläsare är "ctrl+F5" och om detta inte fungerar borde "ctrl+shift+r" fungera.
            
            </p>
      </div>

      <div class="content" id="wiki">
        <h2>Länkar</h2>
          <a href="https://wiki.f-spexet.se/">Wikin</a>
          <br>
          <a href="https://www.facebook.com/FSpexet">Facebook</a>
		  <br>
          <a href="https://www.instagram.com/fspexet">Instagram</a>
		  <br>
          <a href="https://www.youtube.com/channel/UCtnqDd2Japmk7zmVAbHtK-Q">YouTube</a>
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
