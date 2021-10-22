import { ChevronDoubleUpSolid } from '@graywolfai/react-heroicons';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import cn from 'classnames';
import { useState } from 'react';

const ToolBtns = () => {
  const [isTop, setIsTop] = useState(true);
  useScrollPosition(({ currPos }) => {
    setIsTop(!currPos.y);
  });
  return (
    <div className="tw-fixed tw-flex tw-flex-row tw-right-4 tw-bottom-4 tw-space-x-4 tw-bg-transparent dark:tw-bg-transparent">
      <button
        onClick={() => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }}
        className={cn(
          'tw-w-12 tw-h-12 tw-rounded-md tw-flex tw-items-center tw-justify-center tw-transition-all tw-shadow-lg',
          isTop ? 'tw-invisible' : 'tw-visible'
        )}
      >
        <ChevronDoubleUpSolid className="tw-w-8 tw-h-8 tw-text-text dark:tw-text-dark-text hover:tw-opacity-60 dark:hover:tw-opacity-60" />
      </button>
    </div>
  );
};

export default ToolBtns;
