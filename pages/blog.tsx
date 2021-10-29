import BlogPost from '@components/BlogPost';
import Container from '@components/Container';
import { pick } from '@lib/utils';
import Fuse from 'fuse.js';
import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';

import { allBlogs } from '.contentlayer/data';
import type { Blog as BlogType } from '.contentlayer/types';

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const fuse = new Fuse(posts, {
    includeScore: true,
    keys: ['title']
  });

  const filteredBlogPosts = fuse.search(searchValue).map((value) => value.item);

  return (
    <Container
      title="Blog – Jiwu Jang"
      description="Personal thoughts on programming, life, investing and more."
    >
      <h1 className="page-title tw-mb-4">Blog</h1>
      <p className="tw-mb-4">
        {`I've been writing on this website since 2021. 2021?
            Yes, you got it right. This blog is infantly, but I believe it'll sometime be mature. 
            Oh, and I've written ${posts.length} articles on this site. Use the search below to filter by title.`}
      </p>
      <div className="tw-relative tw-w-full">
        <input
          aria-label="Search articles"
          placeholder="Search articles..."
          onChange={(e) => setSearchValue(e.target.value)}
          className="tw-pl-4 tw-pr-32 tw-py-2 focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-h-10 tw-rounded-md tw-border"
        />
        <div className="tw-absolute tw-right-2 tw-top-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tw-w-6 tw-h-6 hover:tw-text-black dark:hover:tw-text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>
      {!searchValue && (
        <>
          <h3 className="tw-mt-8 tw-mb-4 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-black md:tw-text-4xl dark:tw-text-white">
            Most Popular
          </h3>
          <BlogPost
            title="Everything I Know About Priority Queues, Heaps and Binary Heaps."
            summary="A full, step-by-step explanation of priority queues, their implementation, when they are used, and how to use them."
            slug="priority-queue"
          />
          <BlogPost
            title="Integrating Twemojis with rehype.js using rehype-twemojify"
            summary="Learn how to seamlessly integrate twemojis with rehype.js"
            slug="integrating-twemoji-with-rehype"
          />
          <BlogPost
            title="The history of Lorem Ipsum, what it is used for, how to use it, and various tools to generate it."
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec libero ac sem placerat interdum. Integer vestibulum aliquet bibendum."
            slug="lorem-ipsum"
          />
          <h3 className="tw-mt-8 tw-mb-4 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-black md:tw-text-4xl dark:tw-text-white">
            Recent Posts
          </h3>
          {[...posts]
            .sort((a, b) => new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf())
            .filter((post, index) => index < 3)
            .map((post, index) => {
              return <BlogPost key={index.toString()} {...post} />;
            })}
        </>
      )}
      <h3 className="tw-mt-8 tw-mb-4 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-black md:tw-text-4xl dark:tw-text-white">
        All Posts
      </h3>
      {searchValue && !filteredBlogPosts.length && (
        <p className="tw-mb-4 tw-text-gray-600 dark:tw-text-gray-400">No posts found.</p>
      )}
      {searchValue
        ? filteredBlogPosts.map((post) => <BlogPost key={post.title} {...post} />)
        : posts.map((post) => <BlogPost key={post.title} {...post} />)}
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs.map((post: BlogType) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { posts } };
}
