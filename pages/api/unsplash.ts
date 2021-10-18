import { getUnsplashStatistics } from '@lib/unsplash';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { downloads, views } = (await getUnsplashStatistics()).data;

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

  return res.status(200).json({
    downloads: downloads.total,
    views: views.total
  });
}
