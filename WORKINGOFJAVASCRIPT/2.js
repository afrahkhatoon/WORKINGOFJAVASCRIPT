/*
2. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.
use function exprssions to define the function and call the function before it is declared to demonstrate
hoisting
*/

const product = multiplyNumbers (4,9);
console.log(product);

function multiplyNumbers (num1, num2){
    return num1 * num2;
}