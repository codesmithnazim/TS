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
  custom = "custom",
}

console.log("I want to drink ", cupSize.medium, " of tee");
type chaiTypes = "masala" | "elaichi" | "ginger"

const makechai =(chai : chaiTypes , howMuch : cupSize)=>{
    console.log("we are preparing your : ", howMuch , chai, " chai")
}


makechai ( "elaichi", cupSize.medium)


let t1: [string, number ]= ["masala", 2]
let t2: (string | number )[]= ["elaichi", 1]
let t3: Array<string | number >= ["ginger", 1.2]

console.log("All the tea(s) \n", t1, "\n", t2 , "\n", t3)

type practiceArray = readonly [string , number , boolean]
let newArray2 : practiceArray = ["name", 3068564997, true]