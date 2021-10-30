import Container from '@components/Container';
import Timeline from '@components/Timeline';

export default function About() {
  return (
    <Container title="About – Jiwu Jang">
      <h1 className="page-title tw-mb-4">About Me</h1>
      <div className="tw-mb-8 tw-leading-6 tw-text-gray-600 dark:tw-text-gray-400 tw-space-y-4">
        <p>
          Hey, I’m Jiwu. I'm a developer, writer, investor, and the creator of&nbsp;
          <a href="https://seven.wiki" target="_blank" rel="noopener noreferrer">
            Sevenwiki.
          </a>
          &nbsp;I'm the co-founder of&nbsp;
          <a href="https://dazzle.works" target="_blank" rel="noopener noreferrer">
            @dazzleofficial
          </a>
          . I often think how to serve minimal, optimized code yet to provide rich user experience
          to end users. I personally prefer using TypeScript and/or C++. I also think Rust can be a
          good language to learn.
        </p>
        <p>
          I once lived in Evanston, Illinois, and now I moved to Jamsil, one of the major places in
          Seoul, Korea. I spend my free time listening to music, or designing pretty UIs.&nbsp;
          <em>Yes, designing UIs, it's what I do in my free time.</em> For music, I mostly listen to
          Nightcore Pop or Frank Sinatra's Jazz. It depends on my mood. I also like playing games
          such as League of Legends, and enjoying time with friends and my family. By the way, I can
          do card magic / cardistry too.
        </p>
      </div>
      <Timeline />
    </Container>
  );
}
