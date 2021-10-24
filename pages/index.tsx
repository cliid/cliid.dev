import BlogPostCard from '@components/BlogPostCard';
import Container from '@components/Container';
import ProjectCard from '@components/ProjectCard';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Container>
      <div className="tw-flex tw-flex-col-reverse sm:tw-flex-row tw-items-start tw-mb-16">
        <div className="tw-flex tw-flex-col tw-pr-8">
          <h1 className="page-title">
            Jiwu Jang&nbsp;
            <p className="tw-text-2xl tw-text-gray-500 dark:tw-text-gray-300 tw-font-bold">
              a.k.a. cliid
            </p>
          </h1>
          <h2 className="tw-text-gray-700 dark:tw-text-gray-200 tw-mb-4">
            Co-founder of <span className="tw-font-semibold">@dazzleofficial</span>
          </h2>
          <p className="tw-text-gray-600 dark:tw-text-gray-400">
            Learning modern web technologies. Designing eye-fascinating designs. Always ecstatic
            when coding with Next.js / TailwindCSS.
          </p>
        </div>
        <div className="tw-relative tw-mb-8 sm:tw-mb-0 tw-mr-auto tw-rounded-full tw-filter">
          <Image
            alt="Jiwu Jang"
            height={176}
            width={176}
            src="/static/images/avatar.webp"
            className="tw-rounded-full tw-filter"
          />
        </div>
      </div>
      <div className="tw-mb-16">
        <h3 className="tw-font-bold tw-text-2xl md:tw-text-4xl tw-tracking-tight tw-mb-6 tw-text-black dark:tw-text-white">
          Featured Posts
        </h3>
        <div className="tw-grid tw-grid-flow-row tw-gap-6 tw-grid-cols-1 md:tw-grid-cols-3">
          <BlogPostCard
            title="Everything I Know About Priority Queues, Heaps and Binary Heaps."
            slug="priority-queue"
            gradient="tw-from-[#F7FE72] tw-to-[#F4E76E]"
          />
          <BlogPostCard
            title="Integrating Twemojis with rehype.js using rehype-twemojify"
            slug="integrating-twemoji-with-rehype"
            gradient="tw-from-[#1DA1F2] tw-to-[#1DA1F2]"
          />
          <BlogPostCard
            title="The history of Lorem Ipsum, what it is used for, how to use it, and various tools to generate it."
            slug="lorem-ipsum"
            gradient="tw-from-[#29E7CD] tw-via-[#47A8BD] tw-to-[#3993DD]"
          />
        </div>
        <Link href="/blog">
          <a className="tw-flex tw-mt-8 tw-text-gray-600 dark:tw-text-gray-400 tw-leading-7 tw-rounded-lg hover:tw-text-gray-800 dark:hover:tw-text-gray-200 tw-transition-all tw-h-6">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="tw-h-6 tw-w-6 tw-ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
      <div className="tw-mb-16">
        <h3 className="tw-font-bold tw-text-2xl md:tw-text-4xl tw-tracking-tight tw-mb-4 tw-text-black dark:tw-text-white">
          My Projects
        </h3>
        <p className="tw-text-gray-600 dark:tw-text-gray-400 tw-mb-4 tw-prose">
          <span>
            I love making projects for fun, even if it's of no use. The list below are the projects
            carefully coded by me. I've written a couple blog posts about the overall structure and
            development process about those projects. Oh, by the way I always plan to make a new
            project. It's hardcoded in my genetics&nbsp;
            <span role="img" aria-label={'🧬'}>
              🧬🧬
            </span>
          </span>
        </p>

        <div className="tw-grid tw-grid-flow-row tw-gap-6 tw-grid-cols-1 md:tw-grid-cols-2">
          <ProjectCard
            title="Sevenwiki."
            description="A Markdown based tech-wiki focused on giving the best user experience and providing high quality content. Especially designed / optimized for Koreans."
            href="https://seven.wiki"
            gradient="tw-from-[#7777ff] tw-to-[#7777ff]"
            imageUrl="/static/images/svw-logo.webp"
          />
          <ProjectCard
            title="cliid.dev"
            description="An extensively feature-rich portfolio / blog. Powered by Next.js, Preact, Tailwind, Contentlayer, Twemoji, Prisma, Planetscale and much more."
            href="https://cliid.dev"
            gradient="tw-from-[#000000] tw-to-[#000000]"
            imageUrl="/static/images/avatar.webp"
          />
          <ProjectCard
            title="Dazzle Inc."
            description="A small company that dreams of positively impacting millions of users. Creating stuff that anyone can fall in love with."
            href="https://dazzle.works"
            gradient="tw-from-[#FF86B3] tw-to-[#FF86B3]"
            imageUrl="/static/images/dazzle-logo.webp"
          />
          <ProjectCard
            title="Coming soon..."
            description="Initializing Yarn, installing TailwindCSS, creating new schemas with Prisma, and constantly deploying to ▲Vercel."
            href="/404"
            gradient="tw-from-[#00AF54] tw-via-[#007CBE] tw-to-[#FFD639]"
            imageUrl="/static/images/construction.webp"
          />
        </div>
      </div>
    </Container>
  );
}
