import React from 'react';

const Underline = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="tw-flex tw-flex-col tw-w-max">
      <span className="tw-z-10">{children}</span>
      <div
        className="tw-bg-primary-500 tw-inline-block tw-h-[.4rem] tw-w-full tw-mt-[-.4rem]"
        style={{ transform: 'skewX(-20deg)' }}
      />
    </div>
  );
};

export default Underline;
