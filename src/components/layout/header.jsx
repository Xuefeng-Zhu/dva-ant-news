import React from 'react';
import PropTypes from 'prop-types';
import {
  NavBar
} from 'antd-mobile';

import styles from './header.less';

function Header({
  location
}) {
  return (
    <div>
      <NavBar
        mode="dark"
        className={styles.header}
        iconName={null}
      >
        全职高手
      </NavBar>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default Header;
