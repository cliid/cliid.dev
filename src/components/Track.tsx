import Link from './Link';

export default function Track(track: any) {
  return (
    <div className="tw-flex tw-flex-row tw-items-baseline tw-w-full tw-max-w-3xl tw-mt-8 tw-border-b">
      <p className="tw-text-sm tw-font-bold tw-text-gray-400 dark:tw-text-gray-600">
        {track.ranking}
      </p>
      <div className="tw-flex tw-flex-col tw-pl-3">
        <Link className="tw-truncate tw-w-60 sm:tw-w-96 md:tw-w-full" href={track.songUrl}>
          {track.title}
        </Link>
        <p
          className="tw-mb-4 tw-text-gray-500 tw-truncate tw-w-60 sm:tw-w-96 md:tw-w-full"
          color="gray.500"
        >
          {track.artist}
        </p>
      </div>
    </div>
  );
}
