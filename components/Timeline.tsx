import React, { ReactNode, useState } from 'react';

const Divider = () => {
  return <div className="tw-border tw-w-full tw-my-8" />;
};

const Year = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="tw-text-lg md:tw-text-xl tw-font-bold tw-mb-4 tw-tracking-tight tw-text-gray-900 dark:tw-text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ children, title }: { children?: ReactNode; title: string }) => {
  return (
    <li className="tw-mb-4 tw-ml-2">
      <div className="tw-flex tw-items-center tw-mb-2">
        <span className="tw-sr-only">Check</span>
        <svg className="tw-h-4 tw-w-4 tw-mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="tw-font-medium tw-text-gray-900 dark:tw-text-gray-100">{title}</p>
      </div>
      <p className="tw-text-gray-700 dark:tw-text-gray-400 tw-ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2019</Year>
    <ul>
      <Step title="Made a virtual girlfriend 🔥">
        I was lonely, so I made a virtual girlfriend with my colleagues at HYGEC. She can talk and
        do some games with you. Oh, and one of them founded Dazzle with me. It was a great
        opportunity to meet wonderful programmers.
      </Step>
    </ul>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Started at Hanyang University Gifted Education Center (HYGEC)">
        It was my first interview, as well as my first standardized exam. Because it was my first
        test, it made me feel so frightening. I can still remember that feeling. But well, luckily I
        got accepted. Anyway, my colleagues were gold-medalists of an Informatics Olympiad, so I
        knew it was going to be a real challenge.
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Travelled Europe for 80 days 🗺️">
        I remember going to Yport, France, setting up a campsite and eating two pain au chocolats
        with my family. An unforgettable experience.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Wrote my first line of code in C">
        Yeah, I wrote my first line of code, in C. If it wasn't C, I would neither have loved
        TypeScript nor C++. Anyway, hooray!
      </Step>
    </ul>
    <Divider />
    <Year>2010</Year>
    <ul>
      <Step title="Destroyed two laptops with my bare hand">
        I put a pen on the hinge of my mom's laptop and smacked it. What happened? Of course, the
        monitor broke, completely. Why did I do that? I don't know either.
      </Step>
    </ul>
    <Divider />
    <Year>2006</Year>
    <ul>
      <Step title="Born 👶🏼🍼">
        My mom fainted when she had me. That day, was September 27, which was also Google's
        birthday. Is it a coincidence that I do programming?
      </Step>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="tw-font-bold tw-text-2xl md:tw-text-4xl tw-tracking-tight tw-mb-4 tw-mt-8 tw-text-black dark:tw-text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Founded Dazzle 🚀">
          I've founded a company called Dazzle with&nbsp;
          <a href="https://github.com/krrrr0">
            <strong className="tw-text-primary-500">@krrrr0</strong>
          </a>
          &nbsp;and&nbsp;
          <a href="https://github.com/shi3do">
            <strong className="tw-text-primary-500">@shi3do</strong>
          </a>
          ,&nbsp;and we're currently developing a tech-focused wiki called&nbsp;
          <a href="https://seven.wiki">Sevenwiki</a> for Koreans.
        </Step>
        <Step title="Graduated from HYGEC 🎓">
          Finally got my graduation diploma from an advanced gifted education program hosted by
          Hanyang University, located in South Korea.
        </Step>
        <Step title="Made this website 🌐">
          Started developing this website for various usages.
        </Step>
        <Step title="Started investing 📈">
          After saving $10k, I started investing in stocks and real estate.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Started an advanced class in HYGEC ✨">
          I passed the test to get into an advanced class. I learned machine learning, cryptography,
          advanced algorithms and data structures from there.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="tw-flex tw-items-center tw-text-sm tw-my-4 tw-mx-auto tw-px-4 tw-py-2 tw-rounded-md tw-font-medium tw-text-gray-900 dark:tw-text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="tw-h-4 tw-w-4 tw-ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </>
  );
}
