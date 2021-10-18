import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="tw-w-9 tw-h-9 tw-bg-gray-200 tw-rounded-lg dark:tw-bg-gray-600 tw-flex tw-items-center tw-justify-center hover:tw-ring-2 tw-ring-gray-300 tw-transition-all"
      onClick={() =>
        setTheme(theme === 'tw-dark' || resolvedTheme === 'tw-dark' ? 'tw-light' : 'tw-dark')
      }
    >
      <div className="tw-w-4 tw-h-4">
        {mounted && (theme === 'tw-dark' || resolvedTheme === 'tw-dark') ? (
          <IoMoonOutline size="100%" />
        ) : (
          <IoSunnyOutline size="100%" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitch;
