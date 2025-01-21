import React from 'react';
import Navbar from './navbar';
import { Gabarito } from 'next/font/google';

const gabaritoFont = Gabarito({
  subsets: ['latin'],
  weight: '400',
});

const blogPage = () => {
  return (
    <div className={`${gabaritoFont.className}`}>
      <Navbar />
    </div>
  );
};

export default blogPage;
