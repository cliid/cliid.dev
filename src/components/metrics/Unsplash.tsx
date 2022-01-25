import MetricCard from '@components/metrics/MetricCard';
import fetcher from '@lib/fetcher';
import useSWR from 'swr';
import { Unsplash } from 'typings';

export default function UnsplashCard() {
  const { data } = useSWR<Unsplash>('/api/unsplash', fetcher);

  const downloads = data?.downloads!;
  const views = data?.views!;
  const link = 'https://unsplash.com/@cliid';

  return (
    <div className="tw-grid tw-w-full tw-grid-cols-1 tw-gap-4 tw-my-2 sm:tw-grid-cols-2">
      <MetricCard header="Unsplash Downloads" link={link} metric={downloads} isCurrency={false} />
      <MetricCard header="Unsplash Views" link={link} metric={views} isCurrency={false} />
    </div>
  );
}
