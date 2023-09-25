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


// convert imperial values
function ConvertHeight(heightFt: number, heightIn: number): number {
  return heightFt * 30.48 + heightIn * 2.54;
}

function ConvertWeight(weightSt: number, weightLb: number): number {
  return weightSt * 6.35029 + weightLb * 0.453592;
}

// check weight type and weight range
function GetClassWeight(IMC: number): string {
  let text: string = '';
  switch (true) {
    case IMC <= 18.5:
      text = "underweight";
      break;
    case IMC >= 18.6 && IMC <= 24.9:
      text = "Healthy Weight";
      break;
    case IMC >= 23.0 && IMC <= 29.9:
      text = "Overweight";
      break;
    case IMC >= 30:
      text = "Obese";
      break;
  }
  return text;
}

function GetIdealWeight(height: number, isImperial: boolean): string {
  let idealWeightRange: string;
  let height2 = (height / 100) * (height / 100);
  let min;
  let max;

  min = 18.6 * height2;
  max = 24.9 * height2;

  if (!isImperial) {
    min = Math.round(min * 100) / 100;
    max = Math.round(max * 100) / 100;
    idealWeightRange = `${min.toFixed(1)}kgs - ${max.toFixed(1)}kgs`;
  } else {
    const minSt = Math.floor(min / 6.35029);
    const minLbs = Math.round(((min / 6.35029) % 1) * 14);

    const maxSt = Math.floor(max / 6.35029);
    const maxLbs = Math.round(((max / 6.35029) % 1) * 14);

    console.log();

    idealWeightRange = `${minSt.toFixed(0)}st ${minLbs.toFixed(
      0
    )}lbs - ${maxSt.toFixed(0)}st ${maxLbs.toFixed(0)}lbs`;

    console.log(minSt + "minSt ");
    console.log("minLbs " + maxLbs);
    console.log("maxSt " + maxSt);
    console.log("maxLbs " + maxLbs);
  }

  console.log(idealWeightRange);
  return idealWeightRange;
}
