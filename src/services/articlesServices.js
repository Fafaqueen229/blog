// src/services/articleService.js
import axios from 'axios';

const API_URL = 'http://localhost:3015';

const createArticle = async (articleData) => {
  return axios.post(`${API_URL}/posts`, articleData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default {
  createArticle,
};
