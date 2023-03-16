
function convert(type, value) {
    switch (type) {
        case "inchToCm":
            return inchToCm(value);
        case "cmToInch":
            return cmToInch(value);
        case "milesToKm":
            return milesToKm(value);
        case "kmToMiles":
            return kmToMiles(value);
        case "fToC":
            return fToC(value);
        case "cToF":
            return cToF(value);
        case "feetToM":
            return feetToM(value);
        case "mToFeet":
            return mToFeet(value);
        case "lbsToKg":
            return lbsToKg(value);
        case "kgToLbs":
            return kgToLbs(value);
        case "gToL":
            return gToL(value);
        case "lToG":
            return lToG(value);
        default:
            return null;
    }
}