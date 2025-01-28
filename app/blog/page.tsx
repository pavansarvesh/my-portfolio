import React from 'react';
import Navbar from './navbar';
import { Gabarito } from 'next/font/google';
import { allPosts } from 'contentlayer/generated';
import PostCard from './components/PostCard';

const gabaritoFont = Gabarito({
  subsets: ['latin'],
  weight: '400',
});

const blogPage = () => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div
      className={`${gabaritoFont.className}`}
    >
      <Navbar />
      {posts.map((post) => (
        <div
          key={post._id}
          className='transition duration-300 ease-in-out rounded-lg p-5 hover:bg-neutral-900 marker:mx-auto mx-auto max-w-screen-xl px-4 md:px-12 flex grow flex-col gap-y-6'
        >
          <ul>
            <li>
              <PostCard {...post} />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default blogPage;
