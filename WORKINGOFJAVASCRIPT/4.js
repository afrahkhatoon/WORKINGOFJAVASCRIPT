/*

04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
them values and log their values to the console before and after they are declared to demonstrate variable
hoisting.

*/

{
    console.log(x);    //undefined due to hoisting
   // console.log(y);  // remove comment an Run throw Error ReferenceError
    //console.log(z);  // remove comment an Run throw Error ReferenceError

    var x = 10;
    let y = 20;
    const z = 30;


    console.log(x);    // 10
    console.log(y);    // 20
    console.log(z);    // 30

}