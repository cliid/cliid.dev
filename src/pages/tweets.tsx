import Template from '@components/templates/Template';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { Tweet } from 'react-tweet';

export default function Tweets({ tweets }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Template title="Tweets" description="Enjoy my assorted collection of tweets :)">
      <p className="tw-mb-4">Enjoy my assorted collection of tweets :)</p>
      {tweets.map((tweet, index) => (
        <Tweet id={tweet} key={index.toString()} />
      ))}
    </Template>
  );
}

export async function getStaticProps(_: GetStaticPropsContext) {
  const tweets = [
    '1435310172985982977',
    '1661985435495669760',
    '1512791605593653258',
    '1659697212853727234',
    '1684428403234025472',
    '1587873929443565572',
    '1637996332475359232',
    '1617116981437792259',
    '1659198653305856000',
    '1356728209035812866',
    '1660696280190812160',
    '1662041331982651392'
  ];

  return { props: { tweets } };
}
