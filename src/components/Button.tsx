import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export default function Button(
  props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
  const alteredProps = { ...props };
  delete alteredProps.className;
  return (
    <button
      {...alteredProps}
      className={`tw-flex tw-max-w-fit tw-justify-center tw-items-center tw-px-3 tw-py-1 tw-h-11 tw-text-base tw-rounded-md tw-border-2 tw-text-opacity-50 hover:tw-text-opacity-100 ${
        props.className ?? ''
      }`}
    />
  );
}
