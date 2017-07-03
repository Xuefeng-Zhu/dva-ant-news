import React from 'react';
import PropTypes from 'prop-types';

import {
  connect
} from 'dva';
import {
  routerRedux
} from 'dva/router';

import {
  Card,
  Flex
} from 'antd-mobile';

import styles from './ArticleCard.less';

function onClick(dispatch, articleId) {
  dispatch(routerRedux.push(`article/${articleId}`));
}

function ArticleCard({
  article,
  dispatch
}) {
  const author = article.author;
  const avatarStyle = {
    backgroundImage: `url(${author.image})`
  };

  return (
    <Card onClick={onClick.bind(null, dispatch, article.id)}>
      <Card.Body className={styles.body}>
        <Flex>
          <Flex.Item className={styles.detail}>
            <div className={styles.author}>
              <div className={styles.avatar} style={avatarStyle} />
              <span>{author.name}</span>
            </div>
            <p className={styles.title}>{article.title}</p>
            <div className={styles.meta}>
              <span>阅读({article.readCount})</span>
              <span>评论({article.commentCount})</span>
              <span>赞({article.likeCount})</span>
            </div>
          </Flex.Item>
          <Flex.Item>
            <img className={styles.image} src={article.image} alt={article.title} />
          </Flex.Item>
        </Flex>
      </Card.Body>
    </Card>
  );
}

ArticleCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ArticleCard);
