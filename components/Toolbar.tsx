import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { HiArrowDown, HiArrowUp, HiMoon, HiSearch, HiSun } from 'react-icons/hi';

const ToolbarBtn = (_props: Record<string, any>) => {
  let props = { ..._props };
  let className = 'tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-group ';
  if (typeof props.className === 'string') {
    className += props.className;
    delete props.className;
  }
  return (
    <button type="button" className={className} {...props}>
      <span className="tw-w-6 tw-h-6 tw-text-gray-700 dark:tw-text-gray-500 group-hover:tw-text-black dark:group-hover:tw-text-white">
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
  useScrollPosition(({ currPos }) => {
    setIsTop(-currPos.y < 50);
    setIsBottom(-currPos.y + window.innerHeight + 50 >= document.body.clientHeight);
  });
  useEffect(() => {
    setMounted(true);
    if (showSearchModal) {
      document.getElementById('search')?.addEventListener('focusout', (_e) => {
        setShowSearchModal(false);
        setSearchValue('');
      });
      document.getElementById('search')?.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'GoBack') {
          setShowSearchModal(false);
          setSearchValue('');
        }
      });
    }
  }, [showSearchModal]);
  useHotkeys('ctrl+d', (e) => {
    if (showSearchModal) return;
    e.preventDefault();
    window.scrollBy(0, 0.5 * window.innerHeight);
  });
  useHotkeys('ctrl+u', (e) => {
    if (showSearchModal) return;
    e.preventDefault();
    window.scrollBy(0, -0.5 * window.innerHeight);
  });
  useHotkeys('/', (e) => {
    if (showSearchModal) return;
    e.preventDefault();
    setShowSearchModal(true);
  });
  useHotkeys('h', (e) => {
    if (showSearchModal) return;
    e.preventDefault();
    window.window.scrollBy({
      top: 0,
      left: -20,
      behavior: 'smooth'
    });
  });
  useHotkeys('j', (e) => {
    if (showSearchModal) return;
    e.preventDefault();
    window.scrollBy({
      top: 20,
      left: 0,
      behavior: 'smooth'
    });
  });
  useHotkeys('k', (e) => {
    if (showSearchModal) return;
    e.preventDefault();
    window.scrollBy({
      top: -20,
      left: 0,
      behavior: 'smooth'
    });
  });
  useHotkeys('l', (e) => {
    if (showSearchModal) return;
    e.preventDefault();
    window.scrollBy({
      top: 0,
      left: 20,
      behavior: 'smooth'
    });
  });
  useHotkeys('g', (e) => {
    if (showSearchModal) return;
    e.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
  useHotkeys('shift+g', (e) => {
    if (showSearchModal) return;
    e.preventDefault();
    document.body.scrollTop = document.body.clientHeight; // For Safari
    document.documentElement.scrollTop = document.body.clientHeight; // For Chrome, Firefox, IE and Opera
  });
  useHotkeys('t', (e) => {
    if (showSearchModal) return;
    e.preventDefault();
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark');
  });

  return (
    <>
      <div
        className={cn(
          'tw-grid',
          isBottom ? 'tw-grid-flow-col md:tw-grid-flow-row' : 'tw-grid-flow-row',
          'tw-rounded-lg tw-backdrop-filter tw-shadow-md tw-backdrop-saturate-200 tw-backdrop-blur-lg tw-border-2 dark:tw-border-2 dark:tw-border-dark-border'
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
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
          }}
        >
          {mounted && resolvedTheme === 'dark' ? (
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
            document.body.scrollTop = document.body.clientHeight; // For Safari
            document.documentElement.scrollTop = document.body.clientHeight; // For Chrome, Firefox, IE and Opera
          }}
        >
          <HiArrowDown className="tw-w-full tw-h-full" />
        </ToolbarBtn>
      </div>
      {showSearchModal && (
        <div
          className="tw-fixed tw-left-0 tw-top-0 tw-w-screen tw-h-screen tw-bg-black tw-opacity-80 tw-cursor-pointer tw-flex tw-justify-center tw-items-center"
          id="search-bg"
        >
          <div className="tw-flex tw-justify-center tw-items-center tw-max-w-sm tw-h-10 tw-bg-white tw-opacity-100 tw-bg-opacity-100">
            <input
              aria-label="Search Articles"
              placeholder="아티클 제목을 입력해주세요."
              type="text"
              autoFocus
              id="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="tw-pl-4 tw-pr-32 tw-py-2 tw-bg-white tw-opacity-100 tw-bg-opacity-100 focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-h-full tw-border-2 tw-rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Toolbar;
