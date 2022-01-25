import Track from '@components/Track';
import fetcher from '@lib/fetcher';
import useSWR from 'swr';
import { TopTracks } from 'typings';

export default function Tracks() {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
