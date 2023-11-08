// src/store/articleModule.js
import articleService from '../services/articleService';

export default {
  state: {
    articles: []
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    }
  },
  actions: {
    async createArticle({ commit }, articleData) {
      const response = await articleService.createArticle(articleData);
      console.log("***********************")
      console.log(response)
    }
  }
};
