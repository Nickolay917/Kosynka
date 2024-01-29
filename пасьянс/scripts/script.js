const naipes = ['♠', '♣', '♥', '♦'];
const numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const fullKoloda = [];

for (let naipe of naipes) {
    for (let numero of numeros) {
        fullKoloda.push(numero + naipe);
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
// Used like so
shuffle(fullKoloda);

let koloda = [],
    reversCard = [],
    emptyCards = [];


for (let i = 0; i < 24; i++) {
    koloda[i] = fullKoloda[i]
}
for (let a = 24; a < 52; a++) {
    emptyCards[a] = fullKoloda[a];
}

document.addEventListener("DOMContentLoaded", function () {
    const kolodaButton = document.querySelector(".kolodaButton");
    const reversCard = document.querySelector(".reversCard");

    kolodaButton.addEventListener("click", function () {
        reversCard.push(a.shift())
        function displayReversCard() {
            
        }
    });

    reversCard.addEventListener("click", function () {
        // Логика для обработки клика на перевернутую карту
        alert("Клик на перевернутую карту!");
    });
});