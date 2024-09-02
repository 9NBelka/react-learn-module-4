import axios from "axios"

axios.defaults.baseURL = "http://hn.algolia.com/api/v1/"

export const fetchArticles = async (searchQueary, page) => {
  const response = await axios.get(
    "/search", {
      params:{
        query: searchQueary,
        hitsPerPage:10,
        page,
      }
    }
  );
  return response.data.hits;
};