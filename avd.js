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


function add(a,b){
    return a + b;
}

function div(a,b){
    return a - b;
}

function cal(fun, a, b){
    return fun(a,b);
}
console.log('Call back');
console.log(cal(add, 2, 10));
console.log(cal(div, 10, 5));


let dataString = "Software Technology";

let trimData = dataString.trim();

console.log(trimData.lastIndexOf('Technology'));
console.log(trimData.includes('Technology'));


// Define an array of products
var products = [
    {
      name: 'Product 1',
      price: 19.99,
      description: 'This is the first product.',
      // Add more properties as needed
    },
    {
      name: 'Product 2',
      price: 29.99,
      description: 'This is the second product.',
      // Add more properties as needed
    },
    {
      name: 'Product 3',
      price: 39.99,
      description: 'This is the third product.',
      // Add more properties as needed
    }
    // Add more products as needed
  ];
  
  // Accessing a specific product
  var firstProduct = products[0];


  console.log('Name:', firstProduct.name);
  console.log('Price:', firstProduct.price);
  console.log('Description:', firstProduct.description);
  

  // Create a map from the array of products
var productMap = new Map(products.map(product => [product.name, product]));

// Accessing a specific product from the map
var product2 = productMap.get('Product 3');
console.log('Name:', product2.name);
console.log('Price:', product2.price);
console.log('Description:', product2.description);
console.log(productMap);

