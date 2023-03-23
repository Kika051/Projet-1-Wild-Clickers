////////////////
// User Data //
//////////////

// Points

let Points = 0

// Store

let AmountStore = {
    Developpeur : 0,
    Pc : 0,
    Terminal : 0,
    JavaScript : 0,
};

let PriceStore = {
    Developpeur : 0,
    Pc : 0,
    Terminal : 0,
    JavaScript : 0,
};

/////////////////
// Store Data //
///////////////

let DefaultPrice = {
    Developpeur : 10,
    Pc : 50,
    Terminal : 100,
    JavaScript : 200,
};

/////////////////////
// Query Selector //
///////////////////

// Points

let QueryPoints = document.querySelector('#counter-label')

// Store

let QueryAmount = {
    Developpeur : document.querySelector('#nbDeveloppeur'),
    Pc : document.querySelector('#nbPc'),
    Terminal : document.querySelector('#nbTerminal'),
    JavaScript : document.querySelector('#nbJavaScript'),
};

let QueryPrice = {
    Developpeur : document.querySelector('#prixDeveloppeurAffichage'),
    Pc : document.querySelector('#prixPcAffichage'),
    Terminal : document.querySelector('#prixTerminalAffichage'),
    JavaScript : document.querySelector('#prixJavaScriptAffichage'),
};

////////////////
// Functions //
//////////////

// Save & Load

function Save() {
    localStorage.setItem("Points",Points);
    localStorage.setItem("AmountStore",JSON.stringify(AmountStore));
    localStorage.setItem("PriceStore",JSON.stringify(PriceStore));
    alert("Votre partie est sauvegarder");
};

function Load () {
    PointsData = JSON.parse(localStorage.getItem("Points"));
    AmountStoreData = JSON.parse(localStorage.getItem("AmountStore"));
    PriceStoreData = JSON.parse(localStorage.getItem("PriceStore"));

    if (PriceStoreData == null) {
       PriceStore = DefaultPrice;
    } else {
       PriceStore = PriceStoreData;
    };

    if (AmountStoreData !== null) {
       AmountStore = AmountStoreData;
    };

    UpdateStore()
    UpdatePoints()
};

// Visual Update

function UpdateStore() {
    QueryAmount.Developpeur.textContent = AmountStore.Developpeur;
    QueryAmount.Pc.textContent = AmountStore.Pc;
    QueryAmount.Terminal.textContent = AmountStore.Terminal;
    QueryAmount.JavaScript.textContent = AmountStore.JavaScript;
    QueryPrice.Developpeur.textContent = PriceStore.Developpeur;
    QueryPrice.Pc.textContent = PriceStore.Pc;
    QueryPrice.Terminal.textContent = PriceStore.Terminal;
    QueryPrice.JavaScript.textContent = PriceStore.JavaScript;
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

/////////////
// Events //
///////////

Load()