import ErrorMessage from '@components/ErrorMessage';
import LoadingSpinner from '@components/LoadingSpinner';
import SuccessMessage from '@components/SuccessMessage';
import fetcher from '@lib/fetcher';
import { format } from 'date-fns';
import { signIn, useSession } from 'next-auth/react';
import { Key, useRef, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { Form, FormState } from 'typings';

import Button from './Button';

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
    <div className="tw-flex tw-flex-col tw-gap-y-2">
      <div className="tw-w-full tw-px-4 tw-py-2 tw-border-2 tw-rounded-2xl">{entry.body}</div>
      <div className="tw-flex tw-items-center tw-justify-end">
        <span className="tw-text-sm tw-text-gray-400 dark:tw-text-gray-600">
          {format(new Date(entry.updated_at), 'LLLL do, yyyy, h:mm')}
        </span>
        <span className="tw-text-sm tw-text-gray-400 dark:tw-text-gray-600">&nbsp;/&nbsp;</span>
        <span className="tw-text-sm tw-font-semibold tw-text-gray-500">{entry.created_by}</span>
      </div>
      <div className="tw-flex tw-justify-end">
        {user && entry.created_by === user.name && (
          <button className="tw-text-sm tw-text-red-600 dark:tw-text-red-400" onClick={deleteEntry}>
            Delete
          </button>
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
      message: 'Thank you!'
    });
  };

  return (
    <>
      <div className="tw-w-full tw-p-6 tw-my-4 tw-border tw-rounded">
        <p className="tw-my-1 tw-text-gray-800 dark:tw-text-gray-200">
          Please leave any words you want to say to future visitors :)
        </p>
        {!session && (
          <Button
            className="tw-my-3 tw-font-extrabold"
            onClick={() => {
              signIn('github');
            }}
          >
            Sign in
          </Button>
        )}
        {session?.user && (
          <form
            className="tw-flex tw-flex-row tw-items-center tw-my-4 tw-gap-x-2"
            onSubmit={leaveEntry}
          >
            <input
              ref={inputEl}
              aria-label="Please leave a message below."
              placeholder="Please leave a message below."
              required
              className="tw-w-full tw-px-4 tw-py-2 tw-border-2 tw-rounded-md tw-h-11"
            />
            <Button className="tw-font-extrabold" type="submit">
              {form.state === Form.Loading ? <LoadingSpinner /> : 'Submit'}
            </Button>
          </form>
        )}
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <small>
            Your personal information is used for the sole purpose of displaying your name and
            e-mail on the guestbook.
          </small>
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
