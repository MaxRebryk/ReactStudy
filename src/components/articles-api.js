// src/articles-api.js
import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

export const fetchArticlesWithTopic = async topic => {
  // const response = await axios.get(
  //   `/search?query=${topic}&page=1&hitsPerPage=10`
  // );
  const response = await axios.get('/search', {
    params: {
      query: topic,
      page: 1,
      hitsPerPage: 10,
    },
  });

  return response.data.hits;
};
