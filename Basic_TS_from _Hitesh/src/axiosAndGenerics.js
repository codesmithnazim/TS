import axios from "axios";
try {
    const response = await axios.get("https://json-placeholder.mock.beeceptor.com/posts");
    response.data[0]?.userId.toUpperCase();
    console.log("Our response from the dummy API", response.data);
}
catch (error) {
    if (axios.isAxiosError(error)) {
        console.error(error.message);
        if (error.response) {
            console.log(error.response.status);
        }
    }
    else
        console.log(error);
}
