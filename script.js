let billInput = document.querySelector(".billInput");
let peopleInput = document.querySelector(".peopleInput");
let tipCustom = document.querySelector("#customInput");
let tipPerPerson = document.querySelector(".tipAmount");
let totalPerPerson = document.querySelector(".totalAmount");
let tips = document.querySelectorAll("#tips");
let resetButton = document.querySelector(".resetButton");
let error = document.querySelector(".error");


tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);


billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tipCustom.addEventListener("input", tipInputFun);
resetButton.addEventListener("click", reset);


let billValue;
let peopleValue;
let tipValue;



function billInputFun() {
    billValue = parseFloat(billInput.value);
}


function peopleInputFun() {
    peopleValue = parseFloat(peopleInput.value);
    calculateTip();

    if (peopleValue < 1) {
        error.style.display = "flex";
        peopleInput.style.outline = "2px solid #E17052";
    } else {
        error.style.display = "none";
        peopleInput.style.outline = "none";
        calculateTip();
    }
}


function tipInputFun() {
    tipValue = parseFloat(tipCustom.value / 100);
    tips.forEach(function (val){
        val.classList.remove("active");
    });
    calculateTip();
}


tips.forEach(function (val) {
    val.addEventListener("click", handleClick);
});


function handleClick(event) {
    tips.forEach (function (val) {
        val.classList.remove("active");
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add("active");
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    });
    calculateTip();
}


function calculateTip() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue / peopleValue) + tipAmount;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}


function reset(){
    billInput.value = "";
    billInputFun();
    peopleInput.value = "";
    peopleInputFun();
    tipCustom.value = "";
    tips.forEach(function (val){
        val.classList.remove("active");
    });
    tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
    totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
}