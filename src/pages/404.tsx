import Button from '@components/Button';
import Link from '@components/Link';
import Template from '@components/templates/Template';

export default function NotFound() {
  return (
    <Template title="404 Not Found">
      <div>
        <p className="">This page isn’t a puzzle 😝</p>
        <Button>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </Template>
  );
}
