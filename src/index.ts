const foot = document.getElementById("foot") as HTMLInputElement;
const inch = document.getElementById("inch") as HTMLInputElement;
const stone = document.getElementById("stone") as HTMLInputElement;
const pound = document.getElementById("pound") as HTMLInputElement;
const height = document.getElementById("height") as HTMLInputElement;
const weight = document.getElementById("weight") as HTMLInputElement;
const inputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
const welcome = document.getElementById("welcome") as HTMLElement;
const result = document.getElementById("result") as HTMLElement;
const score = document.getElementById("score") as HTMLElement;
const idealWeight = document.getElementById("idealWeight") as HTMLElement;
const typeWeight = document.getElementById("typeWeight") as HTMLElement;
const checkboxMetric = document.getElementById("checkMetric") as HTMLInputElement;
const checkboxImperial = document.getElementById("checkImperial") as HTMLInputElement;
const formMetric = document.getElementById("metric") as HTMLFormElement;
const formImperial = document.getElementById("imperial") as HTMLFormElement;

let IMC: number = 0;

//checkbox metric select
checkboxMetric.onclick = function () {
  if (checkboxMetric.checked) {
    checkboxImperial.checked = false;
    formMetric.classList.remove("hidden");
    formImperial.classList.add("hidden");
  } else {
    checkboxMetric.checked = true;
  }
};

//checkbox imperial select
checkboxImperial.onclick = function () {
  if (checkboxImperial.checked) {
    checkboxMetric.checked = false;
    formImperial.classList.remove("hidden");
    formMetric.classList.add("hidden");
  } else {
    checkboxImperial.checked = true;
  }
};