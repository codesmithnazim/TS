import axios from "axios";
try {
    const { data } = await axios.get("https://json-placeholder.mock.beeceptor.com/posts");
    console.log("Our response from the dummy API", data);
}
catch (error) {
    console.error(error);
}
