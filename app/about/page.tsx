import React from 'react';
import { Gabarito } from 'next/font/google';
import Navbar from './navbar';
import NavbarMobile from '../navbarMobile';
import Content from './content';

const gabaritoFont = Gabarito({
  subsets: ['latin'],
  weight: '400',
});

const AboutPage = () => {
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
      <Content />
    </div>
  );
};

export default AboutPage;
