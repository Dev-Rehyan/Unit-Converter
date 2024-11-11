function convert(unit) {
  const inputValue = document.getElementById("userInput").value;
  let result = 0;
  let resultString = '';

  if (unit === "milesToKm") {
    result = inputValue * 1.60934;
    resultString = inputValue + " miles are " + result + " km";
  } else if (unit === "kmToMiles") {
    result = inputValue / 1.60934;
    resultString = inputValue + " kilometers are " + result + " miles";
  } else if (unit === "fahrenheitToCelsius") {
    result = (inputValue - 32) * 5/9;
    resultString = inputValue + " Fahrenheit are " + result + " Celsius";
  } else if (unit === "celsiusToFahrenheit") {
    result = (inputValue * 9/5) + 32;
    resultString = inputValue + " Celsius are " + result + " Fahrenheit";
  }

  console.log(resultString);
  const resultElement = document.getElementById("resultElement");
  resultElement.innerHTML = resultString;
}
