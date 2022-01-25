import LighthouseScore from '@components/LighthouseScore';
import SpotifyInfo from '@components/SpotifyInfo';
import { useSettings } from '@hooks/use-settings';

import Link from './Link';

export default function Footer() {
  const { maxWidth } = useSettings();

  return (
    <div
      className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-8 tw-mx-auto tw-break-words tw-gap-y-4"
      style={{
        maxWidth
      }}
    >
      <SpotifyInfo />

      <div>
        Made with 🔥 by{' '}
        <Link className="tw-font-semibold" href="https://github.com/cliid">
          @cliid.
        </Link>
      </div>
      <LighthouseScore speedlifyUrl="https://speedlify.cliid.dev" hash="551230c9" />
    </div>
  );
}
