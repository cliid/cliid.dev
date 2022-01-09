import Container from '@components/Container';
import Link from '@components/Link';

export default function Offline() {
  return (
    <Container title="오프라인">
      <p className="tw-mb-8">
        삐빅. 삐비빅. 오프라인이신 것 같네요. 인터넷에 연결하고 다시 한번 아래의 버튼을 눌러
        접속해주시겠어요?
      </p>
      <Link href="/">
        <span className="tw-p-2 tw-w-64 tw-font-bold tw-bg-gray-200 dark:tw-bg-gray-800 tw-rounded-md">
          재접속하기
        </span>
      </Link>
    </Container>
  );
}
