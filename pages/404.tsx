import Container from '@components/Container';
import Link from '@components/Link';
export default function NotFound() {
  return (
    <Container title="404">
      <p className="tw-mb-8">페이지를 못 찾겠어요.. ㅜㅜ</p>

      <Link href="/">
        <span className="tw-p-2 tw-w-64 tw-font-bold tw-bg-gray-200 dark:tw-bg-gray-800 tw-rounded-md">
          홈으로 돌아가기
        </span>
      </Link>
    </Container>
  );
}
