import Template from '@components/templates/Template';
import Tweet from '@components/Tweet';
import { getTweets } from '@lib/twitter';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export default function Tweets({ tweets }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Template title="트윗들" description="나를 웃게 하고 또 생각해보게 해주는 트윗들.">
      <p className="tw-mb-4">저에게 영감을 주거나 웃게 하고, 또 생각하게 만든 트윗들입니다.</p>
      {tweets.map(
        (
          tweet: JSX.IntrinsicAttributes & {
            text: any;
            id: any;
            author: any;
            media: any;
            created_at: any;
            public_metrics: any;
            referenced_tweets: any;
          }
        ) => (
          <Tweet key={tweet.id} {...tweet} />
        )
      )}
    </Template>
  );
}

export async function getStaticProps(_: GetStaticPropsContext) {
  const tweets = await getTweets([
    '1499243317275492355',
    '1498982413615386625',
    '1499180855520112642',
    '1499169386279624708',
    '1499206854827819013'
  ]);

  return { props: { tweets } };
}
