import components from '@components/MDXComponents';
import PostTemplate from '@components/templates/PostTemplate';
import Tweet from '@components/Tweet';
import { getTweets } from '@lib/twitter';
import { allPosts } from 'contentlayer/generated';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Page({ post, tweets }: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(post.body.code);
  const StaticTweet = ({ id }: { id: string }) => {
    const tweet = tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <PostTemplate post={post}>
      <Component
        components={{
          ...components,
          StaticTweet
        }}
      />
    </PostTemplate>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = allPosts.find((post) => post.slug === params!.slug)!;
  const tweets: any[] = await getTweets(post!.tweetIds);

  return { props: { post, tweets } };
}
