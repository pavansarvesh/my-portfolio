import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import type { MDXComponents } from 'mdx/types';
import GoBack from '@/app/blog/components/GoBack';
import { PageProps } from '@/.next/types/app/layout';

// import custom components and add below so that you can use it in mdx files
const mdxComponents: MDXComponents = {};

interface PostParams {
  params: { slug: string };
}

interface PageClientProps {
  post: any;
  mdxSource: any;
}

const PageClient = ({ post, mdxSource }: PageClientProps) => {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className='prose prose-lg prose-neutral prose-headings:text-slate-200 mx-auto mt-5 text-yellow-500 prose-p:text-yellow-500 prose-code:text-lg flex flex-col flex-wrap'>
      <div className='text-center'>
        <h1>{post.title}</h1>
      </div>
      <MDXRemote {...mdxSource} components={mdxComponents} />
      <GoBack />
    </article>
  );
};

export default PageClient;

export const getStaticProps = async ({ params }: PostParams) => {
  const { slug } = params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    return { notFound: true };
  }

  const mdxSource = await serialize(post.body.code);

  return {
    props: {
      post,
      mdxSource,
    },
  };
};

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generateMetadata = async ({ params }: PostParams) => {
  const { slug } = params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) notFound();

  return { title: post.title };
};
