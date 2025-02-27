<template>
  <div>
    <div class="sky">
      <h2>F-spexet 2025 presenterar</h2>
      <h1>Ernest & Earharts<br>Äventyrsbyrå AB</h1>
    </div>
    <div class="water-surface">
      <img src="@/assets/logos/boat.svg" class="boat" />
      <img src="@/assets/seal2.svg" class="seal" />
    </div>
    <div class="water">
      <img src="@/assets/light-ray.png" class="light-ray" />
      <img src="@/assets/seal1.svg" class="seal">

      <div class="text-box">
        <h1>This is a heading</h1>
        <p>lorm ismum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui, possimus inventore tempora ullam asperiores itaque obcaecati, voluptate suscipit quia ipsum, illo blanditiis architecto ad numquam incidunt quos iusto. Dolore?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum vero maiores nostrum eos? Illum odit, accusamus ipsam vitae excepturi natus culpa optio beatae, hic ad a soluta nostrum veritatis!</p>

        <h1>This is a heading</h1>
        <p>lorm ismum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui, possimus inventore tempora ullam asperiores itaque obcaecati, voluptate suscipit quia ipsum, illo blanditiis architecto ad numquam incidunt quos iusto. Dolore?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum vero maiores nostrum eos? Illum odit, accusamus ipsam vitae excepturi natus culpa optio beatae, hic ad a soluta nostrum veritatis!</p>
      
        <button class="cta">
          <router-link to="/tickets">
            Köp biljetter
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }

  h1 {
    font-size: min(8vw, 5em);
    margin: 0.25em;
  }

  h2 {
    font-size: 2em;
    margin: 0;
  }

  .sky {
    height: 30vw;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .water-surface {
    position: relative;
    height: 20vw;
    background: linear-gradient(0deg, rgb(25, 32, 50) 0%, rgb(52, 58, 84) 100%);
    border-bottom: 20px solid white;
  }

  .boat {
    position: absolute;
    width: 20vw;
    right: 10vw;
    bottom: 2vw;
  }

  .water-surface .seal {
    position: absolute;
    width: 8vw;
    left: 8vw;
    top: 2vw;
  }

  .water {
    min-height: 100vw;
    background: rgb(22,16,0);
    background: linear-gradient(0deg, rgba(22, 16, 0, 1) 0%, rgb(26 57 62) 100%);
    color: white;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 1em;

    position: relative;
  }

  .water .seal {
    position: absolute;
    filter: blur(2px) brightness(0.5);
    right: 5vw;
    top: 5vw;
    width: 20vw;
  }

  .light-ray {
    width: 100%;
    filter: blur(10px);
    transform: translateY(-300px);
    opacity: 0.1;

    top: 0;
    position: absolute;
  }

  .text-box {
    max-width: 800px;
    margin-top: 5em;
    z-index: 1;
  }

  .text-box h1 {
    margin-top: 1em;
    text-align: center;
  }

</style>
