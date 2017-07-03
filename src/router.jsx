import React from 'react';
import PropTypes from 'prop-types';
import {
  Router, Route
} from 'dva/router';

import Main from './components/layout/Main.jsx';

import Index from './routes/Index.jsx';
import Page01 from './routes/page01.jsx';
import Page02 from './routes/page02.jsx';
import Page03 from './routes/page03.jsx';
import ArticlePage from './routes/ArticlePage.jsx';

function RouterConfig({
  history
}) {
  return (
    <Router history={history}>
      <Route component={Main}>
        <Route path="/" component={Index} />
        <Route path="/discussion" component={Page01} />
        <Route path="/resources" component={Page02} />
        <Route path="/articles" component={Page03} />
        <Route path="/submission" component={Page03} />
        <Route path="/article/:articleId" component={ArticlePage} />
      </Route>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;
