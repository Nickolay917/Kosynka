const naipes = ['♠', '♣', '♥', '♦'];
const numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const koloda = [];

for (let naipe of naipes) {
    for (let numero of numeros) {
        koloda.push(numero + naipe);
    }
}

