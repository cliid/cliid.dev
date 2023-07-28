import components from '@components/MDXComponents';
import PostTemplate from '@components/templates/PostTemplate';
import { allPosts } from 'contentlayer/generated';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Tweet as ReactTweet } from 'react-tweet';

export default function Page({ post, tweets }: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(post.body.code);
  const Tweet = ({ id }: { id: string }) => {
    return (
      <div className="tw-not-prose">
        <ReactTweet id={id} />
      </div>
    );
  };

  return (
    <PostTemplate post={post}>
      <Component
        components={{
          ...components,
          Tweet
        }}
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
        crossOrigin="anonymous"
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

  return { props: { post, tweets: post!.tweetIds as string[] } };
}
