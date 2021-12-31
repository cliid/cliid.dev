import SpeedlifyInfo from '@components/SpeedlifyInfo';
import SpotifyInfo from '@components/SpotifyInfo';

export default function Footer() {
  return (
    <footer className="tw-flex tw-flex-col tw-justify-center tw-items-start tw-max-w-2xl tw-mx-auto tw-w-full tw-mb-8 tw-space-y-4">
      <hr className="default-colors tw-w-full border-1 tw-mb-8" />
      <SpotifyInfo />
      <SpeedlifyInfo speedlifyUrl="https://speedlify.cliid.dev" hash="551230c9" />
    </footer>
  );
}
