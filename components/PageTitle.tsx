import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="tw-font-bold tw-text-3xl md:tw-text-5xl tw-tracking-tight tw-mb-4 tw-text-black dark:tw-text-white">
      {children}
    </h1>
  );
}
