import axios, { type AxiosResponse } from "axios";

type posts = {
  userId: string;
  id: number;
  title: string;
  body: string;
  link: string;
  comment_count: number;
};

try {
  const response: AxiosResponse<posts[]> = await axios.get(
    "https://json-placeholder.mock.beeceptor.com/posts",
  );
  // response.data[0]?.userId.toUpperCase();
  console.log("Our response from the dummy API", response.data);
} catch (error: any) {
  if (axios.isAxiosError(error)) {
    console.error(error.message);
    if (error.response) {
      console.log(error.response.status);
    }
  } else console.log(error);
}

const testFunction = <pType>(firstArg: pType) => {
  console.log(firstArg)
  if (typeof firstArg === "string") console.log(firstArg.toUpperCase());
};

testFunction<string>("InshaAllah Allah will be help me ");
