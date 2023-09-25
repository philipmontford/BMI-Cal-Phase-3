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
