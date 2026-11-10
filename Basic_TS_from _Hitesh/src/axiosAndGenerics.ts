import axios, { AxiosResponse } from "axios";

type posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
  link: string;
  comment_count: number;
};

try {
  const response: AxiosResponse<posts> = await axios.get(
    "https://json-placeholder.mock.beeceptor.com/posts",
  );
  console.log("Our response from the dummy API", response.data);
} catch (error: any) {
  if (axios.isAxiosError(error)) {
    console.error(error.message);
    if (error.response) {
      console.log(error.response.status);
    }
  }
}
