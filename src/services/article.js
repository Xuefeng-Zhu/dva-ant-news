// import request from '../utils/request';

const articles = [{
  author: {
    name: '刘思扬',
    image: 'https://avatars2.githubusercontent.com/u/5875315?v=3&s=460'
  },
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
  title: '关于叶橙 原作中夜修和苏晨感情路线的补全',
  image: 'https://tctechcrunch2011.files.wordpress.com/2017/06/screen-shot-2017-06-28-at-6-21-03-pm.png',
  readCount: 398,
  commentCount: 172,
  likeCount: 1789
}];

export async function fetchArticles() {
  return articles;
}
