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

function trademarks(input: string) {
  input = input.replace(/\((c|C)\)/gim, '©');
  input = input.replace(/\((r|R)\)/gim, '®');
  input = input.replace(/\((p|P)\)/gim, '℗');
  input = input.replace(/\((tm|TM)\)/gim, '™');
  return input;
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

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm, remarkGemoji, [remarkTextr, { plugins: [trademarks] }]],
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
      [rehypeProbeImageSize as any, { staticDir: 'public' }],
      [
        rehypeTwemojify,
        {
          framework: 'next',
          params: { w: 32, q: 20 },
          base: '/static/images/twemoji',
          exclude: ['©', '®', '™', '℗']
        }
      ]
    ]
  }
});

export default contentLayerConfig;
