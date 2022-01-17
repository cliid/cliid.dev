import { useState } from 'react';

export default function SearchModal() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <div
        className="tw-fixed tw-left-0 tw-top-0 tw-w-screen tw-h-screen tw-bg-black tw-opacity-80 tw-cursor-pointer tw-flex tw-justify-center tw-items-center"
        id="search-bg"
      >
        <div className="tw-flex tw-justify-center tw-items-center tw-max-w-sm tw-h-10 tw-bg-white tw-opacity-100 tw-bg-opacity-100">
          <input
            aria-label="Search Articles"
            placeholder="제목을 입력해주세요."
            type="text"
            autoFocus
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="tw-pl-4 tw-pr-32 tw-py-2 tw-bg-white tw-opacity-100 tw-bg-opacity-100 focus:tw-ring-primary-500 focus:tw-border-primary-500 tw-block tw-w-full tw-h-full tw-border-2 tw-rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
