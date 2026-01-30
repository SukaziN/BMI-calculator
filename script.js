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
//for target market purposes, areas using pounds and inches are socially more inclined to utilize weight checking tools and due to their diets are more prone to incur unhealthy BMIs hence the measurement unit for the end-user
