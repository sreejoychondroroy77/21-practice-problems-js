function kmToMiles(number) {
    var mile = number * 1.609;
    return mile;

}
var yourKm = 1;
var yourMile = kmToMiles(yourKm);
console.log(yourMile);