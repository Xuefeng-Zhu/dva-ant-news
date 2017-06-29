import React from 'react';
import PropTypes from 'prop-types';
import {
  TabBar,
  Flex,
  Tabs,
  Icon,
} from 'antd-mobile';
import {
  connect
} from 'dva';
import {
  routerRedux
} from 'dva/router';

import styles from './content.less';

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

function onChange(dispatch, key) {
  dispatch(routerRedux.push(key));
}

function renderTabs(dispatch, childrens, location) {
  return (
    <Tabs
      className={styles.tabs}
      destroyInactiveTabPane
      defaultActiveKey="/"
      activeUnderlineColor="#e91010"
      onChange={onChange.bind(null, dispatch)}
    >
      {tabs.map(tab => (
        <TabPane tab={tab.title} key={tab.path}>
          {childrens}
        </TabPane>
      ))}
    </Tabs>
  );
}

function Content({
  dispatch, childrens, location
}) {
  return (
    <div>
      <Flex>
        <Flex.Item>
          {renderTabs(dispatch, childrens, location)}
        </Flex.Item>
      </Flex>
    </div>
  );
}

Content.propTypes = {
  dispatch: PropTypes.func.isRequired,
  childrens: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Content);
