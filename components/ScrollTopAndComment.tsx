import { useEffect, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true);
      else setShow(false);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleScrollToComment = () => {
    document.getElementById('comment')!.scrollIntoView();
  };
  return (
    <div className="tw-fixed tw-flex-col tw-hidden tw-gap-3 tw-right-8 tw-bottom-8 md:tw-flex">
      <button
        aria-label="Scroll To Comment"
        type="button"
        onClick={handleScrollToComment}
        style={{ opacity: show ? 1 : 0 }}
        className="tw-p-2 tw-text-gray-500 tw-transition-all tw-bg-gray-200 tw-rounded-full dark:tw-text-gray-400 dark:tw-bg-gray-700 dark:hover:tw-bg-gray-600 hover:tw-bg-gray-300"
      >
        <svg className="tw-w-5 tw-h-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        aria-label="Scroll To Top"
        type="button"
        onClick={handleScrollTop}
        style={{ opacity: show ? 1 : 0 }}
        className="tw-p-2 tw-text-gray-500 tw-transition-all tw-bg-gray-200 tw-rounded-full dark:tw-text-gray-400 dark:tw-bg-gray-700 dark:hover:tw-bg-gray-600 hover:tw-bg-gray-300"
      >
        <svg className="tw-w-5 tw-h-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollTopAndComment;
