import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { HiArrowDown, HiArrowUp, HiMoon, HiSun } from 'react-icons/hi';
const UseAnimations = dynamic(() => import('react-useanimations'), {
  loading: () => <img alt="" src="/static/images/menu2-fallback.svg" />,
  ssr: false
});
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import menu2 from 'react-useanimations/lib/menu2';

const ToolbarBtn = (_props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  let props = { ..._props };
  let className =
    'tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 hover:tw-text-black dark:hover:tw-text-white';
  if (typeof props.className === 'string') {
    className += ' ';
    className += props.className;
    delete props.className;
  }
  return (
    <button type="button" className={className} {...props}>
      {props.children}
    </button>
  );
};

const Toolbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isTop, setIsTop] = useState(true);
  const [showFull, setShowFull] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const offset = 10;

  useScrollPosition(({ currPos }) => {
    setIsTop(-currPos.y < offset);
    setIsBottom(
      -currPos.y + window.outerHeight + offset >= document.getElementById('__next')!.scrollHeight
    );
  });

  useEffect(() => {
    setMounted(true);
    setIsTop(0 < offset);
    setIsBottom(window.outerHeight + offset >= document.getElementById('__next')!.scrollHeight);
  }, []);

  return (
    <div className="tw-flex tw-flex-col tw-gap-y-2 sm:tw-flex-col-reverse">
      {showFull && (
        <div className="tw-box-content tw-grid tw-grid-flow-row tw-border-2 tw-rounded-lg tw-shadow-md tw-gap-y-1 tw-backdrop-filter tw-backdrop-blur-lg tw-backdrop-saturate-200 tw-bg-bg dark:tw-bg-dark-bg">
          <ToolbarBtn
            aria-label="Toggle Dark Mode"
            onClick={() => {
              setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark');
            }}
          >
            {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
              <HiSun className="tw-w-6 tw-h-6" />
            ) : (
              <HiMoon className="tw-w-6 tw-h-6" />
            )}
          </ToolbarBtn>
          <ToolbarBtn
            aria-label="Scroll To Top"
            className={isTop ? 'tw-hidden' : ''}
            onClick={() => {
              document.body.scrollTop = 0; // For Safari
              document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            }}
          >
            <HiArrowUp className="tw-w-6 tw-h-6" />
          </ToolbarBtn>
          <ToolbarBtn
            aria-label="Scroll To Bottom"
            className={isBottom ? 'tw-hidden' : ''}
            onClick={() => {
              document.body.scrollTop = document.getElementById('__next')!.scrollHeight; // For Safari
              document.documentElement.scrollTop = document.getElementById('__next')!.scrollHeight; // For Chrome, Firefox, IE and Opera
            }}
          >
            <HiArrowDown className="tw-w-6 tw-h-6" />
          </ToolbarBtn>
        </div>
      )}
      <div className="tw-grid tw-grid-flow-row">
        <ToolbarBtn
          aria-label="Show Full Toolbar"
          onClick={() => {
            setShowFull(!showFull);
          }}
          className="tw-box-content tw-border-2 tw-rounded-lg tw-shadow-md tw-backdrop-filter tw-backdrop-blur-lg tw-backdrop-saturate-200 tw-bg-bg dark:tw-bg-dark-bg"
        >
          <UseAnimations
            animation={menu2}
            reverse={showFull}
            speed={10}
            size={32}
            className="tw-stroke-text dark:tw-stroke-dark-text tw-fill-text dark:tw-fill-dark-text hover:tw-stroke-black dark:hover:tw-stroke-white hover:tw-fill-black dark:hover:tw-fill-white"
            strokeColor="inherit"
            fillColor="inherit"
          />
        </ToolbarBtn>
      </div>
    </div>
  );
};

export default Toolbar;
