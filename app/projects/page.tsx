import React from 'react'
import { Gabarito } from 'next/font/google';
import Link from 'next/link';

const gabaritoFont = Gabarito({
  subsets: ['latin'],
  weight: '400',
});

const Projects = () => {
  return (
    <div
      className={`text-xl mx-auto max-w-fit max-h-screen my-auto py-72 ${gabaritoFont.className}`}
    >
      I&apos;m kinda lazy. Will update later, peace
      <Link
        type='button'
        href={'/'}
        className='mt-14 px-10 rounded-md transition duration-300 ease-in-out hover:text-yellow-500'
      >
        Go to Home
      </Link>
    </div>
  );
}

export default Projects