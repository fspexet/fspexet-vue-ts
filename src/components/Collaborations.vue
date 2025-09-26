<template>
  <div>
    <h1>Samarbeten</h1>
    <div class="collab-text">
      <div class="collab-column">
        <img
          src="../assets/logos/ftek.png"
          alt="Fysikteknologsektionen"
          height="100px"
        />
        <h3>Fysikteknologsektionen</h3>
        <p>
          F-spexet är en intresseförening på
          <a href="http://www.ftek.se/" target="_blank">Fysikteknologsektionen</a>
          på Chalmers. Strax över hälften av våra medlemmar varje år går på Teknisk
          Fysik eller Teknisk Matematik, men det är inget krav för att vara med.
        </p>
      </div>

      <div class="collab-column">
        <img
          src="../assets/logos/studieframjandet_logga_vit.png"
          alt="Studiefrämjandet"
          height="100px"
        />
        <h3>Studiefrämjandet</h3>
        <p>
          F-spexet har flera studiecirklar under Studiefrämjandet och är väldigt
          glada över att ha deras återkommande stöd.
        </p>
      </div>
    </div>
  </div>
</template>

<style>

.collab-text {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.collab-column {
  text-align: center;
}

.collab-column p {
  text-align: left;
}

@media screen and (max-width: 651px) {
  .collab-text {
    grid-template-columns: 1fr;
    place-items: center;
  }

  .collab-column {
    max-width: 350px;
  }
}

</style>