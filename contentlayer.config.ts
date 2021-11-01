import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeProbeImageSize from 'rehype-probe-image-size';
import rehypeSlug from 'rehype-slug';
import rehypeTwemojify from 'rehype-twemojify';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkTextr from 'remark-textr';
import smartquotes from 'smartquotes';

// Regex to change ... to … Uuugh, I hate regex.
function ellipses(input: string) {
  return input.replace(/((\?|\!)+|\.)?(\.{2,})\./gim, '$1\u2026');
}

// Magically change all quotes to match typewriter standards. Hooray!
function quotes(input: string) {
  return smartquotes(input);
}

function dashes(input: string) {
  return input.replaceAll('---', '—').replaceAll('--', '–');
}

const computedFields: ComputedFields = {
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw, { wordsPerMinute: 275 })
  },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  tweetIds: {
    type: 'json',
    resolve: (doc) => {
      const tweetMatches = doc.body.raw.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
      const tweetIDs = tweetMatches?.map((tweet: string) => tweet.match(/[0-9]+/g)![0]);
      return tweetIDs ?? [];
    }
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true }
  },
  computedFields
}));

const Newsletter = defineDocumentType(() => ({
  name: 'Newsletter',
  filePathPattern: 'newsletter/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true }
  },
  computedFields
}));

const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: 'snippets/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    logo: { type: 'string', required: true }
  },
  computedFields
}));

const OtherPage = defineDocumentType(() => ({
  name: 'OtherPage',
  filePathPattern: '*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true }
  },
  computedFields
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Newsletter, Snippet, OtherPage],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      remarkGemoji,
      [remarkTextr, { plugins: [quotes, dashes, ellipses] }]
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          },
          behavior: 'append'
        }
      ],
      rehypeCodeTitles,
      [rehypePrismPlus, { showLineNumbers: true }],
      [rehypeProbeImageSize, { staticDir: 'public' }],
      [
        rehypeTwemojify,
        {
          className: 'emoji',
          isNext: true,
          base: '/static/images/twemoji',
          params: {
            w: 32,
            q: 30
          }
        }
      ]
    ]
  }
});

export default contentLayerConfig;
