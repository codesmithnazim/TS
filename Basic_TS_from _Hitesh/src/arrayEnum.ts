let array: (string | number)[] = ["khan wali", 3040];

let newArray: Array<string | number> = ["Momin Khan", 214123];

array.push("Illegal push");

console.log("the array : ", array);

// type  roles = Array<"user" | "admin"  |'super-admin' >
// let user : roles = ["user"]

const userInfo: readonly (string | string | number)[] = ["ali", "aziz", 213];
console.log("The user information : ", userInfo);

// type NamedReadOnlyTuple = [name : string, age: number]
// let firstStd : Readonly <NamedReadOnlyTuple> = ["ali", 123]
// ================--- Or---==================
type NamedReadOnlyTuple = readonly [name: string, age: number];

let firstStd: NamedReadOnlyTuple = ["ali", 123];

console.log(firstStd);

enum cupSize {
  small = "100ml",
  medium = "200ml",
  large = "250ml",
  custom = "custom ",
}

console.log("I want to drink ", cupSize.medium, " of tee");
