// Twemoji.js
import Image from 'next/image';
import React, { memo } from 'react';

const Twemoji = ({ emoji }: { emoji: string }) => {
  const img = emoji.codePointAt(0)!.toString(16);

  return (
    <span className="emoji tw-relative">
      <Image src={`/static/images/twemoji/svg/${img}.svg`} layout="fill" alt={emoji} />
    </span>
  );
};

export default memo(Twemoji);
