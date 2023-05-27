import Template from '@components/templates/Template';
import Tweet from '@components/Tweet';
import { getTweets } from '@lib/twitter';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export default function Tweets({ tweets }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Template title="Tweets" description="Stuff that I like, or stuff that makes me think.">
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
    '1662041331982651392',
    '1660696280190812160',
    '1356728209035812866',
    '1659198653305856000',
    '1659432625616957440',
    '1577805024717152262',
    '1617116981437792259',
    '1637996332475359232',
    '1587873929443565572',
    '1659697212853727234',
    '439146153280827392',
    '1512791605593653258',
    '1661985435495669760',
    '1435310172985982977'
  ]);

  return { props: { tweets } };
}
