import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import highlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`, // match all .mdx files in all directories
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string'},
    // body: { type: 'mdx' }, // define body field only here
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: 'blogs', // the directory where your .mdx files are stored
  documentTypes: [Post], // define Post as a document type
  mdx: {
    remarkPlugins: [remarkGfm], // enable GitHub Flavored Markdown support
    rehypePlugins: [[rehypePrettyCode, { theme: 'one-dark-pro' }]], // enable syntax highlighting
  },
});
