let array  : (string | number )[] = ["khan wali", 3040]

let newArray : Array<string | number>  = ["Momin Khan", 214123]

array.push("Illegal push")


console.log("the array : ", array)



// type  roles = Array<"user" | "admin"  |'super-admin' >
// let user : roles = ["user"]

const userInfo : readonly  (string | string | number )[] =  ["ali", "aziz", 213]
console.log('The user information : ', userInfo )