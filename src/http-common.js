import axios from "axios";

export default axios.create({
  baseURL: "https://spf-bottega-capstone-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});