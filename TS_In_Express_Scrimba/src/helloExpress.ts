console.log("start the express with ts and bun runtime")

type info ={name:string, rollNo: number}

function printIntro(information: info) {
    const {name}:info= information
    console.log("the name : ", name)
}

printIntro({name:"ali khan", rollNo:2440})