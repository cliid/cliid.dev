import { Giscus as InternalGiscus } from '@giscus/react';
import { useTheme } from 'next-themes';
import React from 'react';

const Giscus = () => {
  const { theme, resolvedTheme } = useTheme();
  const commentsTheme = theme === 'dark' || resolvedTheme === 'dark' ? 'transparent_dark' : 'light';

  return (
    <div className="tw-w-full tw-pt-6 tw-pb-6 tw-text-center tw-text-gray-700 dark:tw-text-gray-300">
      <InternalGiscus
        repo={process.env.NEXT_PUBLIC_GISCUS_REPO as '`${string}/${string}`'}
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || ''}
        category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        theme={commentsTheme}
      />
    </div>
  );
};

export default Giscus;
