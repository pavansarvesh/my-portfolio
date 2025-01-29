import { allPosts, MDX} from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import type { MDXComponents } from 'mdx/types';
import GoBack from '@/app/blog/components/GoBack';
import Mdx from '@/app/blog/components/mdx-components';

// import custom components and add below so that you can use it in mdx files
const mdxComponents: MDXComponents = {};

interface PageProps{
  params: { slug: string };
}

async function getBlogsFromParams(slug: string) {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) notFound();
  return post;

}

const PostLayout = async ({params}: PageProps) => {
  const { slug } = await params;
  const post = await getBlogsFromParams(slug)


  return (
    <article className='prose prose-lg prose-neutral prose-headings:text-slate-200 mx-auto mt-5 text-yellow-500 prose-p:text-yellow-500 prose-code:text-lg flex flex-col flex-wrap'>
      <div className='text-center'>
        <h1>{post.title}</h1>
      </div>
      <Mdx code={post.body.code} />
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
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) notFound();

  return { title: post.title };
};
