var counterVal = 0;
function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}

document.getElementById("clickers").addEventListener("click", function() {
    this.style.transform = "scale(1.2)";
  });
  
