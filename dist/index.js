"use strict";
const foot = document.getElementById("foot");
const inch = document.getElementById("inch");
const stone = document.getElementById("stone");
const pound = document.getElementById("pound");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const inputs = document.querySelectorAll("input");
const welcome = document.getElementById("welcome");
const result = document.getElementById("result");
const score = document.getElementById("score");
const idealWeight = document.getElementById("idealWeight");
const typeWeight = document.getElementById("typeWeight");
const checkboxMetric = document.getElementById("checkMetric");
const checkboxImperial = document.getElementById("checkImperial");
const formMetric = document.getElementById("metric");
const formImperial = document.getElementById("imperial");
let IMC = 0;
//checkbox metric select
checkboxMetric.onclick = function () {
    if (checkboxMetric.checked) {
        checkboxImperial.checked = false;
        formMetric.classList.remove("hidden");
        formImperial.classList.add("hidden");
    }
    else {
        checkboxMetric.checked = true;
    }
};
//checkbox imperial select
checkboxImperial.onclick = function () {
    if (checkboxImperial.checked) {
        checkboxMetric.checked = false;
        formImperial.classList.remove("hidden");
        formMetric.classList.add("hidden");
    }
    else {
        checkboxImperial.checked = true;
    }
};
// adds a click event to each input element and selects the text inside it
Array.from(inputs).forEach(function (input) {
    input.addEventListener("click", function () {
        this.select();
    });
});
function IMCCalculate() {
    IMC = calcIMC(parseFloat(height.value), parseFloat(weight.value));
    let idealWeightText = GetIdealWeight(parseFloat(height.value), false);
    let typeWeightText = GetClassWeight(IMC);
    console.log("result Meter");
    ShowResult(idealWeightText, typeWeightText, IMC);
}
function IMCImperialCalculate() {
    let HeightM = ConvertHeight(parseFloat(foot.value), parseFloat(inch.value));
    let weightKg = ConvertWeight(parseFloat(stone.value), parseFloat(pound.value));
    console.log(HeightM);
    console.log(weightKg);
    IMC = calcIMC(HeightM, weightKg);
    let idealWeightText = GetIdealWeight(HeightM, true);
    let typeWeightText = GetClassWeight(IMC);
    console.log("result");
    ShowResult(idealWeightText, typeWeightText, IMC);
}
// show BMI result
function ShowResult(idealWeightText, typeWeightText, IMC) {
    idealWeight.innerHTML = idealWeightText;
    typeWeight.innerHTML = typeWeightText;
    score.innerHTML = IMC.toFixed(1);
    if (IMC > 0 && idealWeightText != null && typeWeightText != null) {
        console.log("Liberado");
        result.classList.remove("hidden");
        welcome.classList.add("hidden");
    }
}
// function to calculate BMI
function calcIMC(height, weight) {
    let calcIMC = weight / ((height / 100) * (height / 100));
    let result = Math.round(calcIMC * 10) / 10;
    if (result >= 0) {
        return result;
    }
    else {
        return 0;
    }
}
