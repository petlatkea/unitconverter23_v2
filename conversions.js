
function fToC(fahrenheit) {
  const fht = ((fahrenheit - 32) * 5) / 9;
  console.log(fht);
  return fht;
}
function cToF(celcius) {
  const cel = (celcius * 9 / 5)+32;
  console.log(cel);
  return cel;
  }
function gToL(gallons) {
  const liters = gallons * 3.78541;
  return liters;
}

function lToG(liters) {
  const gallons = liters / 3.78541;
  return gallons;
}
