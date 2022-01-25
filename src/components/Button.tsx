export default function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="tw-flex tw-items-center tw-justify-center tw-flex-shrink-0 tw-px-4 tw-py-2 tw-text-base tw-font-semibold tw-border-2 tw-rounded-md hover:tw-text-primary"
    />
  );
}
