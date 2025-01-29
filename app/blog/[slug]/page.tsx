import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import GoBack from '@/app/blog/components/GoBack';
import Mdx from '@/app/blog/components/mdx-components';

interface Props {
  params: Promise<{ slug: string }>;
}

async function getBlogsFromParams(slug: string) {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) notFound();
  return post;
}

export default async function PostLayout({ params }: Props) {
  const resolvedParams = await params;
  const post = await getBlogsFromParams(resolvedParams.slug);

  return (
    <article className='prose prose-lg prose-neutral prose-headings:text-slate-200 mx-auto mt-5 text-yellow-500 prose-p:text-yellow-500 prose-code:text-lg flex flex-col flex-wrap'>
      <div className='text-center'>
        <h1>{post.title}</h1>
      </div>
      <Mdx code={post.body.code} />
      <GoBack />
    </article>
  );
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = await getBlogsFromParams(resolvedParams.slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}
