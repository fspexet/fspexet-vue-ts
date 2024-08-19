<template>
  <div class="contents">
    <h1>Nyheter</h1>
    <hr />

    <div id="start_höst">
      <p>
        Nu är det dags igen för F-spexet Pesten at hosta sig upp på scen. Om du
        inte såg oss i våras är nu sista chansen.
        <br />
        Vi sätter upp föreställningar följande datum:
      </p>
      <li>Måndag 9 September kl 18</li>
      <li>Tisdag 10 September kl 18</li>
      <li>Onsdag 11 September kl 18</li>
    </div>
    <p>Delad pest är dubbel pest, hoppas vi ses på föreställningarna!</p>
    <hr />

    <div id="avslutning_vår">
      <p>
        Våran föreställnings period för våren är nu tyvär slut. <br />Men likt
        influensa så kommer vi tillbaka igen till hösten! Troligen sker det
        kring tidig September men mer exakt datum uppdateras efter sommaren.
      </p>
      <p>
        Så berätta för dina vänner eller kom och besök oss en andra gång.
      </p>
    </div>
    <hr />

    <div id="info">
      <p>
        Florens gator står stilla när Pesten drar drar fram. Alla håller sig
        undan och man kan höra en nål falla i tystna... vänta. Är det en fest
        orkester som hörs i katedralen? Varför reser sig det där liket? Och är
        det någon annan som tycker det luktar som gammal ost här?
        <br />
        Vill du veta mer får du dyka på en av våra föreställiningar som sker
        den:
      </p>

      <ul>
        <li>Tisdag 9 April kl 18</li>
        <li>Onsdag 10 April kl 18</li>
        <li>Fredag 12 April kl 18</li>
        <li>Lördag 13 April kl 17</li>
        <li>Söndag 14 April kl 16</li>
      </ul>
    </div>
    <p>
      Information hur du skaffar dig biljett hittas från biljettknappen längst
      upp på hemsidan.
    </p>

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
      <img src="@/assets/rebus_2024.png" />
    </div>

    <!--  
    <hr />
      <div id="nystart">
      <p>
        Nu är spexet snart här igen. Förbered dig på att tänka skarpt för att
        lösa årets nya rebus som läggs upp I början av Februari
      </p>
    </div>
     -->
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
