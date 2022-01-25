import Analytics from '@components/metrics/Analytics';
import GitHub from '@components/metrics/Github';
import UnsplashCard from '@components/metrics/Unsplash';
import Template from '@components/templates/Template';
import TopTracks from '@components/TopTracks';

export default function Dashboard() {
  return (
    <Template title="대시보드" description="저에 대한 대시보드입니다.">
      <p className="tw-mb-4">Serverless 함수와 Next.js API 루트를 활용한 대시보드입니다.</p>
      <div className="tw-grid tw-w-full tw-grid-cols-1 tw-gap-4 tw-my-2 sm:tw-grid-cols-2">
        <Analytics />
        <GitHub />
      </div>
      <UnsplashCard />
      <h2 className="tw-mt-16 tw-mb-4 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-black dark:tw-text-white">
        즐겨듣는 노래
      </h2>
      <p className="tw-mb-4">제가 Spotify에서 즐겨듣는 노래들입니다.</p>
      <TopTracks />
    </Template>
  );
}
