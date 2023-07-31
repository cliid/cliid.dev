import Image from 'next/image';
import { Song } from 'typings';

import Link from './Link';

export default function Track(track: Song & { ranking: number }) {
  return (
    <div className="tw-flex tw-flex-row tw-items-center tw-w-full tw-max-w-3xl tw-border-b">
      <div className="tw-w-4 tw-ml-3 tw-mr-3 tw-text-sm tw-font-bold tw-text-gray-400 dark:tw-text-gray-600">
        {track.ranking}
      </div>
      <div className="tw-relative tw-w-12 tw-h-12 tw-my-2">
        <Image
          src={track.imageUrl}
          alt={track.title}
          fill={true}
          className="tw-object-contain tw-aspect-square"
        />
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center tw-pl-3">
        <Link className="tw-truncate tw-w-60 sm:tw-w-96 md:tw-w-full" href={track.songUrl}>
          {track.title}
        </Link>
        <div
          className="tw-text-gray-500 tw-truncate tw-w-60 sm:tw-w-96 md:tw-w-full"
          color="gray.500"
        >
          {track.artist}
        </div>
      </div>
    </div>
  );
}
