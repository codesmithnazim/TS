type apiResponse<Data> = {
  data: Data | false;
  ok: boolean;
  error: boolean | object;
};

const successResponse: apiResponse<{
  name: string;
  rollNo: number;
  marks: number;
}> = {
  data: { name: "Khan wali", rollNo: 21313, marks: 1099 },
  error: false,
  ok: true,
};
