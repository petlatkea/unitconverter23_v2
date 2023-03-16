"use strict";

function displayInputUnit(conversion) {
  document.querySelector("#inputunit").textContent = getInputUnit(conversion);
}

function getInputUnit(conversion) {
  if (conversion === "cmToInch") {
    return "Centimeter";
  } else if (conversion === inchToCm) {
    return "Inches";
  } else if (conversion === milesToKm) {
    return "Miles";
  } else if (conversion === kmToMiles) {
    return "Kilometers";
  } else if (conversion === fToC) {
    return "Fahrenheit";
  } else if (conversion === cToF) {
    return "Celcius";
  } else if (conversion === feetToM) {
    return "Feet";
  } else if (conversion === mToFeet) {
    return "Meters";
  } else if (conversion === lbsToKg) {
    return "Pounds";
  } else if (conversion === kgToLbs) {
    return "Kilograms";
  } else if (conversion === gToL) {
    return "Gallons";
  } else conversion === lToG;
  {
    return "Liters";
  }
}
