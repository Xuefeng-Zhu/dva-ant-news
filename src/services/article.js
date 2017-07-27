// import request from '../utils/request';

const articles = [{
  author: {
    name: 'Frank',
    image: 'https://avatars2.githubusercontent.com/u/5875315?v=3&s=460'
  },
  id: 1,
  title: 'Amazon Prime Now launches in Singapore, its first market in Southeast Asia',
  image: 'https://tctechcrunch2011.files.wordpress.com/2017/01/gettyimages-535058999.jpg',
  readCount: 398,
  commentCount: 172,
  likeCount: 1789
}, {
  author: {
    name: 'Frank',
    image: 'https://avatars2.githubusercontent.com/u/5875315?v=3&s=460'
  },
  id: 2,
  title: 'Amazon Prime Now launches in Singapore, its first market in Southeast Asia',
  image: 'https://tctechcrunch2011.files.wordpress.com/2017/01/gettyimages-535058999.jpg',
  readCount: 398,
  commentCount: 172,
  likeCount: 1789
}, {
  author: {
    name: 'Frank',
    image: 'https://avatars2.githubusercontent.com/u/5875315?v=3&s=460'
  },
  id: 3,
  title: 'Amazon Prime Now launches in Singapore, its first market in Southeast Asia',
  image: 'https://tctechcrunch2011.files.wordpress.com/2017/01/gettyimages-535058999.jpg',
  readCount: 398,
  commentCount: 172,
  likeCount: 1789
}];

const article = {
  author: {
    name: 'Frank',
    image: 'https://avatars2.githubusercontent.com/u/5875315?v=3&s=460'
  },
  id: 1,
  title: 'Amazon Prime Now launches in Singapore, its first market in Southeast Asia',
  image: 'https://tctechcrunch2011.files.wordpress.com/2017/01/gettyimages-535058999.jpg',
  content: `(Source: https://techcrunch.com/2017/07/26/amazon-prime-now-launches-in-singapore-its-first-market-in-southeast-asia/)
    It’s official — Amazon has launched its Prime New delivery service in Singapore, its first market in Southeast Asia.`,
  date: new Date(),
  readCount: 398,
  commentCount: 172,
  likeCount: 1789,
  comments: Array(10).fill({
    author: {
      name: 'Frank',
      image: 'https://avatars2.githubusercontent.com/u/5875315?v=3&s=460'
    },
    content: 'bla bla bla',
    date: new Date()
  }),
  prevArticle: {
    id: '1',
    title: 'HotelTonight now lets you upgrade to a suite for 50% off'
  },
  nextArticle: {
    id: '1',
    title: 'HTC teases a standalone Vive VR headset for China'
  }
};

export async function fetchArticles() {
  return articles;
}

export async function fetchArticle(articleId) {
  return article;
}
