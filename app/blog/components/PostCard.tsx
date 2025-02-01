import { Post } from 'contentlayer/generated';
import Link from 'next/link';


export default function PostCard(post: Post) {
  console.log(post.url);
  return (
    <div className='mb-8'>
      <h2 className='mb-1 text-base sm:text-xl'>
        <Link
          href={post.url}
          className='text-yellow-500 hover:text-yellow-400 dark:text-yellow-500'
        >
          {post.title}
        </Link>
      </h2>
      <h2 className='mb-1 sm:text-lg'>{post.description}</h2>
      <time dateTime={post.date} className='mb-2 block text-xs text-gray-400'>
        {new Intl.DateTimeFormat('en-UK').format(new Date(post.date))}
      </time>
    </div>
  );
}
