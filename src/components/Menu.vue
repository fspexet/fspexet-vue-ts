<template>
  <div class="contents">
    <div id="meny">
      <center>
        <h1>Meny</h1>
        <hr />

        <!--
        <p>
          Menyn för F-spexet 2024 kommer läggas upp här när den väl är satt.
        </p>
      -->
        <h2>Förrätt</h2>
        <h3>Syrlig kronärtskockspasta</h3>
        <p>
          Denna spritsiga förrätt är inte bara god utan dess friska doft gör
          även ett utmärkt jobb med att dölja lukterna från alla pestsjuka här i
          Florens. Kvällen inleds med en paj från Marius hemland, med en enkel
          purjolöksfyllning och ett skal av sötpotatis.
        </p>
        <!--
          <div id="forratt">
            <img
            src="../assets/forratt.jpg"
            contain
            width="80%"
            class="big_image"
            alt
            />
          </div>
        -->

        <h2>
          Huvudrätt
        </h2>
        <h3>
          Beas örtmarninerade fileér med skärseld rostade rotfrukter
        </h3>

        <p>
          Dessa filéer är marinerade i en sådan smakrik marinad att Bea “lovar”
          att de är pestbotande. De serveras med krispiga rotfrukter, rostade i
          självaste skärselden, samt en örtig sås.
        </p>
        <!--
        <div id="huvudratt">
          <img
            src="../assets/huvudratt.jpg"
            contain
            width="80%"
            class="big_image"
            alt
          />
        </div>
      -->

        <h2>
          Efterrätt
        </h2>
        <p></p>
        <h3>
          Mannagrynstårta med grädde färgad av blod från Arns fiender
        </h3>
        <p>
          Denna krämiga avslutning på middagen är det Arn som står för, receptet
          fick han med sig hem från en av hans många affärsresor.
        </p>
        <!--
        <div id="efterratt">
          <img
          src="../assets/efterratt.jpg"
          contain
          width="60%"
          class="big_image"
          alt
          />
        </div>
      --></center>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  metaInfo: {
    title: 'Meny',
  },
};
</script>

<style scoped>
h1 {
  font-style: italic;
}

h2,
h3 {
  margin: 0;
}

h3,
h4 {
  text-rendering: optimiseLegibility;
  -ms-font-feature-settings: 'dlig', 'hlig', 'swsh', 'cv04', 'cv05';
  -webkit-font-feature-settings: 'dlig', 'hlig', 'swsh', 'cv04', 'cv05';
  -moz-font-feature-settings: 'dlig', 'hlig', 'swsh', 'cv04', 'cv05';
  font-feature-settings: 'dlig', 'hlig', 'swsh', 'cv04', 'cv05';
}
h3 {
  font-variant: small-caps;
}
</style>
