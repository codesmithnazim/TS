"use strict";
// function isString (param : unknown ) : param is string 
// {
//     return  typeof param === "string"
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let name : unknown = "Ali khan "
// isString(name )? console.log("the name is string ") : console.log("not a string ")
function isString(x) {
    return typeof x !== "string";
}
const v = "hello";
console.log("the value type of v = ", typeof v);
if (isString(v)) {
    console.log(v.toUpperCase());
    //   ; // ❌ error: v is still unknown
}
else
    console.log('the name is not string');
console.log("the value type of v = ", typeof v);
//# sourceMappingURL=typePredicate.js.map