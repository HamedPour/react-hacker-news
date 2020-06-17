// Axios Api instance hits hacker news api

// We will be pulling from the hacker news firebase Api
// see https://github.com/HackerNews/API for more info
import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0/",
  });
};
