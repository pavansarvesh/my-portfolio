import React from 'react';
import Link from 'next/link';
import { Gabarito } from 'next/font/google';

const gabaritoFont = Gabarito({
  subsets: ['latin'],
  weight: '400',
});

const Notfound = () => {
  return (
    <div className={`${gabaritoFont.className}`}>
      <div className='flex flex-col'>
        <div className='max-w-max text-yellow-500 text-3xl'>
          ERROR 404 Notfound :(
        </div>
        <Link
          type='button'
          href={'/'}
          className='text-l flex justify-around rounded-md transition duration-300 ease-in-out hover:text-yellow-500'
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
