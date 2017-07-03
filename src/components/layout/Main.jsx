import React from 'react';
import PropTypes from 'prop-types';
import {
  WingBlank
} from 'antd-mobile';


import Header from './Header.jsx';
import styles from './Main.less';

function Main({
  children, location
}) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <WingBlank size="sm">
        {children}
      </WingBlank>

    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default Main;
