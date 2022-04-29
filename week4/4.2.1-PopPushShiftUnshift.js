const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn = nums.pop();
let popReturnAgain = nums.pop();

console.log(popReturnAgain);
console.log(popReturn);
// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn = nums.shift();
let shiftReturnAgain = nums.shift();

console.log(shiftReturn);
console.log(shiftReturnAgain);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push();
nums.unshift();
