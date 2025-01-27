<script lang="ts">

export default {
  metaInfo: {
    title: 'F-Spexet - Biljetter',
  },

  setup() {
    // Året för nollan slår om typ 1 juli varje år (det är inte alltid 181 dagar från 1 jan till 1 juli)
    const nollanYear = new Date(new Date().valueOf() - 181 * 24 * 60 * 60 * 1000).getFullYear();
    return { nollanYear }
  }
};

</script>

<template>
  <div class="contents">
    <h1>Biljetter</h1>
    <hr />

    <p>Något bra om biljetter och sånt</p>
    <p>OBS: Under föreställningen förekommer starkt blinkande ljus.</p>
    <p>Föreställningarna sätts upp i samarbete med Studiefrämjandet.</p>

    <h2>Priser</h2>
    <ul>
      <li>F-Nollan*: 50 kr (endast första föreställningen)</li>
      <li>Nollan**: 100 kr</li>
      <li>Student***: 140 kr</li>
      <li>Ordinarie: 275 kr</li>
    </ul>
    <p>I dessa priser ingår även en trerätters middag!</p>

    <p>
      F-nollan har bokningsförtur till första föreställningen. Övriga gäster kan boka innan det för att läggas på en väntlista för
      att få biljett i mån av plats. Besked meddelas två dagar innan första föreställningen.
    </p>

    <p>Förtydligande om anmärkningar:</p>
    <ul class="clarifications">
      <li>* Som F-Nollan räknas nyantagen Chalmersstudent på F-sektionen (antagen hösten {{ nollanYear }})</li>
      <li>** Som Nollan räknas nyantagen Chalmersstudent (antagen hösten {{ nollanYear }})</li>
      <li>*** Som student räknas alla som är till och med 24 år och/eller som har ett giltigt student-id.</li>
    </ul>
    <h2>Köp biljett</h2>
    <p>Köp er biljett på ett av följande sätt:</p>
    <ul>
      <li>
        <p>
          Lunchtid vardagar vecka 36 i F-spexets bås på Teknologgården utanför Chalmers kårhus
        </p>
      </li>

      <li>
        <p>
          Genom att fylla i <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdNYMPk6UcilK6YN7HjvibrP_4RtcGr97vpBjtS_-Qpgrv_vg/viewform"
            target="_blank"
          >biljettformuläret</a>.
        </p>
      </li>
      <li>
        <p>
          Om du vill göra en större bokning eller inte lyckas köpa via
          ovanstående metoder kan du skicka ett mail till
          <a href="mailto:biljetter@f-spexet.se">biljetter@f-spexet.se</a>. I
          mailet behövs information om:
        </p>
        <ul>
          <li>Vilken föreställning ni vill gå på</li>
          <li>
            Namn, biljettyp och matpreferenser till samtliga i sällskapet.
          </li>
          <li>
            E-post och telefonnummer till kontaktperson. Som kontaktperson
            räknas den gäst i sällskapet som vi kontaktar angående betalning.
            Gäller även för allergier och matpreferenser om kontaktuppgifter
            inte uppges för andra gäster i sällskapet. Om det är bättre att vi
            kontaktar någon annan person i sällskapet direkt ang. frågor om
            allergi/matpreferenser, ange gärna email och/eller telefonnummer
            även till den personen.
          </li>
          <li>
            Annat ni vill att vi ska veta, exempelvis om ni vill sitta
            tillsammans med något annat sällskap
          </li>
        </ul>
      </li>
    </ul>
    <p>
      Vid frågor, kontakta
      <a href="mailto:biljetter@f-spexet.se">biljetter@f-spexet.se</a>.
    </p>

    <h2>Avbokning</h2>
    <p>
      Om ni inte kan komma till er bokade plats vill vi gärna att ni hör av er
      till <a href="mailto:biljetter@f-spexet.se">biljetter@f-spexet.se</a> och
      avbokar er biljett. Avbokningar som sker innan 23:59 dagen innan
      föreställningen återbetalas.
    </p>
  </div>
</template>

<style scoped>

.clarifications {
  list-style-type: none;
  padding: 0;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin: auto;
}

td,
th {
  border: 1px solid;
  border-color: #dddddd;
  text-align: left;
  padding: 8px;
}

iframe {
  width: 100%;
  height: 400px;
}

</style>
