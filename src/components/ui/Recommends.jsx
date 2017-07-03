import React from 'react';
import {Link} from 'dva/router';

import {
  Card,
  WhiteSpace
} from 'antd-mobile';

import styles from './Recommends.less';

function Recommends() {
  return (
    <div>
      <WhiteSpace />
      <Card>
        <Card.Body>
          <div>推荐阅读</div>
          <ul className={styles.list}>
            <li><Link to={'/article/1'}>文章 1</Link></li>
            <li><Link to={'/article/1'}>文章 2</Link></li>
            <li><Link to={'/article/1'}>文章 3</Link></li>
            <li><Link to={'/article/1'}>文章 4</Link></li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Recommends;
