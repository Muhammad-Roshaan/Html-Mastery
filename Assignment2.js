// 1.Write a program that uses filter to remove all negative numbers from an array of numbers
function rmvNegativeNumbers(numbers) {
    return numbers.filter(function (num) { return num >= 0; });
}
var numbers1 = [-1, -55, -7, -8, -9, 9, -3, 4, -5];
console.log(rmvNegativeNumbers(numbers1));
// 2.Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
function NumbersX2(numbers) {
    return numbers.map(function (num) { return num * 2; });
}
var numbers2 = [1, 2, 3, 4, 5];
console.log(NumbersX2(numbers2));
// 3.Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
function Fruits(fruits) {
    return fruits.filter(function (fruit) { return fruit.length > 5; });
}
var fruits = ["apple", "banana", "cherry", "date", "grape"];
console.log(Fruits(fruits)); // Output: ["banana", "cherry"]
// 4.Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
function Numbers1(numbers) {
    return numbers.filter(function (num) { return num % 2 === 0; }).map(function (num) { return num * num; });
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Numbers1(numbers));
// 5.Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
function convertToFahrenheit(celsiusTemperatures) {
    return celsiusTemperatures.map(function (temp) { return (temp * 9 / 5) + 32; });
}
var celsiusTemperatures = [0, 10, 20, 30, 40];
console.log(convertToFahrenheit(celsiusTemperatures)); // Output: [32, 50, 68, 86, 104]
// 6.Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
function dOddNumbers(numbers) {
    return numbers.filter(function (num) { return num % 2 !== 0; }).map(function (num) { return num * 2; });
}
var numbers11 = [3, 6, 9, 12, 15, 18];
console.log(dOddNumbers(numbers11));
// 7.Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
function Exclamation(names) {
    names.forEach(function (name) { return console.log(name + " ;)"); });
}
var names = ["Alice", "Bob", "Charlie", "David", "Emily"];
Exclamation(names);
