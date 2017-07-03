import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  WhiteSpace,
  Button,
  Flex
} from 'antd-mobile';

import styles from './Article.less';

function Article({
  article
}) {
  if (!Object.keys(article).length) {
    return <WhiteSpace />;
  }

  return (
    <div>
      <WhiteSpace />
      <Card>
        <div className={styles.header}>
          <h3>{article.title}</h3>

          <div className={styles.meta}>
            <b>{article.author.name}</b>
            <span> 发布于{article.date.toDateString()}</span>
            <span className={styles.counts}>
              <span>阅读({article.readCount})</span>
              <span>评论({article.commentCount})</span>
              <span>赞({article.likeCount})</span>
            </span>
          </div>
        </div>

        <Card.Body>
          <div>{article.content}</div>
          <Button
            className={styles.likeBtn}
            activeClassName={styles.activeLikeBtn}
            type="primary"
            icon="koubei-o"
            inline
          >赞({article.likeCount})</Button>
        </Card.Body>

        <Flex className={styles.footer}>
          <Flex.Item>
            <div>上一篇</div>
            <div>文章1</div>
          </Flex.Item>
          <Flex.Item>
            <div>下一篇</div>
            <div>文章2</div>
          </Flex.Item>
        </Flex>
      </Card>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.object.isRequired
};

export default Article;
