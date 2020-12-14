let pomme = "Elle est belle ma pomme !";

let pommePosition = pomme.toLowerCase().indexOf('pomme');
let positionM = pomme.toLowerCase().lastIndexOf('m');

console.log(pomme.lastIndexOf('m'));

document.getElementById('index-pomme').innerHTML = pommePosition.toString();
document.getElementById('last-index-m').innerHTML = positionM.toString();

if (pomme.toLowerCase().startsWith('elle')) {
    console.log("Elle est belle ma pomme ! Commence par elle");
}

if (pomme.endsWith('!')) {
    console.log('Elle est belle ma pomme ! Se termine par un point d\'exclamation');
}

let affichagePomme = pomme.substring(18);
document.getElementById('pomme').innerHTML = affichagePomme;

let tableauPomme = pomme.split(' ');

for (let i = 0 ; i < tableauPomme.length ; i++) {
    document.getElementById('one-line').innerHTML += tableauPomme[i] + "<br>";
}