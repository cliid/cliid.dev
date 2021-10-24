import fetcher from '@lib/fetcher';
import { NowPlayingSong } from '@lib/types';
import { animate } from 'motion';
import Image from 'next/image';
import { useEffect } from 'react';
import useSWR from 'swr';

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
    <div className="tw-w-auto tw-flex tw-items-end tw-overflow-hidden tw-flex-shrink-0">
      <span id="bar1" className="tw-w-1 tw-mr-[3px] tw-h-2 tw-bg-spotify-green tw-opacity-75" />
      <span id="bar2" className="tw-w-1 tw-mr-[3px] tw-h-1 tw-bg-spotify-green" />
      <span id="bar3" className="tw-w-1 tw-h-3 tw-bg-spotify-green tw-opacity-80" />
    </div>
  );
}

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <div className="tw-max-w-full tw-h-full tw-w-max tw-flex tw-items-center tw-space-x-2">
      <div className="tw-w-6 tw-h-6 tw-relative tw-flex-shrink-0">
        <Image src="/static/images/spotify-logo.svg" alt="" layout="fill" />
      </div>
      {data?.songUrl && <AnimatedBars />}
      <div className="tw-flex tw-max-w-full tw-truncate">
        {data?.songUrl ? (
          <a
            className="tw-text-gray-800 dark:tw-text-gray-200 tw-font-semibold hover:tw-text-spotify-green dark:hover:tw-text-spotify-green"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        ) : (
          <p className="tw-text-gray-800 dark:tw-text-gray-200">Not Playing</p>
        )}
        <span className="tw-mx-2 tw-text-gray-500 dark:tw-text-gray-300 tw-block">{' – '}</span>
        <p className="tw-text-gray-500 dark:tw-text-gray-300 tw-max-w-max tw-truncate">
          {data?.artist ?? 'Spotify'}
        </p>
      </div>
    </div>
  );
}
