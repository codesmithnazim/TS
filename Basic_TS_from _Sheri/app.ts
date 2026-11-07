let message = "Asalam o Alaikum TS"
let tuple: [string, number]= ["khan wali", 12]
console.log("let's see the tuple in console", tuple)

type info= {
    name:string;
    rollNo :number ;
}


let student : info= {
    name : "Ali khan ",
    rollNo: 21321
}

console.log("he information of the student : ", student)



function orTypes(chai:string | number) {
    if(typeof chai == "string") console.log("The type of the name of chai : " , typeof chai)
        else console.log("the data type of the name is invalid : ", typeof chai)
    
}



// function isString(value: unknown): value is boolean {
//   return typeof value === "string";
// }

// console.log('the type predicate output : ',isString("Khan"))

function isNumber(x: unknown):boolean{
  return typeof x === 'number';
}

console.log("the argument is number : ", isNumber('123'))

orTypes(123)