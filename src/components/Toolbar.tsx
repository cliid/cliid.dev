import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiArrowDown, HiArrowUp, HiMoon, HiSearch, HiSun } from 'react-icons/hi';

const ToolbarBtn = (_props: Record<string, any>) => {
  let props = { ..._props };
  let className = 'tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-group';
  if (typeof props.className === 'string') {
    className += ' ';
    className += props.className;
    delete props.className;
  }
  return (
    <button type="button" className={className} {...props}>
      <span className="tw-w-6 tw-h-6 group-hover:tw-text-black dark:group-hover:tw-text-white">
        {props.children}
      </span>
    </button>
  );
};

const Toolbar = () => {
  const [mounted, setMounted] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);
  const offset = 50;
  useScrollPosition(({ currPos }) => {
    setIsTop(-currPos.y < offset);
    setIsBottom(
      -currPos.y + window.outerHeight + offset >= document.getElementById('__next')!.scrollHeight
    );
  });
  useEffect(() => {
    setMounted(true);
  });

  return (
    <>
      <div
        className={cn(
          'tw-grid tw-grid-flow-row',
          'tw-rounded-lg tw-backdrop-filter tw-shadow-md tw-backdrop-saturate-200 tw-backdrop-blur-lg tw-border-2 dark:tw-border-2'
        )}
      >
        <ToolbarBtn
          aria-label="Search Articles"
          onClick={() => {
            setShowSearchModal(!showSearchModal);
            document.getElementById('search')?.focus();
          }}
        >
          <HiSearch className="tw-w-full tw-h-full" />
        </ToolbarBtn>
        <ToolbarBtn
          aria-label="Toggle Dark Mode"
          onClick={() => {
            setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark');
          }}
        >
          {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
            <HiSun className="tw-w-full tw-h-full" />
          ) : (
            <HiMoon className="tw-w-full tw-h-full" />
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
          <HiArrowUp className="tw-w-full tw-h-full" />
        </ToolbarBtn>
        <ToolbarBtn
          aria-label="Scroll To Bottom"
          className={isBottom ? 'tw-hidden' : ''}
          onClick={() => {
            document.body.scrollTop = document.getElementById('__next')!.scrollHeight; // For Safari
            document.documentElement.scrollTop = document.getElementById('__next')!.scrollHeight; // For Chrome, Firefox, IE and Opera
          }}
        >
          <HiArrowDown className="tw-w-full tw-h-full" />
        </ToolbarBtn>
      </div>
    </>
  );
};

export default Toolbar;
