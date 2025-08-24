<script lang="ts">

import EVENT from '@/event';
import { getPrettyDay, prettySemester } from '@/helper-functions';

export default {
  metaInfo: {
    title: 'F-Spexet - Biljetter',
  },

  setup() {
    const semester = prettySemester(EVENT) + "ens";

    return {
      EVENT,
      getPrettyDay,
      semester,
    }
  }
};

</script>

<template>
  <div class="contents">
    <h1>Biljetter</h1>
    <hr />
    <p>
      {{ semester }} föreställningar kommer att framföras i
      <a :href="EVENT.location.maps" target="_blank">
        {{ EVENT.location.name }}
      </a>!
      Föreställningarna sätts upp i samarbete med Studiefrämjandet. OBS ⚠️: Under föreställningen förekommer starkt blinkande ljus.</p>

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
        <tr v-for="p in EVENT.performances" :key="p.day" :class="p.sold_out ? 'sold_out' : ''">
          <td>{{ getPrettyDay(p) }}</td>
          <td>{{ p.time }}</td>
          <td>{{ EVENT.location.name }}</td>
          <td>{{ p.sold_out ? "Utsåld!" : "" }} {{ p.note }}</td>
        </tr>
      </tbody>
    </table>

    <p v-if="EVENT.generalPerformanceNote">
      {{ EVENT.generalPerformanceNote }}
    </p>

    <h2>Priser</h2>
    <p>I dessa priser ingår föreställning samt en trerätters middag!</p>
    <table>
      <thead>
        <tr>
          <th v-for="p in EVENT.prices" :key="p.name">
            {{ p.name }}
            <a v-if="p.note" href="#clarifications">
              {{ "*".repeat(1 + EVENT.prices.filter(p => p.note).findIndex(q => q.name === p.name)) }}
            </a>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td v-for="p in EVENT.prices" :key="p.name">
            {{ p.price }} kr
          </td>
        </tr>
      </tbody>
    </table>

    <br>

    <h2>Köp biljetter</h2>
    <p>Fyll i formuläret nedan och sedan skickas en betalningslänk via mejl:</p>
    <a class="cta" :href="EVENT.tickets.form_link" target="_blank">
      Köp biljetter här!
    </a>

    <!-- brrrrrrrrrrrrrrr -->
    <br>
    <br>
    <br>
    <br>
    <hr>

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
      <li v-for="(p, index) in EVENT.prices.filter(p => p.note)" :key="p.name">
        {{ "*".repeat(index + 1) }} {{ p.note }}
      </li>
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

tr.sold_out > td {
  text-decoration: line-through;
  color: #ff7474;
}

tr.sold_out > td:nth-child(4) {
  text-decoration: none;
}

</style>
