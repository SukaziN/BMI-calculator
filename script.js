//let inches = prompt("Enter your height in inches");
let inches = document.getElementById("height").value;
inches = Number(inches);
console.log(inches);
//let pounds = prompt("enter your weight in pounds");
let pounds = document.getElementById("weight").value;
pounds = Number(pounds);
console.log(pounds);
let button = document.getElementById("calculate");
function calculateBMI() {
  let centimeters = inches * 2.54;
  console.log(centimeters);
  let meters = centimeters / 100;
  console.log(meters);
  let kilograms = pounds / 2.2046;
  console.log(kilograms);

  let BMI = kilograms / meters ** 2;
  console.log(BMI);
  let answer = document.getElementById("answer");
  answer.innerHTML = `BMI: ${BMI}`;
}
button.addEventListener("click", calculateBMI());
//crashes coz it cannot fetch the user input value as a number (or at all?) FIX IT!
