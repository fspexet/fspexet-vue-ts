<script lang="ts">

export default {
  metaInfo: {
    title: 'F-Spexet - Biljetter',
  }
};

</script>

<template>
  <div class="contents">
    <h1>Biljetter</h1>
    <p style="margin-bottom: 5em;">Årets föreställningar är nu över och det går inte längre att köpa biljetter. Nästa års föreställningar har premiär på våren. Kom tillbaka då och köp biljetter.</p>

    <h2>Köp biljett</h2>
    <p>När biljetter blir tillgängliga köps de genom att fylla i formuläret nedan. Sedan skickas en betalningslänk via mejl.</p>
    <div class="center">
      <button title="Biljetter släpps till våren" disabled class="cta" style="margin-top: 0;">
        Köp biljetter här!
        <i class="pi pi-external-link"></i>
      </button>
    </div>

    <h2>Biljetter kan även köpas...</h2>
    <ul>
      <li>Lunchtid på vardagar veckorna innan premiär i F-spexets bås på Teknologgården utanför Chalmers kårhus.</li>
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
