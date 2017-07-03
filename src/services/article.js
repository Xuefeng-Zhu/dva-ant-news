// import request from '../utils/request';

const articles = [{
  author: {
    name: '刘思扬',
    image: 'https://avatars2.githubusercontent.com/u/5875315?v=3&s=460'
  },
  id: 1,
  title: '关于叶橙 原作中夜修和苏晨感情路线的补全',
  image: 'https://tctechcrunch2011.files.wordpress.com/2017/06/screen-shot-2017-06-28-at-6-21-03-pm.png',
  readCount: 398,
  commentCount: 172,
  likeCount: 1789
}, {
  author: {
    name: '刘思扬',
    image: 'https://avatars2.githubusercontent.com/u/5875315?v=3&s=460'
  },
  id: 2,
  title: '关于叶橙 原作中夜修和苏晨感情路线的补全',
  image: 'https://tctechcrunch2011.files.wordpress.com/2017/06/screen-shot-2017-06-28-at-6-21-03-pm.png',
  readCount: 398,
  commentCount: 172,
  likeCount: 1789
}, {
  author: {
    name: '刘思扬',
    image: 'https://avatars2.githubusercontent.com/u/5875315?v=3&s=460'
  },
  id: 3,
  title: '关于叶橙 原作中夜修和苏晨感情路线的补全',
  image: 'https://tctechcrunch2011.files.wordpress.com/2017/06/screen-shot-2017-06-28-at-6-21-03-pm.png',
  readCount: 398,
  commentCount: 172,
  likeCount: 1789
}];

const article = {
  author: {
    name: '刘思扬',
    image: 'https://avatars2.githubusercontent.com/u/5875315?v=3&s=460'
  },
  id: 1,
  title: '关于叶橙 原作中夜修和苏晨感情路线的补全',
  image: 'https://tctechcrunch2011.files.wordpress.com/2017/06/screen-shot-2017-06-28-at-6-21-03-pm.png',
  content: 'test '.repeat(100),
  date: new Date(),
  readCount: 398,
  commentCount: 172,
  likeCount: 1789,
  comments: Array(10).fill({
    author: {
      name: '刘思扬',
      image: 'https://avatars2.githubusercontent.com/u/5875315?v=3&s=460'
    },
    content: 'bla bla bla',
    date: new Date()
  })
};

export async function fetchArticles() {
  return articles;
}

export async function fetchArticle(articleId) {
  return article;
}
