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
    <p>Vårens föreställningar kommer att framföras i <a href="https://maps.app.goo.gl/bAT5aQCVxnEr4QkB8" target="_blank">Kalle Glader</a>! Föreställningarna sätts upp i samarbete med Studiefrämjandet. OBS ⚠️: Under föreställningen förekommer starkt blinkande ljus.</p>

    <h2>Föreställningsdatum</h2>
    <table>
      <thead>
        <tr>
          <th>Datum</th>
          <th>Tid</th>
          <th>Plats</th>
          <th>Kommentar</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Tisdag 1 April</td>
          <td>18:00</td>
          <td>Kalle Glader</td>
          <td>Premiär!</td>
        </tr>

        <tr>
          <td>Onsdag 2 April</td>
          <td>18:00</td>
          <td>Kalle Glader</td>
          <td></td>
        </tr>

        <tr>
          <td>Fredag 4 April</td>
          <td>18:00</td>
          <td>Kalle Glader</td>
          <td></td>
        </tr>

        <tr>
          <td>Lördag 5 April</td>
          <td>17:00</td>
          <td>Kalle Glader</td>
          <td></td>
        </tr>

        <tr>
          <td>Söndag 6 April</td>
          <td>16:00</td>
          <td>Kalle Glader</td>
          <td>Busk!</td>
        </tr>
      </tbody>
    </table>

    <h2>Priser</h2>
    <p>I dessa priser ingår föreställning samt en trerätters middag!</p>
    <table>
      <thead>
        <tr>
          <th>Student<a href="#clarifications">*</a></th>
          <th>Ordinarie</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>150 kr</td>
          <td>275 kr</td>
        </tr>
      </tbody>
    </table>

    <br>

    <h2>Köp biljetter</h2>
    <p>Fyll i formuläret nedan och sedan skickas en betalningslänk via mejl:</p>
    <a class="cta" href="https://docs.google.com/forms/d/e/1FAIpQLSdjs07yTSbgI8r4A14zjiQRy8yBombD3e7nyeeOy-6eG-jaiA/viewform?usp=dialog" target="_blank">
      Köp biljetter här!
    </a>

    <!-- brrrrrrrrrrrrrrr -->
    <br>
    <br>
    <br>
    <br>
    <hr>

    <!-- <p> -->
      <!-- F-nollan har bokningsförtur till första föreställningen. Övriga gäster kan boka innan det för att läggas på en väntlista för -->
      <!-- att få biljett i mån av plats. Besked meddelas två dagar innan första föreställningen. -->
    <!-- </p> -->

    <h2>Biljetter kan även köpas...</h2>
    <ul>
      <li>
        <p>
          Lunchtid på vardagar veckorna innan premiär i F-spexets bås på Teknologgården utanför Chalmers kårhus.
          <!-- Lunchtid vardagar vecka 36 i F-spexets bås på Teknologgården utanför Chalmers kårhus -->
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

    <h2>Avbokning</h2>
    <p>
      Om ni inte kan komma till er bokade plats vill vi gärna att ni hör av er
      till <a href="mailto:biljetter@f-spexet.se">biljetter@f-spexet.se</a> och
      avbokar er biljett. Avbokningar som sker innan 23:59 dagen innan
      föreställningen återbetalas.
    </p>

    <h2>Kontakt</h2>
    <p>
      Vid frågor, kontakta
      <a href="mailto:biljetter@f-spexet.se">biljetter@f-spexet.se</a>.
    </p>

    <ul class="clarifications" id="clarifications">
      <li>* Som student räknas alla som är till och med 24 år och/eller som har ett giltigt student-id.</li>
    </ul>
  </div>
</template>

<style scoped>

.clarifications {
  list-style-type: none;
  padding: 0;
  font-style: italic;
  font-size: 0.75em;
  margin-top: 5em;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  text-align: left;

  border-radius: 8px;
  overflow: hidden;

  border: 1px solid rgb(202, 202, 202);
}

thead {
  background: rgb(202, 202, 202);
}

tbody tr:nth-child(2n) { background: rgba(230, 230, 230, 0.2); }
tbody tr:nth-child(2n + 1) { background: rgba(201, 201, 201, 0.2); }

td,
th {
  border: 1px solid rgb(202, 202, 202);
  padding: 12px 16px;
}

iframe {
  width: 100%;
  height: 400px;
}

</style>
