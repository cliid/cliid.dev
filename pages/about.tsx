import Container from '@components/Container';
import Timeline from '@components/Timeline';

export default function About() {
  return (
    <Container title="About – Jiwu Jang">
      <h1 className="page-title tw-mb-4">About Me</h1>
      <div className="tw-mb-8 tw-prose tw-leading-6 tw-text-gray-600 dark:tw-text-gray-400">
        <p>
          Hey, I’m Jiwu. I'm a developer, writer, investor, and the creator of&nbsp;
          <a href="https://seven.wiki" target="_blank" rel="noopener noreferrer">
            Sevenwiki.
          </a>
          &nbsp;I'm the co-founder of&nbsp;
          <a href="https://dazzle.works" target="_blank" rel="noopener noreferrer">
            Dazzle.
          </a>
          &nbsp;I personally prefer using TypeScript and/or C++. I also think Rust can be a good
          language to learn.
        </p>
        <p>
          I once lived in Evanston, Illinois, and now I moved to Jamsil, one of the major places in
          Seoul, Korea. I spend my free time listening to music, or designing pretty UIs. Yes,
          designing UIs, it's what I do in my free time. For music, I mostly listen to Nightcore Pop
          or Frank Sinatra's Jazz. It depends on my mood. I also like playing games such as League
          of Legends, and enjoying time with friends and my family. By the way, I can do card magic
          / cardistry too.
        </p>
      </div>
      <Timeline />
      <h3 className="tw-font-bold tw-text-2xl md:tw-text-4xl tw-tracking-tight tw-mb-4 tw-mt-8 tw-text-black dark:tw-text-white">
        My Travel Map
      </h3>
      <iframe
        height="400"
        loading="lazy"
        src="https://www.google.com/maps/d/embed?mid=1hRaSvquUyw5424PjryJYQZiRjyv8ORwe"
        title="Jiwu's Travel Map"
        width="100%"
      />
    </Container>
  );
}
