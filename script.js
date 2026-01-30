function calculateBMI() {
  let inches = document.getElementById("height").valueAsNumber;
  console.log(typeof inches);
  let pounds = document.getElementById("weight").valueAsNumber;
  console.log(typeof pounds);
  let centimeters = inches * 2.54;
  console.log(centimeters);
  let meters = centimeters / 100;
  console.log(meters);
  let kilograms = pounds / 2.2046;
  console.log(kilograms);
  let BMI = (kilograms / meters ** 2).toFixed(2);
  console.log(BMI);
  let answer = document.getElementById("answer");
  answer.innerHTML = `BMI: ${BMI}`;
}

//crashes coz it cannot fetch the user input value as a number (or at all?) FIX IT!
