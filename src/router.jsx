import React from 'react';
import PropTypes from 'prop-types';
import {
  Router, Route
} from 'dva/router';

import Main from './components/layout/Main.jsx';

import Index from './routes/Index.jsx';
import ArticlePage from './routes/ArticlePage.jsx';

function RouterConfig({
  history
}) {
  return (
    <Router history={history}>
      <Route component={Main}>
        <Route path="/" component={Index} />
        <Route path="/discussion" component={Index} />
        <Route path="/resources" component={Index} />
        <Route path="/articles" component={Index} />
        <Route path="/submission" component={Index} />
        <Route path="/article/:articleId" component={ArticlePage} />
      </Route>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;
