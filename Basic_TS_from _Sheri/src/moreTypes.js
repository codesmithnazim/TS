"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Ali Khan";
let length = name.length;
console.log("the length of the strimg : ", length);
let myFavouriteBook = JSON.parse(`{"name" : "Osama"}`);
myFavouriteBook.name;
let singleValue = "I'm a string";
singleValue = [1, 2, 3, 4, 5, 5];
singleValue = "pakistan";
console.log(singleValue.toUpperCase());
console.log(singleValue);
// ===========--- Difference between any and unknown ---=============
// 'any' give free hand or 'any' doesn't enforce the type check.
// let singleValue : unknown = "I'm a string"
// singleValue= [1,2,3,4,5,5]
// singleValue= "pakistan"
// if(typeof singleValue === "string") console.log(singleValue.toUpperCase())
//     else console.log(  singleValue)
//# sourceMappingURL=moreTypes.js.map