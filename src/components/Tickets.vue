<template>
  <div class="contents">
    <h1>Biljetter</h1>
    <p
      class="bparagraph"
    >Här hittas information om när vi har föreställningar samt hur och var du skaffar dig 
    biljetter.</p>

    <hr>
    <div id="cancellation">
      <p class="obs">
       Hej!
       <br><br>
       Med anledning av den senaste tidens utveckling med Coronaviruset har F-spexets styre 
       bedömt att vi inte kan garantera tillräckligt med smittskydd för varken publik eller 
       våra spexare. Därmed är tyvärr våra vårföreställningar inställda.
       <br><br>
       Vår ambition är att införa extra föreställningar i höst för att kompensera. Ni är 
       varmt välkomna till våra föreställningar då. Information om dessa kommer komma här 
       när det närmar sig.
       <br><br>
       Om du redan har köpt biljetter från oss så har ett mail skickats ut till 
       kontaktpersonen för varje sällskap med information om återbetalning. Har du inte fått 
       ett sådant mail, kontakta
       <a href="mailto:kassor@f-spexet.se">
        kassor@f-spexet.se
       </a>.
       <br><br>
       Har du några övriga frågor kan du kontakta vårt styre på
       <a href="mailto:styret@f-spexet.se">
        styret@f-spexet.se
       </a>.
       <br><br>
       Tack så mycket för visat intresse, vi hoppas få se er i höst!
       <br><br>
       Spexiga Hälsningar
       <br>
       Styret genom Tant Bea
      </p>
    </div>
    <hr>

    <div id="viktigt">
      <h2>Datum</h2>
      <p>Vi har inställda föreställningar på följande datum</p>
      <ul>
        <li>Tisdag 2020-03-24 kl 18:00 [INSTÄLLD] </li>
        <li>Onsdag 2020-03-25 kl 18:00 [INSTÄLLD] </li>
        <li>Fredag 2020-03-27 kl 18:00 [INSTÄLLD] </li>
        <li>Lördag 2020-03-28 kl 17:00 [INSTÄLLD] </li>
        <li>Söndag 2020-03-29 kl 17:00 [INSTÄLLD] </li>

        <!-- <li class="obs">Tisdag 2019-04-02 kl 18:00 - SLUTSÅLD</li> -->
      </ul>

      <!-- <p class="obs">
        *reserverad för F-nollan, vi öppnar för allmän försäljning några dagar innan föreställningen.<br>
      </p> -->
    </div>

    <hr>

    <div id="pris">
      <h2>Pris</h2>
      <ul>
        <!-- <li>Nollan**: 100kr</li> -->
        <li>Student*: 130kr</li>
        <li>Övriga: 250kr</li>
      </ul>
      <p>Dessa priser gäller alla föreställningar under våren och inkluderar även en trerätters middag!</p>
      <p class="obs">
        <!-- **Som Nollan räknas nyantagen(augusti 2019) student på Chalmers Tekniska Högskola.<br> -->
        *till och med 24 års ålder och/eller innehavande giltigt student-id.
      </p>
      <div id="guldkort">
        <h3>Guldkort</h3>
        <p>
          F-spexet erbjuder även Guldkort. Ett Guldkort är din ultimata spexupplevelse, du får nämligen gratis inträde till ett (1)
          F-spex och alla Chalmersspex i RunAn under ett kalenderår! Notera att Guldkortet inte gäller för de av Chalmersspexets
          föreställningar som hålls på någon annan plats än i RunAn. Priserna för Guldkortet är
        </p>
        <ul>
          <li>Barn**: 300kr</li>
          <li>Övriga: 500kr</li>
        </ul>
        <p class="obs">
          OBS: Guldkortet säljes enbart i båset på Teknologgården, inte på hemsidan.
        </p>
        <p class="obs">
          **till och med gymnasiet, samt Chalmersstudenter.
        </p>
      </div>
    </div>

    <hr>

    <div id="försäljning">
      <h2>Försäljningsplats</h2>
      <h3 class="depth">Biljettbåset</h3>
      <p>I ett svart bås på Teknologgården (utanför Chalmers kårhus på Johanneberg) kommer 
         det under lunchtid på vardagar, veckorna innan föreställningar, att säljas biljetter. 
         Där kan du betala kontant eller med kort.
      </p>
      <h3 class="depth">Internet</h3>
      <p>
        Du kommer även kunna köpa biljetter helt utan att röra dig hemifrån! Detta görs via 
        mail eller formulär när föreställningsdatum fastställts.
        <!-- Bara mejla oss på <a
          href="mailto:biljetter@f-spexet.se"
        >
          biljetter@f-spexet.se
        </a>,  på formuläret nedan eller i <a href="https://docs.google.com/forms/d/e/1FAIpQLScOKpbjWhGssL4Rd5Vue84tSnZ9q3HBlsLXRRF4BzRlvtBCjA/viewform?usp=sf_link">den här länken</a>
         med följande information:
      </p>
      <ul>
        <li>Vilken föreställning ni vill se</li>
        <li>Namn på alla i sällskapet (samt om ni vill gå med ett annat sällskap)</li>
        <li>Vilken biljett-kategori som gäller för varje person (student, övrig)</li>
        <li>Eventuella allergier och matpreferenser</li>
      </ul>
      <p>
        så borde ni snart få ett mejl om hur ni betalar för att bekräfta er plats. Om ni har frågor kan ni även mejla
        <a
          href="mailto:biljetter@f-spexet.se"
        >
          biljetter@f-spexet.se
        </a>
      </p>
    </div>
     <iframe 
     src="https://docs.google.com/forms/d/e/1FAIpQLScOKpbjWhGssL4Rd5Vue84tSnZ9q3HBlsLXRRF4BzRlvtBCjA/viewform?embedded=true" 
     frameborder="0" marginheight="0" marginwidth="0">
     Formuläret läses in...
     </iframe> -->
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  metaInfo: {
    title: 'Biljetter',
  },
};
</script>

<style scoped>
.obs {
  color: orange;
}
iframe{
width: 100%;
height: 400px;
}

</style>
