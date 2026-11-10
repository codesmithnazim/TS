type chaiRatings = {
  [x: string]: number;
};

let allTeaRatings: chaiRatings = {
  doodhPathi: 4.5,
  khavaPathi: 3.7,
  gingerPathi: 4,
};

type apiResponse<Data = {name : string }> = {
  data: Data;
  isError: boolean;
};

type userResponse = apiResponse<{ name: string; age: number }>;
type blogResponse = apiResponse<{ title: string }>;

const userResponse: userResponse = {
  data: { name: "Abdul-Samad", age: 23 },
  isError: false,
};

const blogResponse: blogResponse = {
  data: { title: "I a the blog posted to check the owrking of the app" },
  isError: false,
};



const dummyResponse : apiResponse = {
    data : {name : "I'm dummy data"},
    isError : true 
}