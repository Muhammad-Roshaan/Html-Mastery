//Q1.  Create a function that takes an array, an index, and a value as parameters.
//  Inside the function, use the splice method to insert the value at the specified
//  index in the array. Return the modified array.
function insertArray(arr, index, value) {
    arr.splice(index, 0, value);
    console.log('Modified array:', arr);
}
// Example 
var arr = [5, 9, 11];
insertArray(arr, 1, 7);
function addItem(cart, item) {
    cart.push(item);
    console.log("Added", item, "to cart.");
}
function removeItem(cart, item) {
    var index = cart.indexOf(item);
    if (index !== -1) {
        cart.splice(index, 1);
        console.log("Removed", item, "from cart.");
    }
    else {
        console.log(item, 'not found in cart.');
    }
}
var cart = [];
addItem(cart, "Apples");
addItem(cart, "Bananas");
removeItem(cart, "Oranges");
//Q3. Write a program that uses a while loop to print the first 25 integers.
var TFive = 1;
while (TFive <= 25) {
    console.log(TFive);
    TFive++;
}
//Q4. Write a program that uses a while loop to print the first 10 even numbers.
var count = 0;
var even = 2;
while (count < 10) {
    console.log(even);
    even += 2;
    count++;
}
//Q5. Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorial(n) {
    var result = 1;
    var ftl = 2;
    while (ftl <= n) {
        result *= ftl;
        ftl++;
    }
    return result;
}
var num = 5;
var fact = factorial(num);
console.log("\nFactorial of", num, "is:", fact);
//Q6. Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function removeNegatives(arr) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] < 0) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return arr;
}
var numbers = [-7, 73, -52, 13, -8];
var positiveNumbers = removeNegatives(numbers.slice());
console.log(positiveNumbers);
//Q7. Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the
//  numbers in the array.
function sumArray(arr) {
    var sum = 0;
    var i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
// Q8. Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to 
// Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform
//  the conversion for each temperature.
function celsiusToFahrenheit(celsiusTemperatures) {
    var fahrenheitTemperatures = [];
    var i = 0;
    while (i < celsiusTemperatures.length) {
        var fahrenheit_1 = (celsiusTemperatures[i] * 9 / 5) + 32;
        fahrenheitTemperatures.push(fahrenheit_1);
        i++;
    }
    return fahrenheitTemperatures;
}
var celsius = [20, 25, 30];
var fahrenheit = celsiusToFahrenheit(celsius);
console.log("\nCelsius:", celsius);
console.log("Fahrenheit:", fahrenheit);
// Q9. Write a program to remove all the odd numbers from an array.
function removeOddNumbers(numbers) {
    var evenNumbers = [];
    var i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
        i++;
    }
    return evenNumbers;
}
var mixedNumbers = [1, 2, 3, 4, 5];
var evens = removeOddNumbers(mixedNumbers);
console.log("Original:", mixedNumbers);
console.log("Even numbers:", evens);
