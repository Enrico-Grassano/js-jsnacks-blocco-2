//Snack 1
//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var bicycles = [
    firstModel = {
        name: "Bianchi Aria Disc",
        weight: 1100
    },
    secondModel = {
        name: "Bh Quartz 3.5",
        weight: 870
    },
    thirdModel = {
        name: "Bottecchia Rd Domina Disc",
        weight: 800
    }
]
//Stampare a schermo la bici con peso minore.
bicylesWeight = [];
for (i = 0; i < bicycles.length; i++) {
    bicylesWeight.push(bicycles[i].weight);
    bicylesWeight.sort();
}
console.log(bicyclesWeigth[0]);