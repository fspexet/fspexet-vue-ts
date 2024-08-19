<template>
  <div class="contents">
    <!--tickets-->
    <h1>Biljetter</h1>
    <hr />

    <!--
      <p>
        Nu är F-spexet 2023 slut, men nästa år kommer vi tillbaka med en ny
        uppsättning! Mer info kommer när våren 2024 närmar sig.
      </p>
    -->
    <p>
      <!--
      Vårens föreställningar presenteras alla i Kalle Glader,
    -->
      Höstens föreställningar presenteras alla i sektionslokalen Focus, se info
      ruta längst ner på webbsidan för adress, och kommer spelas upp följande
      dagar:
    </p>

    <table>
      <tr>
        <th>Datum</th>
        <th>Tid</th>
      </tr>
      <tr>
        <td>Måndag 9:e September</td>
        <td>18:00</td>
        <td>Förtur åt F-nollan fram till 6/9</td>
      </tr>
      <tr>
        <td>Tisdag 10:e September</td>
        <td>18:00</td>
      </tr>
      <tr>
        <td>Onsdag 11:e September</td>
        <td>18:00</td>
      </tr>
    </table>

    <!-- Tidigare design, sparat för historik 
      <ul>
        <li>Tisdag 9 April kl 18 </li>
        <li>Onsdag 10 April kl 18</li>
        <li>Fredag 12 April kl 18</li>
        <li>Lördag 13 April kl 17</li>
        <li>Söndag 14 April kl 16</li>
      </ul>
    -->
    <p>
      Biljettpriser:
    </p>
    <ul>
      <!-- kommentar som används för att spara nollan priser
      <li>F-Nollan*: 50 kr (endast 4/9)</li>
      <li>Nollan**: 100 kr</li>
      -->
      <li>F-Nollan*: 50 kr (endast 9/9)</li>
      <li>Nollan**: 100 kr</li>
      <li>Student***: 140 kr</li>
      <li>Ordinarie: 275 kr</li>
    </ul>
    <p>
      I dessa priser ingår även en trerätters middag!
    </p>
    <!--  kommentar för nollan förtur
    -->
    <p>
      F-nollan* har bokningsförtur till föreställningen 9/9 fram till och med
      6/9. Övriga gäster kan boka innan det för att läggas på en väntlista för
      att få biljett i mån av plats. Besked meddelas senast 7/9.
    </p>
    <p>
      Förtydligande om anmärkningar:
    </p>
    <ul>
      <!--  kommentar som används för att spara infon om nollan priser
      -->
      <li>
        *Som F-Nollan räknas nyantagen Chalmersstudent på F-sektionen (antagen
        hösten 2024)
      </li>
      <li>
        **Som Nollan räknas nyantagen Chalmersstudent (antagen hösten 2024)
      </li>
      <li>
        ***Som student räknas alla som är till och med 24 år och/eller som har
        ett giltigt student-id.
      </li>
    </ul>
    <p>
      Biljetter finnas att köpa:
    </p>
    <ul>
      <li>
        <p>
          Lunchtid vardagar vecka 36 i F-spexets bås på Teknologgården utanför
          Chalmers kårhus
        </p>
      </li>
      <!-- Kommentar om någon av försäljningsmetoderna inte är aktiv
      -->
      <li>
        <p>
          Genom att fylla i biljettformuläret via länken
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdNYMPk6UcilK6YN7HjvibrP_4RtcGr97vpBjtS_-Qpgrv_vg/viewform"
            target="_blank"
            >här</a
          >
          eller genom det inbäddade formuläret nedan:
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdNYMPk6UcilK6YN7HjvibrP_4RtcGr97vpBjtS_-Qpgrv_vg/viewform?embedded=true"
            width="700"
            height="520"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >Läser in …</iframe
          >
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
    <p>
      OBS: Under föreställningen förekommer starkt blinkande ljus.
    </p>
    <p>
      Föreställningarna sätts upp i samarbete med Studiefrämjandet.
    </p>
    <p>
      Om ni inte kan komma till er bokade plats vill vi gärna att ni hör av er
      till <a href="mailto:biljetter@f-spexet.se">biljetter@f-spexet.se</a> och
      avbokar er biljett. Avbokningar som sker innan 23:59 dagen innan
      föreställningen återbetalas.
    </p>
    -->
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
  color: yellow;
}

table {
  color: white;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin: auto;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

iframe {
  width: 100%;
  height: 400px;
}
</style>
