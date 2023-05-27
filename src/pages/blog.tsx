import BlogPost from '@components/BlogPost';
import Template from '@components/templates/Template';
import { pick } from '@lib/utils';
import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';
import Fuse from 'fuse.js';
import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const fuse = new Fuse(posts, {
    includeScore: true,
    keys: ['title']
  });

  const filteredBlogPosts = fuse.search(searchValue).map((value) => value.item);

  return (
    <Template title="Blog" description="Hello.">
      <div className="tw-flex tw-flex-col tw-mb-8 tw-gap-y-8">
        <div className="tw-relative tw-w-full">
          <input
            aria-label="Please type down the title of the article you want to search for."
            placeholder="Please type down the title of the article you want to search for."
            onChange={(e) => setSearchValue(e.target.value)}
            className="tw-block tw-w-full tw-h-10 tw-py-2 tw-pl-4 tw-pr-32 tw-border tw-rounded-md focus:tw-ring-primary-500 focus:tw-border-primary-500"
          />
        </div>
        {searchValue && !filteredBlogPosts.length && <p>There is no post with that title :/</p>}
        {searchValue
          ? filteredBlogPosts.map((post) => <BlogPost key={post.title} {...post} />)
          : posts.map((post) => <BlogPost key={post.title} {...post} />)}
      </div>
    </Template>
  );
}

export function getStaticProps() {
  const posts = allPosts.map((post: Post) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { posts } };
}
