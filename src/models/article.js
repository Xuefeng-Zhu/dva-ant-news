import pathToRegexp from 'path-to-regexp';

import {
  fetchArticles,
  fetchArticle
} from '../services/article';

export default {

  namespace: 'article',

  state: {
    articles: [],
    article: {}
  },

  subscriptions: {
    homeSub({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({pathname}) => {
        if (pathname === '/') {
          dispatch({
            type: 'fetchArticles'
          });
        }
      });
    },
    articleSub({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({pathname}) => {
        const match = pathToRegexp('/article/:articleId?').exec(pathname);
        if (match) {
          const articleId = match[1];
          dispatch({
            type: 'fetchArticle',
            payload: articleId
          });
        }
      });
    }
  },

  effects: {
    *fetchArticles({ payload }, { call, put }) {  // eslint-disable-line
      const articles = yield call(fetchArticles);
      yield put({type: 'saveArticles', payload: articles});
    },
    *fetchArticle({ payload }, { call, put }) {  // eslint-disable-line
      const article = yield call(fetchArticle, payload);
      yield put({type: 'saveArticle', payload: article});
    }
  },

  reducers: {
    saveArticles(state, action) {
      return {...state, articles: action.payload};
    },
    saveArticle(state, action) {
      return {...state, article: action.payload};
    }
  }

};
