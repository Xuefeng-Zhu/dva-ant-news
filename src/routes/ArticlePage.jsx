import React from 'react';
import PropTypes from 'prop-types';
import {
  connect
} from 'dva';

import Article from '../components/ui/Article.jsx';
import Recommends from '../components/ui/Recommends.jsx';

function ArticlePage({
  article
}) {
  return (
    <div>
      <Article article={article} />
      <Recommends />
    </div>
  );
}

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    article: state.article.article
  };
}

export default connect(mapStateToProps)(ArticlePage);
