import BlogPost from '@components/BlogPost';
import Template from '@components/templates/Template';
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
    <Template
      title="블로그"
      description="블로그입니다. 프로그래밍, 철학, 사업, 경제 등을 다룹니다."
    >
      <div className="tw-flex tw-flex-col tw-gap-y-8">
        <div className="tw-relative tw-w-full">
          <input
            aria-label="제목을 입력해주세요"
            placeholder="제목을 입력해주세요."
            onChange={(e) => setSearchValue(e.target.value)}
            className="tw-block tw-w-full tw-h-10 tw-py-2 tw-pl-4 tw-pr-32 tw-border tw-rounded-md focus:tw-ring-primary-500 focus:tw-border-primary-500"
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
        {searchValue && !filteredBlogPosts.length && <p>해당 제목을 가지는 글이 없습니다.</p>}
        {searchValue
          ? filteredBlogPosts.map((post) => <BlogPost key={post.title} {...post} />)
          : posts.map((post) => <BlogPost key={post.title} {...post} />)}
      </div>
    </Template>
  );
}

export function getStaticProps() {
  const posts = allBlogs.map((post: BlogType) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { posts } };
}
