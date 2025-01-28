import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import type { MDXComponents } from 'mdx/types';
import GoBack from '@/app/blog/components/GoBack';

// import custom components and add below so that you can use it in mdx files
const mdxComponents: MDXComponents = {};

interface PostParams {
  params: { slug: string };
}

const PostLayout = ({ params }: PostParams) => {
  const { slug } = params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className='prose prose-lg prose-neutral prose-headings:text-slate-200 mx-auto mt-5 text-yellow-500 prose-p:text-yellow-500 prose-code:text-lg flex flex-col flex-wrap'>
      <div className='text-center'>
        <h1>{post.title}</h1>
      </div>
      <MDXContent components={mdxComponents} />
      <GoBack />
    </article>
  );
};

export default PostLayout;

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) notFound();

  return { title: post.title };
};
