let name : any = "Ali Khan"
let length:number =  (name as string ).length
console.log("the length of the strimg : ",length)

type book = {
    name : string
}

let myFavouriteBook = JSON.parse(`{"name" : "Osama"}`) as book
myFavouriteBook.name        

let singleValue : any = "I'm a string"
singleValue= [1,2,3,4,5,5]
singleValue= "pakistan"

console.log(singleValue.toUpperCase())
 console.log(  singleValue)


// ===========--- Difference between any and unknown ---=============
// 'any' give free hand or 'any' doesn't enforce the type check.

// let singleValue : unknown = "I'm a string"
// singleValue= [1,2,3,4,5,5]
// singleValue= "pakistan"

// if(typeof singleValue === "string") console.log(singleValue.toUpperCase())
//     else console.log(  singleValue)




type role =  "Admin" | 'user' 

function redirect(role:role) {
    if(role == "Admin") return "refirect to admin dashboard"
    else if (role === 'user') return 'redirect to user dashboard'
    role
}