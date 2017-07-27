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

import styles from './Header.less';

const TabPane = Tabs.TabPane;
const tabs = [{
  title: 'Home',
  path: '/'
}, {
  title: 'Hot',
  path: '/discussion'
}, {
  title: 'Recommended',
  path: '/resources'
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
        Dva Ant News
      </NavBar>

      <Tabs
        destroyInactiveTabPane
        defaultActiveKey="/"
        swipeable={false}
        pageSize={5}
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
