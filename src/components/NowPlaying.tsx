import fetcher from '@lib/fetcher';
import { animate } from 'motion';
import { useEffect } from 'react';
import useSWR from 'swr';
import { NowPlayingSong } from 'typings';

import Link from './Link';

function AnimatedBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)'
        ]
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
  }, []);

  return (
    <div className="tw-flex tw-overflow-hidden tw-flex-shrink-0 tw-items-end tw-w-auto">
      <span id="bar1" className="tw-w-1 tw-mr-[3px] tw-h-2 tw-bg-spotify-green tw-opacity-75" />
      <span id="bar2" className="tw-w-1 tw-mr-[3px] tw-h-1 tw-bg-spotify-green" />
      <span id="bar3" className="tw-w-1 tw-h-3 tw-opacity-80 tw-bg-spotify-green" />
    </div>
  );
}

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  if (data && data.songUrl) {
    return (
      <div className="tw-flex tw-gap-x-2 tw-items-center tw-w-max tw-max-w-full tw-h-full">
        <AnimatedBars />
        <div className="tw-flex tw-max-w-full tw-truncate">
          <Link className="tw-font-semibold tw-text-spotify-green" href={data.songUrl}>
            {data.title}
          </Link>
          <span className="tw-block tw-mx-2 tw-text-gray-500 tw-select-none dark:tw-text-gray-300">
            {' – '}
          </span>
          <span className="tw-max-w-max tw-text-gray-500 tw-truncate dark:tw-text-gray-300">
            {data.artist}
          </span>
        </div>
      </div>
    );
  }

  return null;
}
