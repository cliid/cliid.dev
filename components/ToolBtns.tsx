import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import cn from 'classnames';
import { useState } from 'react';
import { HiChevronDoubleUp } from 'react-icons/hi';

const ToolBtns = () => {
  const [isTop, setIsTop] = useState(true);
  useScrollPosition(({ currPos }) => {
    setIsTop(!currPos.y);
  });
  return (
    <div className="tw-fixed tw-flex tw-flex-row tw-right-4 tw-bottom-4 tw-space-x-4 tw-rounded-xl">
      <button
        onClick={() => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }}
        className={cn(
          'tw-w-12 tw-h-12 tw-rounded-md tw-flex tw-items-center tw-justify-center tw-transition-all tw-backdrop-filter tw-shadow-md tw-backdrop-saturate-200 tw-backdrop-blur-lg dark:tw-border-2 dark:tw-border-dark-border',
          isTop && 'tw-hidden'
        )}
      >
        <HiChevronDoubleUp className="tw-w-8 tw-h-8 hover:tw-opacity-70 dark:hover:tw-opacity-70" />
      </button>
    </div>
  );
};

export default ToolBtns;
