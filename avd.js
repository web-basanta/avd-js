/**
 * 
*/

function add( a, b ) {
    return a + b;
 }

let a = 20, 
    b = 30;

function divide(a, b) {
    if(b == 0) {
       throw 'Division by zero';
    }
    return a / b;
}


let resultAdd = add(11, 12);
let resultdiv = divide(0, 4);

console.log("resultAdd",resultAdd); 
console.log("resultdiv",resultdiv);

let items = [1, 2, 3];
console.log("array length",items.length); 

// for(let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }

for(let item of items) {
    console.log("array item",item);
}

let formatted = true; 
if (formatted) 
{console.log('The code is easy to read');}
if (window.localStorage) {
    console.log('The local storage is supported');
  }

  console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity