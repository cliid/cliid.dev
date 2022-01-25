import Button from '@components/Button';
import Link from '@components/Link';
import Template from '@components/templates/Template';

export default function NotFound() {
  return (
    <Template title="404">
      <div className="tw-flex tw-flex-col">
        <p className="tw-mb-8">페이지를 못 찾겠어요.. ㅜㅜ</p>
        <div className="tw-flex tw-justify-start">
          <Button>
            <Link href="/">홈으로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </Template>
  );
}
