<template>
    <div class="contents">
        <h1>Nyheter</h1>
            <hr />
            <div id="höst_2023">
                <p>
                    Hej! Nu närmar sig våra höstföreställningar, som kommer ske den 4, 5 och 7 september.
                </p>
                <p>
                    Oavsett om ni missade vårens föreställningar, vill se årets uppsättning igen, eller just upptäckte oss så är ni välkomna!
                </p>
                <p>
                    Mer information om biljetter hittar du <router-link to="/tickets">här</router-link>.
                </p>
            </div>
            <hr />
            <div id="rebus_2023">
                <p>
                    För er som missade årets rebus så lägger vi upp den här på hemsidan också.
                </p>
                <div id="rebusbild">
                    <img src="../assets/rebus_2023.png" class="big_image" alt>
                </div>
                <p>
                    Då vårt tema redan är släppt kommer här även rebusens lösning (den är skriven i osynlig text och för att se den kan ni markera området nedan):
                </p>
                <div style="color:#FFFFFF00">
                    Uppochnedvänd Luigi blir Waluigi<br />
                    Waluigi transponat konjugat blir Mario<br />
                     Mario + Snake + . - snake.io = <em>Mar</em><br />
                    e^(i*pi/2) + USA - A = <em>ius</em><br />
                    Janalys + lampa - lys(ande) lampa = Jana<br />
                    Jana + CTRL - Tr(appa) - NaCl = <em>Ja</em><br />
                    Al + Locka + o (formen på hålet) + hål - alkohol + K (K-sektionens skyddshelgon) - Loka = <em>c</em><br />
                    OP + BMX - m(assa) - xp = <em>ob</em><br />
                    Årets tema är alltså: <em>Marius Jacob</em>!
                </div>
                <br />
                <span style="float:right"><i style="color:White;">2023-03-07</i></span> <br />
            </div>
            <hr />
            <div id="temaslapp_2023">
                <p>
                    F-spexet 2023 presenterar <br /> <br /><center> <font size="7"> Marius Jacob </font><br /> eller <br /><font size="7"> Mästertjuvarna på Operan </font> </center>
                </p>
                <div id="logga_2023">
                    <img src="../assets/logga_2023.png" class="big_image" alt>
                </div>
                <p>
                    Följ med oss till Operahuset i London, där en storslagen föreställning ska sättas upp.
                    Allt tycks gå som smort, tills den ökände mästerskurken Moriarty dyker upp för att begå årtiondets stöld.
                    Hur ska det här gå? Jo, det får du veta om du går på årets föreställning!
                    <br /><br />
                    Föreställningsdatum:
                </p>
                <ul>
                    <li>Tisdag, 28 mars, kl 18 (premiär!) </li>
                    <li>Onsdag, 29 mars, kl 18 </li>
                    <li>Fredag, 31 mars, kl 18 </li>
                    <li>Lördag, 1 april, kl 17 </li>
                    <li>Söndag, 2 april, kl 16 (busk!)</li>
                </ul>
                <p>
                    Mer information om biljetter hittar du <router-link to="/tickets">här</router-link>.
                </p>
                <br /><br />
                <span style="float:right"><i style="color:White;">2023-02-24</i></span> <br />
            </div>
            <hr />
            <div id="nyhetsbrev">
                <h2>F-spexets nyhetsbrev</h2>
                <p>
                    F-spexet har nu satt upp ett nyhetsbrev som kommer användas för att meddela när datum är släppta för nästa föreställningsperiod; vanligtvis sker detta två gånger per år. Om ni är intresserade kan ni fylla i nyhetsbrevsformuläret <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZwcwkp9as7b4eM5tsF8Ac-LXYM-ZqjSaN8hek46805rq1Ug/viewform?usp=sf_link" target="_blank">här</a>.
                </p>
            </div>
        <hr />
    </div>
</template>

<style scoped>
#intro {
  font-size: 20px;
  text-decoration: ivory;
}

button {
  font-size: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 2px #fff, /*bottom external highlight*/ 0 -1px 1px #666,
    /*top external shadow*/ inset 0 -1px 1px rgba(0, 0, 0, 0.5),
    /*bottom internal shadow*/ inset 0 1px 1px rgba(255, 255, 255, 0.8); /*top internal highlight*/
}

img {
  width: 100%;
}
</style>
