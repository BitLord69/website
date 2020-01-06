const solTxt = [
  "-",
  `För att positionera de olika delarna använde jag CSS Grid, i mitt tycke en ganska enkel men kraftfull funktion för att snabbt för upp en layout (så länge den inte är nästlad in absurdum, då blir allt krångligt vad man än använder).

Det jag gillar med CSS Grid är att man ser hur layoten ser ut om man använder grid-template-area. I detta fallet gjorde jag fyra areor: sidhuvud (hd), navigeringsarea (nav), innehåll (content) och sidfot (ft).

För att sidfoten alltid ska visas längst ner sattes minimumhöjden på body till hela skärmhöjden (min-height:100vh) och höjden att fylla hela sidan (100vh). 

För att höjden på huvudinnehållet ska fyllas ut automatiskt sätts höjden på sidhuvd och sidfot till absoluta pixelvärden. Behövs om inte innehållet fyller hela sidan. Sidfoten får även den display:grid, så att innehållet kan centreras vertikalt.

För att endast innehållet ska scrollas, sätts overflow-y: hidden på body och overflow-y: scroll på content.

Ett litet javascript för att se till så att den klickade länken markeras En lyssnare för klick på LI-elementet sätts, och i denna stoppas först sidan från att laddas om (e.preventDefault). 

I en liten utökning av uppgiften så läggs text till på innehållssidan när man klickar på länken, detta för att kunna se så att layouten inte ändras när det blir mer innehåll på sidan.

Efter detta tas en aktiva klassen bort och sedan kontrolleras ifall det var själva LI-elementet eller A-elementet som klickades, detta för att klassen .active ska kunna sättas på rätt element (vill markera hela LI-elementet som aktivt och inte bara länken).

Det går även att radera de tillagda text-elementen genom att klicka på dem.

Fråga - hur "viktigt" är det med semantiken i sidfoten? Just nu lägger jag min span i en artikel i en sektion, men det fungerar ju lika bra utan de två extra elementen. Är det ändå att fördra så att hjälpmedel för funktionsvarierade ska fungera bra, eller är det bara onödigt?
`,
  `Javascript används endast för att sätta datumväljarnas standarddatum: dagens datum i check in, och morgondagens datum i check out.

För att få rubriken att ändra storlek används en proportionell fontstorlek och dessutom två media-queries, eftersom det ser ut som om rubriken hoppar i storlek vid ett par tillfällen.

För att få bakgrundbilden att bete sig som i videon sätts den med positionen center right och stoleken sätts att ta upp hela ytan med cover. Höjden sätts till 40% av tillgänglig höjd för webbläsaren (40vh).

Responsiviteten implementeras genom att använda Bootstraps klasser för detta, och sätts så att check in & -ut datumväljarna på små skärmar tar upp var sin rad, men på enheter större än medium blir det två kolumner istället.`,
  "-",
  `För att positionera de olika delarna använde jag CSS Grid. Det jag gillar med CSS Grid är att man ser hur layoten ser ut om man använder grid-template-area. I detta fallet gjorde jag tre areor: sidhuvud (hd), innehåll (cn) och sidfot (ft).

För att sidfoten alltid ska visas längst ner använde jag position:sticky och satte minimumhöjd på body till hela skärmhöjden (min-height:100vh) så att sidfoten kommer längst ner på skärmen ifall innehållet i cn inte fyller upp hela sidan.

Till en början använde jag en span för att skriva texten i footer, men tack vare att det är ett inline-element är man tvungen att sätta bredden på elementet. Jag valde därför istället att använda en p-tag, som tack vare att det är ett blockelement automagiskt tar upp hela sidlängden. Dock var jag då tvungen att nollställa marginalerna så att texten inte tar upp mer vertikal plats än önskat; lite CSS-kod hur man än gör med andra ord.`
];

// Aktivera tooltip
$('[data-toggle="tooltip"]').tooltip();

function readText(solNum) {
  $(".card-body").text(solTxt[solNum - 1]);
  $("#sol-txt").text(`Lösningsförklaring, uppgift ${solNum}`);
  $(".card").show();
}

function hideCard() {
  $(".card").hide();
}

hideCard();
