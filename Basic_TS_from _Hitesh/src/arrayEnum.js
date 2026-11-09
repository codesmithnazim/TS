"use strict";
let array = ["khan wali", 3040];
let newArray = ["Momin Khan", 214123];
array.push("Illegal push");
console.log("the array : ", array);
// type  roles = Array<"user" | "admin"  |'super-admin' >
// let user : roles = ["user"]
const userInfo = ["ali", "aziz", 213];
console.log("The user information : ", userInfo);
let firstStd = ["ali", 123];
console.log(firstStd);
var cupSize;
(function (cupSize) {
    cupSize["small"] = "100ml";
    cupSize["medium"] = "200ml";
    cupSize["large"] = "250ml";
    cupSize["custom"] = "custom";
})(cupSize || (cupSize = {}));
console.log("I want to drink ", cupSize.medium, " of tee");
const makechai = (chai, howMuch) => {
    console.log("we are preparing your : ", howMuch, chai, " chai");
};
makechai("elaichi", cupSize.medium);
let t1 = ["masala", 2];
let t2 = ["elaichi", 1];
let t3 = ["ginger", 1.2];
console.log("All the tea(s) \n", t1, "\n", t2, "\n", t3);
