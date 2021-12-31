import React, { ReactNode, useState } from 'react';

import ExternalLink from './ExternalLink';

const Divider = () => {
  return <div className="default-colors tw-border tw-w-full tw-my-8" />;
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
        <p className="tw-font-semibold tw-text-gray-900 dark:tw-text-gray-100">{title}</p>
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
        I was lonely, so I made a virtual girlfriend called ASKY. By the way, She can talk and do
        some games with you.
      </Step>
    </ul>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Got into HYGEC">
        It was my first experience with gifted education. I had to take "two" standardized tests, as
        well as an interview, to get into HYGEC, at an age of 10.
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Travelled Europe for 80 days 🗺️">
        I remember setting up a campsite with my family, eating up some barguettes and pain au
        chocolats, at Yport, France. My grandparents also came to Europe, too!
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Wrote my first line of code">
        I wrote my first line of code, in C. If it wasn't C, I would neither have loved TypeScript
        nor C++. Hooray!
      </Step>
    </ul>
    <Divider />
    <Year>2010</Year>
    <ul>
      <Step title="Destroyed two laptops 💻">
        I put a pen on the hinge of my mom's laptop and smacked it. Why did I do that? I don't know.
      </Step>
    </ul>
    <Divider />
    <Year>2006</Year>
    <ul>
      <Step title="Born 👶🏼🍼">
        I was born at September the 27, which was also Google's birthday, as well as the date when
        Richard Stallman announced the GNU Manifesto. Is it a coincidence that I'm doing
        programming?
      </Step>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="tw-font-bold tw-text-2xl md:tw-text-4xl tw-tracking-tight tw-mb-4 tw-mt-8">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Got into HAFS 🌄">
          I've had an interview, and got into{' '}
          <ExternalLink href="http://hafs.hs.kr/?main">
            Hankuk Academy of Foreign Studies
          </ExternalLink>
          .
        </Step>
        <Step title="Founded Dazzle 🚀">
          I've founded <ExternalLink href="https://dazzle.works">dazzle.</ExternalLink> with&nbsp;
          <ExternalLink href="https://github.com/krrrr0">@krrrr0</ExternalLink>
          &nbsp;and&nbsp;
          <ExternalLink href="https://github.com/shi3do">@shi3do</ExternalLink>.
        </Step>
        <Step title="Graduated from HYGEC 🎓">
          Finally graduated from{' '}
          <ExternalLink href="https://gifted.hanyang.ac.kr">HYGEC</ExternalLink> hosted by{' '}
          <ExternalLink href="https://hanyang.ac.kr">Hanyang University</ExternalLink>.
        </Step>
        <Step title="Made this website 🌐">
          Started developing this website for various usages.
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
          className="tw-flex tw-items-center tw-text-sm tw-my-4 tw-mx-auto tw-px-4 tw-py-2 tw-rounded-md tw-font-semibold tw-text-gray-900 dark:tw-text-gray-100"
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
