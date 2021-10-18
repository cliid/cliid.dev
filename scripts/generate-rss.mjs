import { allBlogs } from '.contentlayer/data';
import { writeFileSync } from 'fs';
import RSS from 'rss';

async function generate() {
  const feed = new RSS({
    title: 'Jiwu Jang',
    site_url: 'https://cliid.dev',
    feed_url: 'https://cliid.dev/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://cliid.dev/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
