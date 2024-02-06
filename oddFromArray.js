function getOddFromArray(number) {
    sum = 0;
    for (let i = 0; i < number.length; i++) {
        var element = number[i];
        if (element % 2 === 1) {
            sum = sum + element;
        }
    }
    return sum;
}
var array = [12, 23, 34, 45, 56, 77, 78, 89, 90];
var yourSum = getOddFromArray(array);
console.log(yourSum);
