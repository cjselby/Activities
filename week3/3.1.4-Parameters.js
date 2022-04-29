// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function myFunction(param1, param2){
   console.log(param1, param2);
   return param1 + param2; 
}
myFunction(1,2);

// invoke the function and pass in two numbers

// invoke the function and pass in more than two numbers
myFunction(1,2,3,4);
// invoke the function and pass in only one number
myFunction(1);

//the above returns NaN bc param2 returns undefined so 1 + undefined = NaN

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

function myFunction(param1, ...param2){
    console.log(param1, param2);
    return param1 + param2; 
 }
 myFunction(1,2);

// again, invoke the function and pass in more than two numbers