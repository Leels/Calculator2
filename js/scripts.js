var bmi = function(weight, height) {
  return (weight / Math.pow(height,2));
};
var weight = parseFloat(prompt("Enter your weight in kilograms:"));
var height = parseFloat(prompt("Enter you height in meters:"));
var result = bmi(weight, height).toFixed(2);
alert(result);

var celsius = function(farenheight) {
  return (farenheight - 32)/1.8;
};
var farenheight = parseFloat(prompt("Enter the temperature in farenheight:"));
var result = celsius(farenheight).toFixed(2);
alert("Temperature in celsius is " + result + " degrees.");
