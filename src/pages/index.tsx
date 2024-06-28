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
          I’m interested in harmonic analysis, ergodic theory, analytic number theory, and additive
          combinatorics. I'm currently reading Tao-Vu and Stein-Shakarchi.
        </p>
        <p>
          I’ve been researching vertex functions of Nakajima quiver varieties under the supervision
          of{' '}
          <Link href="https://math.mit.edu/directory/profile.html?pid=2613">
            Dr. Hunter Dinkins
          </Link>{' '}
          through MIT PRIMES-USA.
        </p>
        <p>
          Besides, I love Olympiad math. Some of my favorite problems are{' '}
          <Link href="https://artofproblemsolving.com/community/c6h1332912p7195466">
            Schweitzer 2016/1
          </Link>
          ,{' '}
          <Link href="https://artofproblemsolving.com/community/c7h566367p3315672">
            Putnam 2013 A6
          </Link>
          , and{' '}
          <Link href="https://artofproblemsolving.com/community/c6h2946618p26379812">
            USEMO 2022/5
          </Link>
          .
        </p>
        <p>
          Aside from mathematics, I code. I’ve been an avid programmer since 11, and since then,
          I’ve created stuff like my own programming language and compiler, a virtual girlfriend
          (she can talk and play games!), and contributed to open-source projects such as the{' '}
          <Link href="https://github.com/rehypejs/rehype">
            <em>rehype</em>
          </Link>{' '}
          ecosystem. You can check out my <Link href="https://github.com/cliid">GitHub</Link>, if
          you're interested.
        </p>
        <p>
          I also have a few fun hobbies I enjoy pursuing in my free time: cardistry, choir, singing,
          and creating Pokémon and Super Mario characters with perler beads. If you don’t know what
          cardistry is, check out{' '}
          <Link href="https://www.youtube.com/watch?v=I0KSaqiv5C0">this video</Link>! (it's truly an
          amazing compilation of cardistry moves)
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
          : the touch is really smooth (linen finish!), and the cards are so flexible. I’m also a
          playing cards collector: during my trip to Europe for 80 days, I collected over 30
          different decks from more than 10 European countries.
        </p>
        <p>Anyways, thanks for visiting my website, and I hope you have fun!</p>
      </div>
    </Template>
  );
}
