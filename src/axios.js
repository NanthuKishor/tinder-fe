import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-b-e.herokuapp.com",
});

export default instance;
