// Husk fra dag 1: skriv "use strict" herunder



/* ---------------------------------------------------------
   1. DATA
--------------------------------------------------------- */

// Nyt i dag: et array [ ] er en liste. Hvert element i listen er her et objekt { }.
// Et objekt samler flere oplysninger om én ting som nøgle: værdi, fx brand: "Ford".
// "id" skal passe med id'et på bilens <img> i HTML'en - det er sådan JS finder det rigtige billede.
//
// Eksempel: den første bil er skrevet for dig.
const cars = [
    {
        id: "redCar",
        brand: "Ford",
        model: "Mustang",
        year: 1974,
        color: "Rød",
        fuel: "Benzin",
        sound: "sound/red-car-horn.wav"
    },

    // Skriv selv: et objekt for politibilen med samme nøgler som ovenfor.
    //   id: "policeCar", brand: "Volvo", model: "242", year: 1982,
    //   color: "Politibil", fuel: "Diesel", sound: "sound/police-car-sound.wav"

    // Skriv selv: et objekt for den blå bil.
    //   id: "blueCar", brand: "Volkswagen", model: "Passat", year: 1979,
    //   color: "Lyseblå", fuel: "Diesel", sound: "sound/blue-car-sound.wav"

    // Husk komma mellem objekterne!
];

// Test dit array: åbn konsollen i browseren (F12) og se, hvad der bliver skrevet ud.
console.log(cars);
console.log(cars[0].brand);

// Nyt i dag: forEach gennemløber et array og kører koden én gang for hver bil.
// Sådan er en forEach bygget op:
//     cars.forEach(function(car) {
//         // koden her kører én gang for hver bil
//     });
//
// Skriv selv: brug forEach til at gennemløbe cars-arrayet.
// Skriv hver bils brand ud i konsollen med console.log(car.brand).
// Du skulle gerne se tre linjer i konsollen: Ford, Volvo og Volkswagen.
//
// Ekstra: skriv også model og årgang ud på samme linje.



/* ---------------------------------------------------------
   2. HENT ELEMENTER FRA HTML
--------------------------------------------------------- */

// Eksempel: vi henter tooltip'en ved hjælp af dens id-attribut
const getTooltip = document.getElementById("tooltip");

// Skriv selv: hent solen og scenen på samme måde, ved hjælp af deres id.
// Variablerne skal hedde getSun og getScene.
//
// Husk: class bruges til CSS (udseende), id bruges til JavaScript.



/* ---------------------------------------------------------
   3. DAG OG NAT
--------------------------------------------------------- */

// Skriv selv: lyt efter "click" på getSun og kør en anonym function - ligesom i de tidligere opgaver.
//
// Nyt i dag: getScene.classList.toggle("night") tilføjer klassen "night", hvis den mangler,
// og fjerner den, hvis den er der. Det er samme idé som din if/else i billedskift-opgaven,
// men toggle klarer det på én linje. Selve udseendet står i CSS'en under .scene.night.



/* ---------------------------------------------------------
   4. FUNKTIONER
--------------------------------------------------------- */

// Nyt i dag: en funktion kan tage imod en parameter - her "car".
// Når vi kalder showTooltip(cars[0]), er "car" inde i funktionen den røde bil.

// Denne variabel husker tooltip'ens timer (bruges nederst i showTooltip)
let tooltipTimer;

function showTooltip(car) {

    // Nyt i dag: en template literal skrives med backticks ` ` i stedet for " ".
    // Inde i den kan du indsætte værdier med ${ }, fx ${car.brand}.
    // Husk fra "5 minutter"-opgaven: innerHTML kan indsætte HTML-tags som <strong> og <br>.
    getTooltip.innerHTML = `
        <strong>${car.brand} ${car.model}</strong><br>
        Årgang: ${car.year}<br>
    `;
    // Skriv selv: tilføj to linjer mere inde i backticks ovenfor: farve (car.color) og brændstof (car.fuel).

    // Nyt i dag: classList.add tilføjer en CSS-klasse. Klassen "is-visible" gør tooltip'en synlig.
    getTooltip.classList.add("is-visible");

    // Nyt i dag: setTimeout kører en funktion efter et antal millisekunder (4000 = 4 sekunder).
    // clearTimeout stopper den gamle timer først, så tooltip'en ikke forsvinder for tidligt,
    // hvis man hurtigt holder musen over en ny bil.
    clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(hideTooltip, 4000);
}

// Skriv selv en funktion, der hedder hideTooltip.
// Den skal fjerne klassen "is-visible" fra getTooltip. Brug classList.remove - det modsatte af classList.add.



// Skriv selv en funktion, der hedder playSound, og som tager imod parameteren car.
//
// Husk fra soundboard-øvelsen: new Audio(...) opretter et lydobjekt,
// og inde i parentesen skriver du stien til den lydfil, der skal spilles.
//
// Inde i funktionen skal du:
//   1. Oprette en variabel, der hedder audio, og give den værdien new Audio(car.sound).
//      car.sound er stien til bilens lydfil, fx "sound/red-car-horn.wav".
//      Fordi "car" er en ny bil hver gang, funktionen kaldes, får hver bil sin egen lyd.
//   2. Afspille lyden ved at kalde .play() på variablen audio.
//
// OBS: play er en metode, der følger med Audio. Kald den ikke playSound -
// playSound er navnet på din egen funktion.



/* ---------------------------------------------------------
   5. LØKKEN - kobler data og billeder sammen
--------------------------------------------------------- */

// Husk fra afsnit 1: forEach gennemløber arrayet og kører funktionen én gang for hver bil.
// Her bruger vi den samme løkke, men med events i stedet for console.log.
// Første gang er "car" den røde bil, anden gang politibilen, tredje gang den blå bil.
cars.forEach(function(car) {

    // Eksempel: hent bilens <img> ved hjælp af id'et fra dataen
    const getCarElem = document.getElementById(car.id);

    // Eksempel: når musen kommer ind over bilen, vises bilens informationer.
    // Nyt i dag: "mouseenter" er en ny event - ligesom "click", bare når musen kommer ind over elementet.
    getCarElem.addEventListener("mouseenter", function() {
        showTooltip(car);
    });

    // Skriv selv: lyt efter "click" på getCarElem og kald playSound(car) inde i en anonym function.

});

/* =========================================================
   EKSTRAOPGAVE: bus og truck
   Lav først E1-E2 i index.html og E3-E6 i style.css.
========================================================= */

/* ---------------------------------------------------------
   E7. Tilføj bussen til data
--------------------------------------------------------- */
// Skriv selv: gå op til cars-arrayet i afsnit 1 og tilføj et nyt objekt for bussen.
// Brug præcis de samme nøgler som de andre biler:
//   id, brand, model, year, color, fuel, sound
//
// - id skal være "bus" (samme id som <img> i HTML'en)
// - sound: find bussens lydfil i sound-mappen og skriv stien, fx "sound/filnavn.wav"
// - brand, model, year, color og fuel: find selv på, eller søg på nettet
//   efter en bus, der ligner billedet
//
// Hint: year er et tal, så det skal IKKE stå i anførselstegn.
// Husk komma efter objektet før det nye!


/* ---------------------------------------------------------
   E8. Tilføj truck'en til data
--------------------------------------------------------- */
// Skriv selv: gør det samme for truck'en med id "truck"
// og stien til truck'ens lydfil i sound-mappen.


/* ---------------------------------------------------------
   E9. Test
--------------------------------------------------------- */
// Gem og genindlæs siden. Hold musen over bussen og truck'en, og klik på dem.
//   - Vises tooltip'en med de rigtige informationer?
//   - Spiller den rigtige lyd?
//   - Skriver din forEach i afsnit 1 nu fem linjer i konsollen?
//
// Virker det ikke? Åbn konsollen (F12). Står der
// "Cannot read properties of null", passer id'et i arrayet ikke med id'et i HTML'en.


/* ---------------------------------------------------------
   E10. Refleksion
--------------------------------------------------------- */
// Svar i en kommentar herunder:
//   1. Hvor mange nye addEventListener skulle du skrive, for at bussen og truck'en virker?
//   2. Hvorfor? (Hint: kig på løkken i afsnit 5.)
//   3. Hvad er fordelen ved at samle data i et array frem for at skrive koden
//      for hvert køretøj for sig?

