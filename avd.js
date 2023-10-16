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