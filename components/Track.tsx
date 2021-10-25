export default function Track(track: any) {
  return (
    <div className="tw-flex tw-flex-row tw-items-baseline tw-border-b tw-border-border dark:tw-border-dark-border tw-max-w-3xl tw-w-full tw-mt-8">
      <p className="tw-text-sm tw-font-bold tw-text-gray-400 dark:tw-text-gray-600">
        {track.ranking}
      </p>
      <div className="tw-flex tw-flex-col tw-pl-3">
        <a
          className="tw-font-semibold tw-truncate tw-w-60 sm:tw-w-96 md:tw-w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p
          className="tw-text-gray-500 tw-mb-4 tw-truncate tw-w-60 sm:tw-w-96 md:tw-w-full"
          color="gray.500"
        >
          {track.artist}
        </p>
      </div>
    </div>
  );
}
