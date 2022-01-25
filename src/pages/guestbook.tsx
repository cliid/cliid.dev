import Guestbook from '@components/Guestbook';
import Template from '@components/templates/Template';
import prisma from '@lib/prisma';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export default function GuestbookPage({
  fallbackData
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Template title="방명록" description="온라인 방명록.">
      <p className="tw-mb-4">아래에 댓글을 남겨주세요 ;)</p>
      <Guestbook fallbackData={fallbackData} />
    </Template>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc'
    }
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString()
  }));

  return {
    props: {
      fallbackData
    },
    revalidate: 60
  };
}
