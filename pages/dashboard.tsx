import Container from '@components/Container';
import Analytics from '@components/metrics/Analytics';
import GitHub from '@components/metrics/Github';
import UnsplashCard from '@components/metrics/Unsplash';
import TopTracks from '@components/TopTracks';

export default function Dashboard() {
  return (
    <Container
      title="Dashboard - Jiwu Jang"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <h1 className="page-title tw-mb-4">Dashboard</h1>
      <div className="tw-mb-8">
        <p className="tw-text-gray-600 dark:tw-text-gray-400 tw-mb-4">
          This is my personal dashboard, built with Next.js API routes deployed as serverless
          functions. I use this dashboard to track various metrics across platforms such as Github,
          Reddit, Spotify.
        </p>
      </div>
      <div className="tw-grid tw-gap-4 tw-grid-cols-1 sm:tw-grid-cols-2 tw-my-2 tw-w-full">
        <Analytics />
        <GitHub />
      </div>
      <UnsplashCard />
      <h2 className="tw-font-bold tw-text-3xl tw-tracking-tight tw-mb-4 tw-mt-16 tw-text-black dark:tw-text-white">
        Top Tracks
      </h2>
      <p className="tw-text-gray-600 dark:tw-text-gray-400 tw-mb-4">
        Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.
      </p>
      <TopTracks />
    </Container>
  );
}
