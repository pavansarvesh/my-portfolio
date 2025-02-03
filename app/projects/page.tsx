import React from 'react';
import { Gabarito } from 'next/font/google';
import Link from 'next/link';
import Navbar from './navbar';
import NavbarMobile from '../navbarMobile';

const gabaritoFont = Gabarito({
  subsets: ['latin'],
  weight: '400',
});

const Projects = () => {
  return (
    <div
      className={`max-w-screen-xl mx-auto sm:h-svh sm:pt-0 ${gabaritoFont.className}`}
    >
      <div className='hidden md:block'>
        {/* This is only visible on medium (768px) and larger screens. */}
        <Navbar />
      </div>
      <div className='block md:hidden pt-7'>
        {/* This is only visible on medium (768px) and smaller screens. */}
        <NavbarMobile />
      </div>
      <div className='px-10'>
        I&apos;m kinda lazy. Will update later, peace
        <br />
        <Link
          type='button'
          href={'/'}
          className='py-1 rounded-md transition duration-300 ease-in-out hover:text-yellow-500'
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Projects;
