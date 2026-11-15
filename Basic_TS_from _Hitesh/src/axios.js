import axios from "axios"

let response = await axios.get("https://json-placeholder.mock.beeceptor.com/posts")
console.log(response.data[0])