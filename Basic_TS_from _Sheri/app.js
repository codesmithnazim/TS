"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Asalam o Alaikum TS";
let tuple = ["khan wali", 12];
console.log("let's see the tuple in console", tuple);
let student = {
    name: "Ali khan ",
    rollNo: 21321
};
console.log("he information of the student : ", student);
function orTypes(chai) {
    if (typeof chai == "string")
        console.log("The type of the name of chai : ", typeof chai);
    else
        console.log("the data type of the name is invalid : ", typeof chai);
}
// function isString(value: unknown): value is boolean {
//   return typeof value === "string";
// }
// console.log('the type predicate output : ',isString("Khan"))
function isNumber(x) {
    return typeof x === 'number';
}
console.log("the argument is number : ", isNumber('123'));
orTypes(123);
//# sourceMappingURL=app.js.map