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
    <div className="tw-flex tw-items-end tw-flex-shrink-0 tw-w-auto tw-overflow-hidden">
      <span id="bar1" className="tw-w-1 tw-mr-[3px] tw-h-2 tw-bg-spotify-green tw-opacity-75" />
      <span id="bar2" className="tw-w-1 tw-mr-[3px] tw-h-1 tw-bg-spotify-green" />
      <span id="bar3" className="tw-w-1 tw-h-3 tw-bg-spotify-green tw-opacity-80" />
    </div>
  );
}

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <div className="tw-flex tw-items-center tw-h-full tw-max-w-full tw-w-max tw-gap-x-2">
      {data?.songUrl && <AnimatedBars />}
      <div className="tw-flex tw-max-w-full tw-truncate">
        {data?.songUrl ? (
          <Link className="tw-font-semibold tw-text-spotify-green" href={data.songUrl}>
            {data.title}
          </Link>
        ) : (
          <span className="tw-text-gray-800 dark:tw-text-gray-200">Not Playing</span>
        )}
        <span className="tw-block tw-mx-2 tw-text-gray-500 tw-select-none dark:tw-text-gray-300">
          {' – '}
        </span>
        <span className="tw-text-gray-500 tw-truncate dark:tw-text-gray-300 tw-max-w-max">
          {data?.artist ?? 'Spotify'}
        </span>
      </div>
    </div>
  );
}
