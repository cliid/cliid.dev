import Button from '@components/Button';
import Link from '@components/Link';
import Template from '@components/templates/Template';

export default function Offline() {
  return (
    <Template title="오프라인">
      <div>
        <p className="tw-mb-8">
          삐빅. 삐비빅. 오프라인이신 것 같네요. 인터넷에 연결하고 다시 한번 아래의 버튼을 눌러
          접속해주시겠어요?
        </p>
        <div className="tw-flex tw-flex-row tw-justify-start">
          <Button>
            <Link href="/">재접속하기</Link>
          </Button>
        </div>
      </div>
    </Template>
  );
}
