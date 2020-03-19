<template>
  <div class="contents">
    <h1>Nyheter</h1>
    <!--
      <h2>Spexets temasläppvisa</h2>
      <h3>Text av:Media</h3>
      <h3>Orginal melodi:Idas sommarvisa</h3>

      <p>

      Du ska inte tro det blir spex snart <br>
      ifall inte rebus snart dyker upp <br>
      och när våran rebus den dyker upp <br>
      då vet du spexet är snart <br>


      Du ska inte tro det blir sommar
      Ifall inte nån sätter fart
      På sommarn och gör lite somrigt
      Då kommer blommorna snart
      Jag gör så att blommorna blommar
      Jag gör hela kohagen grön
      Och nu så har sommaren kommit
      För jag har just tagit bort snön

      Jag gör mycket vatten i bäcken
      Så där så det hoppar och far
      Jag gör fullt med svalor som flyger
      Och myggor som svalorna tar
      Jag gör löven nya på träden
      Och små fågelbon här och där
      Jag gör himlen vacker om kvällen
      För jag gör den alldeles skär

      Och smultron det gör jag åt barna
      För det tycker jag dom kan få
      Och andra små roliga saker
      Som passar när barna är små
      Och jag gör så roliga ställen
      Där barna kan springa omkring
      Då blir barna fulla med sommar
      Och bena blir fulla med spring

        <router-link to="/tickets">
          <button>Biljett</button>
        </router-link>
      -->

    <hr />
    <div id="news_cancellation">
      <h2>Vårföreställningar inställda!</h2>
      <p>
        Det är med stor sorg och tungt hjärta som vi har beslutat att ställa in
        samtliga föreställningar under våren. Som ni troligen är alltför väl
        medvetna om, pågår för tillfället ett utbrott av
        <span style="font-family:EB Garamond SC">covid-19</span> runt om i
        världen. <span style="font-family:EB Garamond SC">who</span> har nyligen
        klassat utbrottet som en pandemi, och regeringen har infört ett förbud
        mot allmänna evenemang på över 500 personer. I samband med dessa
        händelser har vi dömt att det mest lämpliga beslutet är att fördröja
        detta års första uppsättning föreställningar, då vi inte kan garantera
        tillräckligt med smittskydd för varken publik eller våra spexare.
      </p>

      <h3>För er som redan köpt en biljett</h3>
      <p>
        Om ni har köpt en biljett till vårens inställda föreställningar, har vi
        skickat ett mail till kontaktpersonen i ert sällskap med information om
        återbetalning. Har ni inte emottagit ett sådant mail, kontakta vänligen
        <a href="mailto:kassor@f-spexet.se"> kassor@f-spexet.se </a>.
      </p>
      <p>
        Har ni övriga frågor, är ni mycket välkomna att kontakta
        <a href="mailto:styret@f-spexet.se"> styret@f-spexet.se </a>.
      </p>

      <h3>Kommer spexet att överleva?</h3>
      <p>
        <span style="font-family:EB Garamond SC">Ja!</span> Ni har inte sett det
        sista av Johannes Kepler, och än mindre oss! I höst kommer vi tillbaka
        med pompa och ståt, och vi hoppas få kunna se er då! Tills dess tackar
        vi för er förståelse, och önskar er det bästa under dessa osäkra tider!
        <br />
        <span style="float:right"><i>F-spexet 2020</i></span> <br />
      </p>
    </div>

    <hr />

    <div id="news_temaslapp">
      <h2>F-spexet 2020 &mdash; Johannes Kepler</h2>
      <p style="margin-top: -20px">
        <span style="font-family:EB Garamond SC">eller</span>
        <span style="font-style:italic;font-feature-settings:'hlig'">
          Illustrerad Vetenskap</span
        >
      </p>
      <p>
        Är er vardag trist och grå? Har ni alltid haft siktet inställt på
        stjärnorna men aldrig riktigt haft budgeten att åka till Mars? Då har ni
        mycket gemensamt med den unge Johannes Kepler som alltid har något i
        kikaren, bokstavligen.
      </p>
      <p>
        Någon gång i framtiden kommer vi framföra 2020 års fantastiska spex, som
        tar oss till det Tysk-Romerska rikets hov i Prag kring sekelskiftet år
        1600. Vi följer den unge Johannes Kepler som just ska träda in som
        lärling till hovastronomen Tycho Brahe, efter att ha nått prominens i
        Graz under sin mentor, Michael Mästlin.
      </p>
      <p></p>
      <img src="../assets/mysterium.png" class="big_image" alt />
    </div>

    <hr />

    <div id="news_rebus">
      <h2>Årets rebus är här!</h2>
      <p id="intro"></p>
      <p>
        Nu har temat släppts, men rebusen förblir. Kan du lyckas lista fram
        <i>Johannes Kepler</i> från den här finurliga stofilen, med sin stav och
        dopkärl?
      </p>
      <img
        src="../assets/rebus.png"
        class="big_image"
        alt="Rebus för spexet 2020"
      />
    </div>
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
