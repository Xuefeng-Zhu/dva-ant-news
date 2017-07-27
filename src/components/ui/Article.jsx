import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'dva/router';

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
            <span> published at {article.date.toDateString()}</span>
            <span className={styles.counts}>
              <span>Views({article.readCount})</span>
              <span>Comments({article.commentCount})</span>
              <span>Likes({article.likeCount})</span>
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
          >Like({article.likeCount})</Button>
        </Card.Body>

        <Flex className={styles.footer}>
          <Flex.Item>
            <Link to={`/article/${article.prevArticle.id}`}>
              <b>Previous Article</b>
              <div>{article.prevArticle.title}</div>
            </Link>
          </Flex.Item>
          <Flex.Item>
            <Link to={`/article/${article.nextArticle.id}`}>
              <b>Next Article</b>
              <div>{article.nextArticle.title}</div>
            </Link>
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
