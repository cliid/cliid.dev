import Button from '@components/Button';
import Template from '@components/templates/Template';
import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();
  return (
    <Template title="404 Not Found">
      <div>
        <p className="">This page isn’t a puzzle 😝</p>
        <Button className="tw-font-extrabold" onClick={() => router.push('/')}>
          Back to home
        </Button>
      </div>
    </Template>
  );
}
