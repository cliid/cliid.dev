import MetricCard from '@components/metrics/Card';
import fetcher from '@lib/fetcher';
import { Views } from '@lib/types';
import useSWR from 'swr';

export default function AnalyticsCard() {
  const { data } = useSWR<Views>('/api/views', fetcher);

  const pageViews = data?.total!;
  const link = 'https://cliid.dev';

  return <MetricCard header="All-Time Views" link={link} metric={pageViews} isCurrency={false} />;
}
