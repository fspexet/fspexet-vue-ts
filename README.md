# fspexet-vue-ts

Innehållet till F-spexets hemsida.
Den här readme-filen beskriver hur man kan testa sidan med lokala ändringar.
För att ladda upp ändringar och uppdatera hemsidan, se Medias överlämning på f-spexets wiki.

Hemsidan byggs och körs med [Node.js](https://nodejs.dev/en/), men det funkar bara med vissa versioner av Node.js.
I skrivande stund ska Node 18 funka. Men överlag kör det här github-repot CI-tester som testar att bygga hemsidan för olika versioner av Node.
Resultat för senast körda CI-tester finns att hitta [här](https://github.com/fspexet/fspexet-vue-ts/actions).
Vilka versioner som testas för listas i [den här filen](https://github.com/fspexet/fspexet-vue-ts/blob/master/.github/workflows/node.js.yml).

Som ett projekt på github använder man [git](https://git-scm.com/) för att uppdatera filerna på det här repot.

För följande kommandon används ett kommandofönster placerat i projektmappen.

## Setup
Med Node.js installerat och med det här projektet lokalt på datorn kör du följande:
```
npm install
```
Då laddas det ner olika mjukvaror som det här projektet är beroende av.

## Testa lokalt
För att testa hemsidans innehåll lokalt på datorn, kör:
```
npm run dev
```
Då hostas hemsidan lokalt på datorn som också kan besökas lokalt (se länken i kommandofönstret).

Så länge detta program kör kommer testhemsidan att automatiskt byggas och uppdateras när du gör ändringar i dina lokala filer.
Du kan då testa ändringar utan att behöva starta om programmet!

## Vilka filer ska jag uppdatera?
Bilder och dylikt ligger i mappen /src/assets/.
Filer som beskriver sidinnehållet finns att hitta i mappen /src/components/.