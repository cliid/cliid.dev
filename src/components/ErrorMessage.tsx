import React from 'react';

export default function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <p className="tw-flex tw-text-sm tw-font-bold tw-text-red-800 dark:tw-text-red-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="tw-w-4 tw-h-4 tw-mr-1"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      <span>{children}</span>
    </p>
  );
}
