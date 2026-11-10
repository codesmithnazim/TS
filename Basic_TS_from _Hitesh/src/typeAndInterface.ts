interface basicInfo {
  name: string;
}
interface fullInfo extends basicInfo {
  // types merging
  fatherName: string;
}
let info: fullInfo = {
  name: " Momin Khan",
  fatherName: "Aziz  Rehman",
};

type bitExtraInfo = { fatherName: string };

let info2: basicInfo & bitExtraInfo = {
  // types merging
  name: " Momin Khan",
  fatherName: "Aziz  Ullah",
};

// type about = {name : string, fatherName : string, rollNo : number,}
// type about = {age : number }

interface about {
  name: string;
  fatherName: string;
  rollNo: number;
}
interface about {
  age: number;
}

let nazim: about = {
  age: 19.6,
  name: "Nazim",
  fatherName: "Aziz Rehman",
  rollNo: 1232,
};

console.log(info, info2);

type teaMachine = { // or v can use interface in the place of type.
  start(): boolean;
  stop(): boolean;
}

let xyzTeaMachine: teaMachine = {
  start: function (): boolean {
    return true;
  },
  stop: (): boolean => {
    return false;
  },
};

xyzTeaMachine.start()
xyzTeaMachine.stop()