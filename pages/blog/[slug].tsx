import components from '@components/MDXComponents';
import Tweet from '@components/Tweet';
import BlogLayout from '@layouts/blog';
import { getTweets } from '@lib/twitter';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useMemo } from 'react';

import { allBlogs } from '.contentlayer/data';

export default function Page({ post, tweets }: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMemo(() => getMDXComponent(post.body.code), [post.body.code]);
  const StaticTweet = ({ id }: { id: string }) => {
    const tweet = tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <BlogLayout post={post}>
      <Component
        components={
          {
            ...components,
            StaticTweet
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = allBlogs.find((post) => post.slug === params!.slug)!;
  const tweets: any[] = await getTweets(post!.tweetIds);

  return { props: { post, tweets } };
}
