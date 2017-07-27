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
          <div>评论</div>
          <textarea
            className={styles.textarea}
            placeholder="你的评论可以一针见血"
            rows={5}
          />
          <Button
            className={styles.submitBtn}
            activeClassName={styles.activeSubmitBtn}
            type="primary"
            inline
          >提交评论</Button>
        </div>
        {/*<Card.Body>
        </Card.Body>*/}
      </Card>
    </div>
  );
}

export default Comments;
