<template>
  <footer>
    <div class="boxes_wrapper">
      <div class="box">
        <h2>Vad är F-spexet?</h2>
        <p>Jo, F-spexet är Chalmers F-sektions studentspex. Det är teater fast lite galnare, lite roligare och lite bättre. Det blandas friskt teater med sång, dans, skämt och ordvitsar under tre spexiga akter. Dessutom serverar F-spexet en eminent trerätters middag till föreställningarna. Något så bra får man väl inte missa?</p>
      </div>

      <div class="vertical_divider"></div>

      <div class="box">
        <h2>Jag vill veta mer!</h2>
        <p>Om några få föreställningar om året inte räcker så kan ni se vad som händer genom att följa F-spexet på våra sociala medier: </p>
        <span style="margin-top: 0.5em; display: block;">
          <a href="https://www.instagram.com/fspexet">Instagram</a>
          &#183;
          <a href="https://www.facebook.com/FSpexet">Facebook</a>
          &#183;
          <a href="https://www.youtube.com/channel/UCtnqDd2Japmk7zmVAbHtK-Q">YouTube</a>
          &#183;
          <a href="https://wiki.f-spexet.se">Wiki</a>
        </span>
      </div>

      <div class="vertical_divider"></div>

      <div class="box">
        <h2>Kontakt</h2>
        <p>Har du frågor? Kontakta oss via mejl</p>
        <a href="mailto:styret@f-spexet.se">styret@f-spexet.se</a>
      </div>
    </div>

    <div class="development_container">
      <h2>Underhåll och utveckling</h2>
      <p>F-spexet media</p>
      <a href="mailto:media@f-spexet.se">media@f-spexet.se</a>
    </div>

    <div class="logos">
      <img src="@/assets/logos/logga_default.png" alt="F-spexets logga" width="100">
      <img src="@/assets/logos/studieframjandet_logga_vit.png" alt="Studiefrämjandets logga" width="100">
    </div>
    <h1 id="domain">F-spexet.se</h1>
  </footer>
</template>

<style scoped>

footer {
  color: white;
  background: rgb(37, 37, 37);

  margin-top: auto;

  padding: 0 1rem;
  padding-top: 4rem;
  padding-bottom: 5rem;

  gap: 2rem;
}

a {
  color: white;
}

h2,
p,
a,
.logos img,
.vertical_divider {
  opacity: 0.6;
}

h1, h2 {
  font-weight: bold;
  opacity: 0.85;
}

a:hover {
  opacity: 1;
}

h2,
p {
  margin-top: 5px;
  margin-bottom: 0;
}


footer,
.development_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logos {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  margin-top: 3rem;
}

.boxes_wrapper {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  gap: 2rem;
}

.box {
  width: 300px;
  margin: 10px;
}

.vertical_divider {
  width: 1px;
  margin: 1rem 0;
  background: currentColor;
  display: flex;
}

@media screen and (max-width: 1125px) {
  .vertical_divider {
    display: none;
  }
}

</style>
