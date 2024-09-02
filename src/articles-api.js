import axios from "axios"

axios.defaults.baseURL = "http://hn.algolia.com/api/v1/"

export const fetchArticles = async (searchQueary) => {
  const response = await axios.get(
    "/search", {
      params:{
        query: searchQueary,
      }
    }
  );
  return response.data.hits;
};