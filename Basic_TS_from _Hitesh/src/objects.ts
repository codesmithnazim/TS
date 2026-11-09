type chai = {
  type: string;
  price: number;
  ingredients: string[];
};

const adrakChai: chai = {
  type: "adrak",
  price: 150,
  ingredients: ["sugar", "tea-leaves", "elaichi"],
};

type info = {
  name: string;
  fatherName: string;
  age: number;
};

let xyz = {
  name: "Ali Khan",
  fatherName: "Muhammad Ali Khan",
  age: 12,
  gender: "male",
};

let std1: info = xyz;

type dummyChai = {
  type: string;
  sugar: number;
  extra: string[];
};

// const selectChai = (chai: <dummyChai>) => {
//   console.log("your chai is ", chai);
// };

// Use pick if you want specified by name values only

const selectChai = (chai: Pick<dummyChai, "type" | "sugar">) => {
  console.log("your chai is ", chai);
};

selectChai({ type: "masala", sugar: 1.4});
