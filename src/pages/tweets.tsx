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
    '1189444653059174401',
    '935857414435495937',
    '1334528781139259400',
    '1334334544598740994',
    '826528907381739520',
    '1308509070140162048',
    '1385236589547331589',
    '1402689156434776069',
    '997895977179721728',
    '1341090253864542208',
    '1383873047619276812',
    '1435677021590351873',
    '1026872652290379776',
    '1346113149112619016',
    '1340107217970683906',
    '992629481578745856',
    '989142253468708864',
    '807626710350839808',
    '1341962177272537089',
    '1342869937841266688',
    '1116362674319908864',
    '1331380003716681728',
    '1002104154737684480'
  ]);

  return { props: { tweets } };
}
