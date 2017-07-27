import React from 'react';

import {
  Card,
  WhiteSpace,
  Button
} from 'antd-mobile';

import styles from './Comments.less';

function Comments() {
  return (
    <div>
      <WhiteSpace />
      <Card>
        <div className={styles.header}>
          <div>Comments</div>
          <textarea
            className={styles.textarea}
            placeholder="Leave your comments"
            rows={5}
          />
          <Button
            className={styles.submitBtn}
            activeClassName={styles.activeSubmitBtn}
            type="primary"
            inline
          >Submit</Button>
        </div>
        {/*<Card.Body>
        </Card.Body>*/}
      </Card>
    </div>
  );
}

export default Comments;
