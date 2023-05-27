import Analytics from '@components/metrics/Analytics';
import GitHub from '@components/metrics/Github';
import UnsplashCard from '@components/metrics/Unsplash';
import Template from '@components/templates/Template';
import TopTracks from '@components/TopTracks';

export default function Dashboard() {
  return (
    <Template title="Dashboard" description="Some stuff about my website!">
      <p className="tw-mb-4">A dashboard made with serverless functions.</p>
      <div className="tw-grid tw-w-full tw-grid-cols-1 tw-gap-4 tw-my-2 sm:tw-grid-cols-2">
        <Analytics />
        <GitHub />
      </div>
      <UnsplashCard />
      <h2 className="tw-mt-16 tw-mb-4 tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-black dark:tw-text-white">
        Top tracks of mine
      </h2>
      <TopTracks />
      <div className="tw-my-8"></div>
    </Template>
  );
}
