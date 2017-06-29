import {
  fetchArticles
} from '../services/article';

export default {

  namespace: 'article',

  state: {
    articles: []
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
    }
  },

  effects: {
    *fetchArticles({ payload }, { call, put }) {  // eslint-disable-line
      const articles = yield call(fetchArticles);
      yield put({type: 'saveArticles', payload: articles});
    }
  },

  reducers: {
    saveArticles(state, action) {
      return {...state, articles: action.payload};
    }
  }

};
