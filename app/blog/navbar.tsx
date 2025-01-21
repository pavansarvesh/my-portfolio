import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between text-l font-bold'>
      <div className='mt-10 ml-5 text-xl text-yellow-500'>
        Pavan Sarvesh's Blog
      </div>
      <div className='flex justify-end'>
        <Link
          type='button'
          href={'/projects'}
          className='mt-14 transition duration-300 ease-in-out hover:text-yellow-500'
        >
          Projects
        </Link>
        <Link
          type='button'
          href={'/'}
          className='mt-14 px-10 rounded-md transition duration-300 ease-in-out hover:text-yellow-500'
        >
          Home
        </Link>
        <a
          href='/Pavan - Resume(paypal).pdf'
          download='Pavan-cv'
          className='transition duration-300 ease-in-out m-10 ml-2 p-3 px-7 bg-yellow-500 text-gray-950 rounded-md hover:text-yellow-500 hover:bg-neutral-950'
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
