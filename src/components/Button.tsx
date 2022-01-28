import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export default function Button(
  props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
  const alteredProps = { ...props };
  delete alteredProps.className;
  return (
    <button
      {...alteredProps}
      className={`tw-flex tw-flex-shrink-0 tw-justify-center tw-items-center tw-px-4 tw-py-2 tw-text-base tw-font-semibold tw-rounded-md tw-border-2 hover:tw-text-primary ${
        props.className ?? ''
      }`}
    />
  );
}
