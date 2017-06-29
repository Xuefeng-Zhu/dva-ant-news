import React from 'react';
import PropTypes from 'prop-types';
import {
  connect
} from 'dva';

import {
  WingBlank
} from 'antd-mobile';

import ArticleList from '../components/list/ArticleList.jsx';

import styles from './index.less';

function Index({
  articles
}) {
  return (
    <WingBlank size="sm">
      <ArticleList articles={articles} />
    </WingBlank>
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
