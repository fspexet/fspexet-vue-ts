<template>
  <div class="contents">
    <h1>Biljetter</h1>
    <p
      class="bparagraph"
    >Här hittas information om när vi har föreställningar samt hur och var du skaffar dig biljetter.</p>

    <hr>

    <div id="viktigt">
      <h2>Datum</h2>
      <p>Vi har föreställning följande datum</p>
      <ul>
        <li>Måndag 2019-04-01 kl 18:00 Premiär</li>
        <li>Tisdag 2019-04-02 kl 18:00</li>
        <li>Torsdag 2019-04-04 kl 18:00</li>
        <li>Fredag 2019-04-05 kl 18:00</li>
        <li>Lördag 2019-04-06 kl 17:00 Busk</li>
      </ul>
    </div>

    <hr>

    <div id="pris">
      <h2>Pris</h2>
      <ul>
        <!-- <li>Nollan**: 100kr</li> -->
        <li>Student*: 130kr</li>
        <li>Övriga: 220kr</li>
      </ul>
      <p>Dessa priser gäller alla föreställningar under våren och inkluderar även en trerätters middag!</p>
      <p class="obs">
        <!-- **Som Nollan räknas nyantagen student på Chalmers Tekniska Högskola.<br> -->
        *Som student räknas alla som är till och med 24 år och/eller alla som har ett student-id.
      </p>
      <div id="guldkort">
        <h3>Guldkort</h3>
        <p>
          Nu kommer även F-spexet att erbjuda Guldkort i båset på Teknologgården.
          Ett Guldkort är din ultimata spexupplevelse,
          du får nämligen gratis inträde till ett (1) F-spex och ALLA Bob + Vera spex
          under ett år! Priserna för Guldkortet är
        </p>
        <ul>
          <li>Student: 350kr</li>
          <li>Övriga: 500kr</li>
        </ul>
        <p class="obs">
          OBS 2019/03/11: har vi inte fått in guldkort än. Vi uppdaterar när vi vet mer men du kan alltid mejla eller fråga i båset.
          <br>OBS: Guldkortet säljes enbart i båset på Teknologgården,
          inte på hemsidan. Guldkortet säljes enbart till studenter innehavande ett giltigt student-id!
        </p>
      </div>
    </div>

    <hr>

    <div id="försäljning">
      <h2>Försäljningsplats</h2>
      <h3 class="depth">Biljettbåset</h3>
      <p>I ett svart bås på Teknologgården (utanför Chalmers kårhus på Johanneberg) kommer det under lunchtid att säljas biljetter närmare föreställningarna. Där kan du betala kontant eller med kort.</p>
      <h3 class="depth">Internet</h3>
      <p>
        Du kan även köpa biljetter helt utan att röra dig hemifrån!
        Bara svara på formuläret nedan eller i
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdG1OnhW4AXTZ5wuGrbRatd9G8NaKJGmM96dH0z0vHcrl-90g/viewform?usp=sf_link"
        >den här länken</a> med följande information:
      </p>
      <ul>
        <li>Vilken föreställning ni vill se</li>
        <li>Namn på alla i sällskapet</li>
        <li>Vilken biljett-kategori som gäller för varje person (<!--nollan,  -->student, övrig)</li>
        <li>Eventuella allergier och matpreferenser</li>
      </ul>
      <p>
        Så borde ni snart få en mejl om hur ni betalar för att bekräfta er plats. Om ni har frågor kan ni mejla
        <a
          href="mailto:biljetter@f-spexet.se"
        >
          <b>Biljetter@f-spexet.se</b>
        </a>
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdG1OnhW4AXTZ5wuGrbRatd9G8NaKJGmM96dH0z0vHcrl-90g/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Loading...</iframe>
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
  color: red;
  font-weight: bold;
}
p,
h3 {
  padding-left: 10px;
}
iframe {
  width: 100%;
  height: 500px;
}

.bparagraph {
  font-size: 20px;
}
</style>
