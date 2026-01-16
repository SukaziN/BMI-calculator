let inches = prompt("Enter your height in inches");
inches = Number(inches);
console.log(inches);
let pounds = prompt("enter your weight in pounds");
pounds = Number(pounds);
console.log(pounds);
let centimeters = (inches * 2.54) ** 2; //centimeter conversion is in brackets. The additional square is a modification adjusted for the meters
console.log(centimeters);
let meters = centimeters / 100;
console.log(meters);
let kilograms = pounds / 2.2046;
console.log(kilograms);

let BMI = kilograms / meters; //this returns a ridiculously large number
//console.log(meters ** 2);
console.log(BMI);
//I ended up squaring the centimeters before the meters conversion because the meters were decimals and the square meters made it a much smaller number which made the BMI division produce a ridiculously large number
