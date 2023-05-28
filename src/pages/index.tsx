import Link from '@components/Link';
import Template from '@components/templates/Template';
import React from 'react';

export default function Home() {
  return (
    <Template title="Homepage of Jiwu Jang">
      <div className="tw-flex tw-flex-col">
        <p>
          Hi! I’m Jiwu Jang (aka{' '}
          <span style={{ fontFamily: 'Computer Modern Typewriter' }}>cliid</span>), and welcome to
          my personal website!
        </p>
        <p>
          I’m a student at <Link href="https://ohs.stanford.edu/">Stanford Online High School</Link>
          , studying mathematics. If you’re curious about what drew me into mathematics, I’ve
          written a <Link href="/blog/why-mathematics">blog post</Link> on the subject that you
          might find interesting.
        </p>
        <p>
          These days, I’m interested in algebraic number theory, combinatorics, type theory,
          projective geometry, and analytic number theory. Likewise, I love Olympiad mathematics and
          competitive programming: they challenge my mental abilities to the extreme. My personal
          favorites are{' '}
          <Link href="https://artofproblemsolving.com/wiki/index.php/2017_IMO_Problems/Problem_3">
            IMO 2017/3
          </Link>{' '}
          and <Link href="https://oj.uz/problem/view/IOI16_messy">IOI 2016/5</Link>.
        </p>
        <p>
          Aside from mathematics, I like computational linguistics, computer science, and
          programming. I’ve been an avid programmer since 11, and since then, I’ve created stuff
          like my own programming language, a virtual girlfriend (she can talk and play games!), and
          also contributed to various open-source projects, such as the{' '}
          <Link href="https://github.com/rehypejs/rehype">
            <em>rehype</em>
          </Link>{' '}
          ecosystem.
        </p>
        <p>
          I also have a few fun hobbies I enjoy pursuing in my free time: cardistry, choir, singing,
          and creating Pokémon and Super Mario characters with perler beads. If you haven’t seen
          what cardistry is, check out{' '}
          <Link href="https://www.youtube.com/watch?v=njstvj2M0WA">this video</Link>! It’s an
          amazing compilation of cardistry moves :D
        </p>
        <p>
          My daily driver is a{' '}
          <Link href="https://www.amazon.com/Tally-Ho-Circle-Playing-Cards/dp/B0009WE5AA">
            Tally-Ho circle back
          </Link>
          , and my favorite deck is Zach Mueller’s{' '}
          <Link href="https://www.kickstarter.com/projects/1185270770/black-fontaine-playing-cards">
            Black Fontaine
          </Link>
          : the touch is really smooth (linen finish!), and the cards are so flexible. By the way,
          I’m also a playing cards collector: during my trip to Europe for 80 days, I collected over
          30 different decks from more than 10 European countries.
        </p>
        <p>Thanks for visiting my website, and I hope you have an enjoyable experience!</p>
      </div>
    </Template>
  );
}
