import components from '@components/MDXComponents';
import BlogTemplate from '@components/templates/BlogTemplate';
import Tweet from '@components/Tweet';
import { getTweets } from '@lib/twitter';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { allBlogs } from '.contentlayer/data';

export default function Page({ post, tweets }: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(post.body.code);
  const StaticTweet = ({ id }: { id: string }) => {
    const tweet = tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <BlogTemplate post={post}>
      <Component
        components={
          {
            ...components,
            StaticTweet
          } as any
        }
      />
    </BlogTemplate>
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
