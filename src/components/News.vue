<template>
  <div class="contents">
    <h1>Nyheter</h1>
    <hr />
    <div id="rebus">
      <p>Nu är det dags! F-spexet 2024: Pesten, sveper fram genom Göteborg</p>
      <p>
        Men hur löser man årets rebus? Du behöver inte längre undra för nu skall
        vi presentera lösningen:
      </p>
      <p>
        bilderna föreställer då en PENNA, ett ANN (Artificielt neuralt nätverk)
        som är spegelvänt, en OST, ett O, nemos FENA, och två betyg som inom det
        svenska systemet motsvaras av F respektiva A.
        <br />
        <br />
        Tillsammans blir detta: PENNA - NNA + OST - O + FENA - F - A => PE + ST
        + EN = Pesten
      </p>
      <img src="@/assets/rebus2024.png" />
    </div>
    <hr />
    <div id="nystart">
      <p>
        Nu är spexet snart här igen. Förbered dig på att tänka skarpt för att
        lösa årets nya rebus som läggs upp I början av Februari
      </p>
    </div>
    <hr />
  </div>
</template>

<style scoped>
#intro {
  font-size: 20px;
  text-decoration: ivory;
}

button {
  font-size: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 2px #fff, /*bottom external highlight*/ 0 -1px 1px #666,
    /*top external shadow*/ inset 0 -1px 1px rgba(0, 0, 0, 0.5),
    /*bottom internal shadow*/ inset 0 1px 1px rgba(255, 255, 255, 0.8); /*top internal highlight*/
}

img {
  width: 100%;
}
</style>
