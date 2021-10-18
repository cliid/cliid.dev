import ErrorMessage from '@components/ErrorMessage';
import LoadingSpinner from '@components/LoadingSpinner';
import SuccessMessage from '@components/SuccessMessage';
import fetcher from '@lib/fetcher';
import { Form, FormState } from '@lib/types';
import { format } from 'date-fns';
import { signIn, useSession } from 'next-auth/react';
import { Key, useRef, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

function GuestbookEntry({ entry, user }: { entry: any; user: any }) {
  const { mutate } = useSWRConfig();
  const deleteEntry = async (e: { preventDefault: () => void }): Promise<void> => {
    e.preventDefault();

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE'
    });

    mutate('/api/guestbook');
  };

  return (
    <div className="tw-flex tw-flex-col tw-space-y-2">
      <div className="tw-prose dark:tw-prose-dark tw-w-full">{entry.body}</div>
      <div className="tw-flex tw-items-center tw-space-x-3">
        <p className="tw-text-sm tw-text-gray-500">{entry.created_by}</p>
        <span className=" tw-text-gray-200 dark:tw-text-gray-800">/</span>
        <p className="tw-text-sm tw-text-gray-400 dark:tw-text-gray-600">
          {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
        </p>
        {user && entry.created_by === user.name && (
          <>
            <span className="tw-text-gray-200 dark:tw-text-gray-800">/</span>
            <button
              className="tw-text-sm tw-text-red-600 dark:tw-text-red-400"
              onClick={deleteEntry}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Guestbook({ fallbackData }: { fallbackData: any }) {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef<any>();
  const { data: entries } = useSWR('/api/guestbook', fetcher, {
    fallbackData
  });

  const leaveEntry = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    inputEl.current.value = '';
    mutate('/api/guestbook');
    setForm({
      state: Form.Success,
      message: `Hooray! Thanks for signing my Guestbook.`
    });
  };

  return (
    <>
      <div className="tw-border tw-border-gray-200 tw-rounded tw-p-6 tw-my-4 tw-w-full dark:tw-border-gray-800 tw-bg-gray-100 dark:tw-bg-gray-800">
        <h5 className="tw-text-lg md:tw-text-xl tw-font-bold tw-text-gray-900 dark:tw-text-gray-100">
          Sign the Guestbook
        </h5>
        <p className="tw-my-1 tw-text-gray-800 dark:tw-text-gray-200">
          Share a message for a future visitor of my site.
        </p>
        {!session && (
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            href="/api/auth/signin/github"
            className="tw-flex tw-items-center tw-justify-center tw-my-4 tw-font-bold tw-h-8 tw-bg-gray-200 dark:tw-bg-gray-700 tw-text-gray-900 dark:tw-text-gray-100 tw-rounded tw-w-28"
            onClick={(e) => {
              e.preventDefault();
              signIn('github');
            }}
          >
            Login
          </a>
        )}
        {session?.user && (
          <form className="tw-relative tw-my-4" onSubmit={leaveEntry}>
            <input
              ref={inputEl}
              aria-label="Your message"
              placeholder="Your message..."
              required
              className="tw-pl-4 tw-pr-32 tw-py-2 tw-mt-1 focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-rounded-md tw-bg-white dark:tw-bg-black tw-text-gray-900 dark:tw-text-gray-100"
            />
            <button
              className="tw-flex tw-items-center tw-justify-center tw-absolute tw-right-1 tw-top-1 tw-px-4 tw-py-1 tw-font-medium tw-h-8 tw-bg-gray-100 dark:tw-bg-gray-700 tw-text-gray-900 dark:tw-text-gray-100 tw-rounded tw-w-28"
              type="submit"
            >
              {form.state === Form.Loading ? <LoadingSpinner /> : 'Sign'}
            </button>
          </form>
        )}
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="tw-text-sm tw-text-gray-800 dark:tw-text-gray-200">
            Your information is only used to display your name and reply by email.
          </p>
        )}
      </div>
      <div className="tw-mt-4 tw-space-y-8">
        {entries?.map((entry: { id: Key }) => (
          <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
        ))}
      </div>
    </>
  );
}
