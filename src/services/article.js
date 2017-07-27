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
    It’s official — Amazon has launched its Prime New delivery service in Singapore, its first market in Southeast Asia.
    The Amazon apps went live in Singapore early last night local time, and Prime Now — an aggressive two-hour delivery service — is available to Singapore’s population of over five million people from today. The launch includes “tens of thousands of items” but it isn’t the full Prime offering, which Amazon said will be available “soon” in Singapore.
    TechCrunch reported that a launch would happen this week after Amazon’s initial target of Q1 2017, which we first reported on back in November, was pushed back following complications.
    The move brings Amazon into direct competition with Alibaba, which owns Southeast Asia-based e-commerce company Lazada. Lazada itself offers a Prime-like subscription service in partnership with Uber and Netflix, as well as grocery deliveries via Redmart, a service it acquired last year. Unlike Amazon, though, Redmart takes a minimum of one-day to fulfill orders. On top of that competitive advantage, Amazon is offering deep discounts for early users, although some customers complained that the coupon codes they used did not work.
    “This is the first time we’re offering Prime Now to an entire country. Singapore allows us to launch to the whole country at the same time, but when you look at the Singapore consumer, at Singapore — it being urban, a great metropolitan city, people are very tech-savvy, it makes a great match with the Prime Now value proposition,” Henry Low, who is Amazon’s Director of Prime Now in Asia Pacific, told CNET in an interview.
    The battle is just beginning, and there’s plenty to fight for
    With a cumulative population of over 600 million, an emerging middle class and growing smartphone sales, Southeast Asia is seen a market with potential for online services. The internet is accounts for less than five percent of all retail today, but growth forecasts are bright. E-commerce in the region is tipped to grow from $5.5 billion in 2015 to $87.8 billion by 2025, according to a 2016 report from Google and Singapore’s sovereign fund Temasek.
    Amazon and Alibaba also compete in India, where Alibaba has backed payments and commerce company Paytm. Amazon is present there through its own organization. The U.S. firm has invested more than $5 billion into its India operations, including a recent $260 million capital injection made this month. `,
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
