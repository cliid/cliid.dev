import MetricCard from '@components/metrics/Card';
import fetcher from '@lib/fetcher';
import { Unsplash } from '@lib/types';
import useSWR from 'swr';

export default function UnsplashCard() {
  const { data } = useSWR<Unsplash>('/api/unsplash', fetcher);

  const downloads = data?.downloads!;
  const views = data?.views!;
  const link = 'https://unsplash.com/@cliid';

  return (
    <div className="tw-grid tw-gap-4 tw-grid-cols-1 sm:tw-grid-cols-2 tw-my-2 tw-w-full">
      <MetricCard header="Unsplash Downloads" link={link} metric={downloads} isCurrency={false} />
      <MetricCard header="Unsplash Views" link={link} metric={views} isCurrency={false} />
    </div>
  );
}
