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
          I’m a student at Stanford Online High School, studying mathematics. What brought me into
          mathematics? Well, check out <Link href="/blog/why-mathematics">this blogpost</Link> of
          mine :)
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
          amazing compilation of cardistry moves :D (Personally, I love Zach Mueller’s Black
          Fontaine deck. The touch is so smooth, and the cards are so flexible yet strong.)
        </p>
        <p>
          Thank you for visiting my website, and I hope you enjoy exploring the diverse facets of my
          interests and thoughts!
        </p>
      </div>
    </Template>
  );
}
