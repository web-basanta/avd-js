// document.addEventListener("DOMContentLoaded", function () {
//     var topBetWraps = document.querySelectorAll(".topBetWrap");
//     var loadMoreButton = document.getElementById("loadMore");
//     var loadLessButton = document.getElementById("loadLess");
//     //var Access = document.getElementById("access-top");
  
//      loadMoreButton.style.display = "block";
//     var visibleCount = 0;
//     var itemsPerPage = 5;

//     function showItems(startIndex, endIndex) {
//         for (var i = startIndex; i < endIndex; i++) {
//             topBetWraps[i].style.display = "block";
//         }
//     }

//     function hideItems(startIndex, endIndex) {
//         for (var i = startIndex; i <= endIndex; i++) {
//             topBetWraps[i].style.display = "none";
//         }
//     }

//     showItems(0, itemsPerPage);
//     visibleCount += itemsPerPage;

//     loadMoreButton.addEventListener("click", function () {
//         var hiddenItems = document.querySelectorAll(".topBetWrap:not([style*='display: block'])");
//         var hiddenItemCount = hiddenItems.length;

//         if (hiddenItemCount > 0) {
//             var endIndex = Math.min(visibleCount + itemsPerPage, topBetWraps.length);
//             showItems(visibleCount, endIndex);
//             visibleCount += itemsPerPage;

//             if (visibleCount >= topBetWraps.length) {
//                 loadMoreButton.style.display = "none";
//                 loadLessButton.style.display = "block";
//             }
//         }
//     });

//     loadLessButton.addEventListener("click", function () {
// //window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
//        // loadMoreButton.style.display = "block";
//        //     loadLessButton.style.display = "none";
//         if (visibleCount > itemsPerPage) {
//             var startIndex = Math.min(itemsPerPage-visibleCount , itemsPerPage);
// console.log(itemsPerPage,visibleCount , itemsPerPage)
//              hideItems(startIndex, visibleCount);
//             visibleCount -= itemsPerPage;
//             loadMoreButton.style.display = "block";
//             loadLessButton.style.display = "none";
           
//         }
//     });
// });

// function hideItems(startIndex, endIndex) {
//     for (var i = startIndex; i <= endIndex; i++) {
//         console.log(i);
//         //topBetWraps[i].style.display = "none";
//     }
// }

// hideItems(5, 20);
// //console.log(topBetWraps.length);

// //inline caching
function findUser(user){
    return `found ${user.firstName} ${user.lastName}`
}

const userDate = {
    'firstName': 'Basanta',
    'lastName': 'manna'
}

let fu = findUser(userDate)
console.log(fu);

//alert("hello javatpoint");  
var grade='B';  
var result;  
switch(grade){  
case 'A':  
result="A Grade";  
break;  
case 'B':  
result="B Grade";  
break;  
case 'C':  
result="C Grade";  
break;  
default:  
result="No Grade";  
}  
 document.write(result);  
// var host = window.location; 
// const newUrl = host+'v1';//"https://example.com/new-page.html";
// window.location.replace(newUrl);


/*
#1) AT()  - The at() method returns an indexed element from an array.
Description:
The at() method returns the same as [].

*/



//window.addEventListener("load", init(), false);
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits.at(2);
    const demo = document.getElementById("1");

    demo.innerHTML = fruit

/**
 * #2) CONCAT()
Description:
The concat() method concatenates (joins) two or more arrays.
The concat() method returns a new array, containing the joined arrays.
The concat() method does not change the existing arrays.

*/

    const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2); 
document.getElementById("2").innerHTML = children;



/**
 * #3) CONSTRUCTOR()
Description:
The constructor property returns the function that created the Array prototype.
For JavaScript arrays the constructor property returns:
function Array() { [native code] }

*/

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits3.constructor;
document.getElementById("3").innerHTML = text;


class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  }
  
  var car1 = new Car('Chevy', 'Blazer', 2015);
  var car2 = new Car('Ford', 'Taurus', 2018);
  
  console.log('Car 1 is a ' + car1.year + ' ' + car1.make + ' ' + car1.model);
  // Output: Car 1 is a 2015 Chevy Blazer
  
  console.log('Car 2 is a ' + car2.year + ' ' + car2.make + ' ' + car2.model);
  // Output: Car 2 is a 2018 Ford Taurus

  /**
   * #4) copyWithin()
Description:
The copyWithin() method copies array elements to another position in the array.
The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array.

Code:
  */
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("4").innerHTML = fruits4.copyWithin(3,2);
});