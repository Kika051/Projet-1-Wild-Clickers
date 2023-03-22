let points = 0

function save(){
    alert("Votre partie est sauvegarder")
}

function incrementClick() {
    updateDisplay(++points);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(points);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;


}
//julien

const compteur = document.querySelector('#counter-label');

function miseAjourAffichagePoints(){
    compteur.textContent = points;
}

function ajoutPoints(valeur){
    points = points + valeur;
    miseAjourAffichagePoints();
}

function retirerPoints(valeur){
    points = points - valeur;
    miseAjourAffichagePoints();
}

const developpeur = document.querySelector('#developpeur');

const nbDeveloppeuraffichage = document.querySelector('#nbDeveloppeur');

const prixDeveloppeurAffichage = document.querySelector('#prixDeveloppeurAffichage');

let nombreDeveloppeur = 0;
let prixDeveloppeur = 10;

developpeur.addEventListener('click', () =>{
    if (points >=prixDeveloppeur){
        retirerPoints(prixDeveloppeur);
        nombreDeveloppeur++;
        nbDeveloppeuraffichage.textContent = nombreDeveloppeur;
        prixDeveloppeur = prixDeveloppeur *2;
        prixDeveloppeurAffichage.textContent = prixDeveloppeur;
    }
    else{
        alert('Pas assez de clic');
    }
})

setInterval(() =>{
    ajoutPoints(nombreDeveloppeur * 2);
    document.querySelector('#developpeur').textContent;
},1000)

/* florian */

const pc = document.querySelector('#PC')

const nbPcAffichage = document.querySelector('#nbPc')

const prixPcAffichage = document.querySelector('#prixPcAffichage')

let nombrePc = 0;
let prixPc = 50; 

pc.addEventListener('click',() =>{
    if(points >= prixPc){
        retirerPoints(prixPc);
        nombrePc++;
        nbPcAffichage.textContent = nombrePc;
        prixPc = prixPc *4;
        prixPcAffichage.textContent = prixPc;
    }
    else{
        alert('Pas assez de clic');
    }
})

setInterval(()=>{
    ajoutPoints (nombrePc *50);
    document.querySelector ('#PC').textContent;
},1000)

//alexandre

const Terminal = document.querySelector('#Terminal');

const nbTerminalaffichage = document.querySelector('#nbTerminal');

const prixTerminalAffichage = document.querySelector('#prixTerminalAffichage');

let nombreTerminal = 0;
let prixTerminal = 100;

Terminal.addEventListener('click', () =>{
    if (points >=prixTerminal){
        retirerPoints(prixTerminal);
        nombreTerminal ++;
        nbTerminalaffichage.textContent = nombreTerminal;
        prixTerminal = prixTerminal *2;
        prixTerminalAffichage.textContent = prixTerminal;
    }
    else{
        alert('Pas assez de clic');
    }
})

setInterval(() =>{
    ajoutPoints(nombreTerminal * 100);
    document.querySelector('#Teminal').textContent;
},1000)