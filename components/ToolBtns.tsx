import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import cn from 'classnames';
import { useState } from 'react';

const ToolBtns = () => {
  const [isTop, setIsTop] = useState(true);
  useScrollPosition(({ currPos }) => {
    setIsTop(-currPos.y < 10);
  });
  return (
    <div className="tw-fixed tw-flex tw-flex-row tw-right-4 tw-bottom-4 tw-space-x-4 tw-rounded-xl tw-bg-bg dark:tw-bg-dark-bg">
      <button
        onClick={() => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }}
        className={cn(
          'tw-w-10 tw-h-10 tw-rounded-md tw-flex tw-items-center tw-justify-center tw-transition-all tw-backdrop-filter tw-shadow-md tw-backdrop-saturate-200 tw-backdrop-blur-lg dark:tw-border-2 dark:tw-border-dark-border',
          isTop && 'tw-hidden'
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="tw-w-6 tw-h-6 tw-text-gray-700 dark:tw-text-gray-500 hover:tw-text-black dark:hover:tw-text-white tw-transition-all"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ToolBtns;
