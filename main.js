import { firstPart, secondPart } from "./name.js";

let button = document.getElementById("szukaj");

button.addEventListener('click', () => {
    image.style.transition = "bottom 1s ease-in-out"; 
    image.style.bottom = "0%"; 
    
    findSuperName()
})

button.addEventListener('mouseover', (e) => {
    image.style.transition = "bottom 1s ease-in-out"; 
    image.style.bottom = "0%"; 
})


button.addEventListener('mouseleave', (e) => {
    image.style.transition = "bottom 1s ease-in-out";
    image.style.bottom = "-10%"; 
})

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export async function findSuperName() {
    const hisName = document.getElementById("his_majesty");
    const comment = document.getElementById("comment");

    const randomFirstName = firstPart[Math.floor(Math.random() * firstPart.length)];
    const randomSecondName = secondPart[Math.floor(Math.random() * secondPart.length)];
    const randomPhrase = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];

    const name = `Matúš ${capitalizeFirstLetter(randomFirstName)} ${capitalizeFirstLetter(randomSecondName)}`;
    
    comment.textContent = `*${randomPhrase}`;
    hisName.textContent = name;
    document.title = name; 

    hisName.style.transition = "opacity 1s ease-in-out";
    hisName.style.opacity = 1
}

const randomPhrases = [
    "Toto meno zaručuje miesto vo vláde!",
    "Toto meno je ideálne pre predvolebnú kampaň!",
    "Hodí sa to na ministerskú stoličku, aj keď si nikdy nevidel parlament!",
    "S týmto menom už môžeš začať plánovať svoj prvý politický škandál!",
    "Meno ako stvorené pre volebné plagáty a sľuby, ktoré nikdy nebudú splnené!",
    "Meno, ktoré určite vyhrá všetky hlasovania, aj keď nie si ani zvolený!",
    "Teraz len zvýšiť populárnosť na TikToku ty influencer.",
    "Tvoj politický kariérny rast môže začať - už len získať nejakú podporu (a nejaké tajné financie)!",
    "Toto meno je dokonalé na výrobu populárnych, ale prázdnych fráz.",
    "Meno zaručujúce, že na konci každých volieb budeš stále v hre.",
    "S týmto menom sa staneš expertom na obštrukcie a politické dohody!",
    "Nezabudni si do životopisu pridať 'vynikajúci líder v čase krízy'.",
    "Toto meno je predurčené na to, aby si sa stal najlepším fanúšikom F1.",
    "Určite budeš potrebovať poradcu pre PR, aby si toto meno neznehodnotil.",
    "Máš všetky predpoklady na to, aby si skončil v protikorupčnej komisii!",
    "S týmto menom môžeš v pohode viesť aj opozíciu – na papieri!",
    "Tvoje meno znie ako zaručený recept na politický 'úspech'... ak počítame úspech vo vlastnom záujme!",
    "Ak sa toto meno objaví na kandidátke, určite bude mať veľkú podporu… najmä od lobistov!",
    "Máš potenciál stať sa 'neformálnym' lídrom v každej politickej strane, ktorá zaručene prežije!",
    "Toto meno má silu presvedčiť aj tých najväčších skeptikov… ak máš správne kontakty!",
    "S týmto menom môžeš sľúbiť zmenu… aj keď pravdepodobne nikto nikdy nezistí, čo sa zmení!",
    "Tvoje meno je pripravené na najbližší politickú prevrat! Stačí už len získať trochu charizmy.",
    "Určite sa staneš obľúbeným medzi tými, ktorí milujú dlhé, nejasné odpovede na konkrétne otázky!",
    "S týmto menom budeš v pozícii hovoriť veľa, ale nikdy sa nevyjadríš k podstate!",
    "Toto meno je ako stvorené na to, aby si sa stal kráľom kompromisov a polovičných riešení!",
    "Meno, ktoré zabezpečí tvojho favorita na všetky budúce politické škandály.",
    "Určite sa staneš obľúbeným u všetkých, ktorí veria v politiku bez konkrétnych plánov!",
    "Toto meno je ideálne pre vytváranie populárnych, ale úplne neefektívnych štátnych dotácií.",
    "Bude to skvelé meno na to, aby si sa stal majstrom v sledovaní mediálnych vĺn!",
    "Jasné, že ty za nič zlé nemôžeš a nič sa ťa netýka",
]

