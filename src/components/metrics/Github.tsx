import MetricCard from '@components/metrics/MetricCard';
import fetcher from '@lib/fetcher';
import useSWR from 'swr';
import { GitHub } from 'typings';

export default function GitHubCard() {
  const { data } = useSWR<GitHub>('/api/github', fetcher);

  const stars = data?.stars!;
  const link = 'https://github.com/cliid';

  return <MetricCard header="GitHub Stars" link={link} metric={stars} isCurrency={false} />;
}
