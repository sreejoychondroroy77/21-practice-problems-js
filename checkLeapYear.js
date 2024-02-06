function checkLeapYear(number) {
    var final = number % 4 === 0;
    return final;
}
var yourYear = 2020;
var checkYourYear = checkLeapYear(yourYear);
console.log(checkYourYear);