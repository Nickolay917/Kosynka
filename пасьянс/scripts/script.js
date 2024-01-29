const naipes = ['♠', '♣', '♥', '♦'];
const numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const koloda = [];

for (let naipe of naipes) {
    for (let numero of numeros) {
        koloda.push(numero + naipe);
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
shuffle(koloda);

