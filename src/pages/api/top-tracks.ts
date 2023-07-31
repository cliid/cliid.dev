import { getTopTracks } from '@lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';

const TopTracks = async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getTopTracks();
  if (response.status !== 200)
    return res.status(200).json({ tracks: [{ artist: '', songUrl: '', title: '' }] });

  const { items }: { items: any } = response.data;

  const tracks = items.slice(0, 10).map((track: any) => ({
    imageUrl: track.album.images[0].url,
    artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name
  }));

  return res.status(200).json({ tracks });
};

export default TopTracks;
