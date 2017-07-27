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
          <div>Related Readings</div>
          <ul className={styles.list}>
            <li><Link to={'/article/1'}>Article 1</Link></li>
            <li><Link to={'/article/1'}>Article 2</Link></li>
            <li><Link to={'/article/1'}>Article 3</Link></li>
            <li><Link to={'/article/1'}>Article 4</Link></li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Recommends;
