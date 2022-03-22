import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4501cd3c4306945224d6f0a2142a4ea7",
    language: "ko-KR",
  },
});

export default instance;
