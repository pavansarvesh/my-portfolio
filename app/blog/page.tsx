import React from 'react';
import Navbar from './navbar';
import NavbarMobile from '../navbarMobile';
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
    <div className={`max-w-screen-xl mx-auto h-svh ${gabaritoFont.className}`}>
      <div className='hidden md:block'>
        {/* This is only visible on medium (768px) and larger screens. */}
        <Navbar />
      </div>
      <div className='block md:hidden pt-7'>
        {/* This is only visible on medium (768px) and smaller screens. */}
        <NavbarMobile />
      </div>
      <div className='p-10 pt-16 sm:p-0'>
        {posts.map((post) => (
          <div
            key={post._id}
            className='transition duration-300 ease-in-out rounded-lg p-5 sm:p-10 lg:hover:bg-neutral-900  '
          >
            <ul>
              <li>
                <PostCard {...post} />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blogPage;
