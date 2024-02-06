function checkYourYear(number) {
    let leapYear = [];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element % 4 === 0) {
            leapYear.push(element)
        }
    }
    return leapYear;
}
var array = [2023, 2024, 2025, 2028, 2030, 2032]

var result = checkYourYear(array);
console.log(result);

