import React from 'react';
import PropTypes from 'prop-types';
import {
  connect
} from 'dva';

import styles from './page01.less';

function Page01({
  location
}) {
  return (
    <div className={styles.normal}>
      Route Component: Page01
      <a href="">dasd</a>
      <ul>
        <li>dasd</li>
        <li>dasd</li>
        <li>dasd</li>
        <li>dasd</li>
      </ul>
    </div>
  );
}

Page01.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Page01);
