import Container from '@components/Container';
import Guestbook from '@components/Guestbook';
import prisma from '@lib/prisma';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export default function GuestbookPage({
  fallbackData
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Guestbook – Jiwu Jang"
      description="Sign my digital guestbook and share some wisdom."
    >
      <h1 className="page-title tw-mb-4">Guestbook</h1>
      <p className="tw-text-gray-600 dark:tw-text-gray-400 tw-mb-4">
        Leave a comment below. It could be anything – appreciation, information, wisdom, or even
        humor. Surprise me!
      </p>
      <Guestbook fallbackData={fallbackData} />
    </Container>
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
