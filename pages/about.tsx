import Container from '@components/Container';
import ExternalLink from '@components/ExternalLink';
import Timeline from '@components/Timeline';

export default function About() {
  return (
    <Container title="About">
      <h1 className="page-title tw-mb-4">About Me</h1>
      <div className="tw-mb-8 tw-leading-6 tw-text-gray-600 dark:tw-text-gray-400 tw-space-y-4">
        <p>
          <span className="tw-font-bold">I'm a front-end developer.</span> I optimize code,
          sometimes from the algorithmic level, to compiler optimizations. You might find me
          refactoring the whole codebase. I personally prefer (and perform best with) TypeScript and
          C++.
        </p>
        <p>
          <span className="tw-font-bold">I'm a free/libre software activist.</span> I believe that
          source code is information that ought to be shared gracefully. There should be more
          companies like <ExternalLink href="https://www.redhat.com/en">Red Hat, Inc.</ExternalLink>
          , because it is ethical and essential for the user's freedoms.
        </p>
        <p>
          <span className="tw-font-bold">I'm a free market anarchist.</span> I believe in a free
          society where each individual has no coercion upon them and everything is voluntary. It's
          okay to form a local commune as long as it doesn't harm other people's freedoms.
        </p>
        <p>
          I had lived in Evanston, Illinois since I was very young, and now I'm living in Seoul,
          Korea. I usually spend my free time tinkering & making new things. I'm currently
          fascinated with graph algorithms, number theory, and segment trees (and fenwick trees, if
          you wish).
        </p>
      </div>
      <Timeline />
    </Container>
  );
}
