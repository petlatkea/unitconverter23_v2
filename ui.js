"use strict";

function displayOutputUnit(conversion) {
  document.querySelector("#outputunit").textContent = getOutputUnit(conversion);
}
function getOutputUnit(conversion) {
  if (conversion === "inchToCm") {
    return "Centimeters";
  } else if (conversion === "cmToInch") {
    return "Inches";
  } else if (conversion === "kmToMiles") {
    return "Miles";
  } else if (conversion === "milesToKm") {
    return "Kilometers";
  } else if (conversion === "fToC") {
    return "Celcius";
  } else if (conversion === "cToF") {
    return "Fahrenheit";
  } else if (conversion === "feetToM") {
    return "Meters";
  } else if (conversion === "mToFeet") {
    return "Foot";
  } else if (conversion === "lbsToKg") {
    return "Kilograms";
  } else if (conversion === "kgToLbs") {
    return "Pounds";
  } else if (conversion === "gToL") {
    return "Liters";
  } else if (conversion === "lToG") {
    return "Gallons";
  }
}
