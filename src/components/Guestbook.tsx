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
      <div className="tw-px-4 tw-py-2 tw-w-full tw-rounded-2xl tw-border-2">{entry.body}</div>
      <div className="tw-flex tw-justify-end tw-items-center">
        <span className="tw-text-sm tw-text-gray-400 dark:tw-text-gray-600">
          {format(new Date(entry.updated_at), 'yyyy년 M월 d일, h시 m분')}
        </span>
        <span className="tw-text-sm tw-text-gray-400 dark:tw-text-gray-600">&nbsp;/&nbsp;</span>
        <span className="tw-text-sm tw-font-semibold tw-text-gray-500">{entry.created_by}</span>
      </div>
      <div className="tw-flex tw-justify-end">
        {user && entry.created_by === user.name && (
          <button className="tw-text-sm tw-text-red-600 dark:tw-text-red-400" onClick={deleteEntry}>
            삭제하기
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
      message: '방명록을 작성해주셔서 감사합니다.'
    });
  };

  return (
    <>
      <div className="tw-p-6 tw-my-4 tw-w-full tw-rounded tw-border">
        <h5 className="tw-text-lg tw-font-bold tw-text-gray-900 md:tw-text-xl dark:tw-text-gray-100">
          방명록 작성하기
        </h5>
        <p className="tw-my-1 tw-text-gray-800 dark:tw-text-gray-200">
          이 웹사이트의 미래 방문객에게 하고싶은 말을 전해주세요!
        </p>
        {!session && (
          <Button
            className="tw-my-4 tw-font-semibold"
            onClick={() => {
              signIn('github');
            }}
          >
            로그인하기
          </Button>
        )}
        {session?.user && (
          <form
            className="tw-flex tw-flex-row tw-gap-x-2 tw-items-center tw-my-4"
            onSubmit={leaveEntry}
          >
            <input
              ref={inputEl}
              aria-label="메시지를 남겨주세요."
              placeholder="메시지를 남겨주세요."
              required
              className="tw-py-2 tw-pr-32 tw-pl-4 tw-w-full tw-rounded-md tw-border-2"
            />
            <Button className="tw-font-semibold" type="submit">
              {form.state === Form.Loading ? <LoadingSpinner /> : '작성하기'}
            </Button>
          </form>
        )}
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="tw-text-sm tw-font-semibold tw-tracking-tight">
            개인정보는 오직 이름과 작성한 방명록의 이메일을 띄우기 위한 용도로만 사용됩니다.
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
