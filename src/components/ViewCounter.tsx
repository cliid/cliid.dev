import fetcher from '@lib/fetcher';
import { useEffect } from 'react';
import useSWR from 'swr';
import { Views } from 'typings';

export default function ViewCounter({ slug }: { slug: string }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      });

    registerView();
  }, [slug]);

  return <>{`${views > 0 ? views.toLocaleString() : '---'}`}</>;
}
