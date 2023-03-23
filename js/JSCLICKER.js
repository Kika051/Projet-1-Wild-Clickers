////////////////
// User Data //
//////////////

// Points

let Points = 0

// Store

let AmountStore = {
    developpeur : 0,
    PC : 0,
    Terminal : 0,
    Javascript : 0,
};

let PriceStore = {
    developpeur : 0,
    PC : 0,
    Terminal : 0,
    Javascript : 0,
};

/////////////////
// Store Data //
///////////////

let DefaultPrice = {
    developpeur : 10,
    PC : 50,
    Terminal : 100,
    Javascript : 200,
};

/////////////////////
// Query Selector //
///////////////////

// Points

let QueryPoints = document.querySelector('#counter-label')

// Store

let QueryAmount = {
    developpeur : document.querySelector('#nbDeveloppeur'),
    PC : document.querySelector('#nbPc'),
    Terminal : document.querySelector('#nbTerminal'),
    Javascript : document.querySelector('#nbJavascript'),
};

let QueryPrice = {
    developpeur : document.querySelector('#prixDeveloppeurAffichage'),
    PC : document.querySelector('#prixPcAffichage'),
    Terminal : document.querySelector('#prixTerminalAffichage'),
    Javascript : document.querySelector('#prixJavascriptAffichage'),
};

let QueryList = document.querySelector('#BonusList')

////////////////
// Functions //
//////////////

// Save & Load Data

function Save() {
    localStorage.setItem("Points",Points);
    localStorage.setItem("AmountStore",JSON.stringify(AmountStore));
    localStorage.setItem("PriceStore",JSON.stringify(PriceStore));
    alert("Votre partie est sauvegarder!");
};

function Load () {
    PointsData = JSON.parse(localStorage.getItem("Points"));
    AmountStoreData = JSON.parse(localStorage.getItem("AmountStore"));
    PriceStoreData = JSON.parse(localStorage.getItem("PriceStore"));

    if (PriceStoreData == null) {
       PriceStore = {...DefaultPrice};
    } else {
       PriceStore = PriceStoreData;
    };

    if (AmountStoreData !== null) {
       AmountStore = AmountStoreData;
    } else {
        AmountStore = {
            developpeur : 0,
            PC : 0,
            Terminal : 0,
            Javascript : 0,
        };
    };

    if (PointsData !== null) {
        Points = PointsData
    } else {
        Points = 0
    };


    console.log(PriceStore)
    console.log(Points)

    UpdateStore()
    UpdatePoints()
};

// Reset Data

function Reset() {

    if (window.confirm('Merci de confirmé votre reset.')) {
        localStorage.setItem("Points",null)
        localStorage.setItem("AmountStore",null)
        localStorage.setItem("PriceStore",null)
        Load()
    };
}

// Visual Update

function UpdateStore() {
    QueryAmount.developpeur.textContent = AmountStore.developpeur;
    QueryAmount.PC.textContent = AmountStore.PC;
    QueryAmount.Terminal.textContent = AmountStore.Terminal;
    QueryAmount.Javascript.textContent = AmountStore.Javascript;
    QueryPrice.developpeur.textContent = PriceStore.developpeur;
    QueryPrice.PC.textContent = PriceStore.PC;
    QueryPrice.Terminal.textContent = PriceStore.Terminal;
    QueryPrice.Javascript.textContent = PriceStore.Javascript;
};

function UpdatePoints() {
    QueryPoints.textContent = Points;
};

// Points Control

function AddPoints(Amount) {
    Points += Amount;
};

function RemovePoints(Amount) {
    Points -= Amount;
};

function SetPoints(Amount) {
    Points = Amount;
};

function MultiPoints(Multiplication) {
    Points *= Multiplication
};

// Amount Control

function AddAmount(Name,Amount) {
    AmountStore[Name] += Amount;
};

function RemoveAmount(Name,Amount) {
    AmountStore[Name] -= Amount;
};

function SetAmount(Name,Amount) {
    AmountStore[Name] = Amount;
};

function MultiAmount(Name,Multiplication) {
    AmountStore[Name] *= Multiplication
}

// Price Control

function AddPrice(Name,Amount) {
    PriceStore[Name] += Amount;
};

function RemovePrice(Name,Amount) {
    PriceStore[Name] -= Amount;
};

function SetPrice(Name,Amount) {
    PriceStore[Name] = Amount;
};

function MultiPrice(Name,Multiplication) {
    PriceStore[Name] *= Multiplication
}

/////////////
// Events //
///////////

// Load

Load()

// Clicker

function Clicker() {
    AddPoints(1)
    UpdatePoints()
};

// Store

for (let i = 0; i < QueryList.children.length; i++) {
    
    let Button = QueryList.children[i]

    Button.addEventListener('click', () => {
        if (Points >= PriceStore[Button.id]) {
            RemovePoints(PriceStore[Button.id])
            AddAmount(Button.id,1)
            MultiPrice(Button.id,2)
            UpdatePoints()
            UpdateStore()
        } else {
            alert('Pas assez de clic')
        };
    })
};

setInterval(() => {
    AddPoints(AmountStore.developpeur * 2)
    AddPoints(AmountStore.PC * 5)
    AddPoints(AmountStore.Terminal * 10)
    AddPoints(AmountStore.Javascript * 20)
    UpdatePoints()
}, 1000)