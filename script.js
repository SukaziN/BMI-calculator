function calculateBMI() {
  let inches = document.getElementById("height").valueAsNumber;
  let pounds = document.getElementById("weight").valueAsNumber;
  let centimeters = inches * 2.54;
  let meters = centimeters / 100;
  let kilograms = pounds / 2.2046;
  let BMI = (kilograms / meters ** 2).toFixed(2);
  let answer = document.getElementById("answer");
  answer.innerHTML = `BMI: ${BMI}`;
}
