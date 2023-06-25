/*
05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.
*/

{
    //console.log(x);  //if comment is removed then there is an error 
    
    let x= 10;
    console.log(x);
}