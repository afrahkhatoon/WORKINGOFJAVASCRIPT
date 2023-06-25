/*
1.  Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. call the
function before it is declared to demonstrate hoistinng.
*/

const sum = addNumbers(4,5);
console.log(sum);

function addNumbers(num1, num2){
    return num1 + num2;
}
