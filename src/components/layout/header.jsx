import React from 'react';
import PropTypes from 'prop-types';
import {
  Tabs,
  NavBar
} from 'antd-mobile';
import {
  connect
} from 'dva';
import {
  routerRedux
} from 'dva/router';

import styles from './header.less';

const TabPane = Tabs.TabPane;
const tabs = [{
  title: '首页',
  path: '/'
}, {
  title: '讨论',
  path: '/discussion'
}, {
  title: '资料',
  path: '/resources'
}, {
  title: '同人文',
  path: '/articles'
}, {
  title: '投稿',
  path: '/submission'
}];

function onTabClick(dispatch, key) {
  dispatch(routerRedux.push(key));
}

function Header({
  dispatch, location
}) {
  return (
    <div className={styles.tabs}>
      <NavBar
        mode="dark"
        className={styles.header}
        iconName={null}
      >
        全职高手
      </NavBar>

      <Tabs
        destroyInactiveTabPane
        defaultActiveKey="/"
        activeUnderlineColor="#e91010"
        swipeable={false}
        pageSize={6}
        onTabClick={onTabClick.bind(null, dispatch)}
      >
        {tabs.map(tab => (
          <TabPane tab={tab.title} key={tab.path} />
        ))}
      </Tabs>
    </div>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Header);
