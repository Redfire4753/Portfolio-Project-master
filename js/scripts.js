const antonioBtn = document.querySelector("#antonio");
const imeldaBtn = document.querySelector("#imelda");
const pasqualinaBtn = document.querySelector("#pasqualina");
const gennaroBtn = document.querySelector("#gennaro");
const arcaBtn = document.querySelector("#arca");
const portaBtn = document.querySelector("#porta");
const nameText = document.querySelector("#cardName");
const weaponText = document.querySelector("#cardWeapon");
const passiveText = document.querySelector("#cardPassive");
const cardBack = document.querySelector('#card');
const backButton = document.querySelector('#backButton');



const characters = [
    {name: "Antonio", weapon: "Whip", passive: "Gains 10% might per 10 levels(max 50%)"}, 
    {name: "Imelda", weapon: "Magic Wand", passive: "Gains 10% growth every 5 levels(max 30%)"},
    {name: "Pasqualina", weapon: "Runetracer", passive:"Gains 10% projectile speed every 5 levels(max 30%)" },
    {name: "Gennaro", weapon: "Knife", passive: "Grants +1 projectile(all weapons)"},
    {name: "Arca", weapon: "Fire Wand", passive: "Grants -5% cooldown every 10 levels(max -15%)"},
    {name: "Porta", weapon: "Lightning Ring", passive: "Grants +30% area, Grants -90% cooldown for the first three levels reducing by 30% every level until negated at level 4"}
];


antonioBtn.addEventListener("click", function () {loadCharacter(0)});
imeldaBtn.addEventListener("click", function(){loadCharacter(1)});
pasqualinaBtn.addEventListener("click",function(){loadCharacter(2)});
gennaroBtn.addEventListener("click", function(){loadCharacter(3)});
arcaBtn.addEventListener("click", function(){loadCharacter(4)});
portaBtn.addEventListener("click", function(){loadCharacter(5)});
backButton.addEventListener("click", resetCharacters);


function loadCharacter(num) {
    toggleImg([antonioBtn,imeldaBtn,pasqualinaBtn,gennaroBtn,arcaBtn,portaBtn], false);
    nameText.textContent = `Name: ${characters[num].name}`;
    weaponText.textContent = `Starting Weapon: ${characters[num].weapon}`;
    passiveText.textContent = `Character Passive: ${characters[num].passive}`;
    cardBack.style.display = "block";
    backButton.style.display= "inline-block";
}


function toggleImg(imgArray, on) { 
    for (const img of imgArray) {
        if (on) {
            img.style.display = "inline-block";
        } else {
            img.style.display = "none";
        }
    }
}

function resetCharacters() {
    toggleImg([antonioBtn,imeldaBtn,pasqualinaBtn,gennaroBtn,arcaBtn,portaBtn], true);
    nameText.textContent = "";
    weaponText.textContent = "";
    passiveText.textContent = "";
    backButton.style.display = "none";
    cardBack.style.display= "none";
}