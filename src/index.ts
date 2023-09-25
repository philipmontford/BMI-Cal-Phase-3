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


// adds a click event to each input element and selects the text inside it
Array.from(inputs).forEach(function (input: HTMLInputElement) {
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
function ShowResult(idealWeightText: string, typeWeightText: string, IMC: number) {
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
function calcIMC(height: number, weight: number): number {
  let calcIMC = weight / ((height / 100) * (height / 100));
  let result = Math.round(calcIMC * 10) / 10;

  if (result >= 0) {
    return result;
  } else {
    return 0;
  }
}