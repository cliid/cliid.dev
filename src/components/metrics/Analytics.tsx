import MetricCard from '@components/metrics/MetricCard';
import fetcher from '@lib/fetcher';
import useSWR from 'swr';
import { Views } from 'typings';

export default function AnalyticsCard() {
  const { data } = useSWR<Views>('/api/views', fetcher);

  const pageViews = data?.total!;
  const link = 'https://cliid.dev';

  return <MetricCard header="All-Time Views" link={link} metric={pageViews} isCurrency={false} />;
}
