import React from 'react';
import PropTypes from 'prop-types';
import {
  connect
} from 'dva';

import ArticleList from '../components/list/ArticleList.jsx';

function Index({
  articles
}) {
  return (
    <ArticleList articles={articles} />
  );
}

Index.propTypes = {
  articles: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    articles: state.article.articles
  };
}


export default connect(mapStateToProps)(Index);
