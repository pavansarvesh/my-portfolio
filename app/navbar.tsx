import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-end text-l font-bold'>
      <div className='flex justify-between'>
        <Link
          type='button'
          href={'/blog'}
          className='mt-14 transition duration-300 ease-in-out hover:text-yellow-500'
        >
          Blogs
        </Link>
        <Link
          type='button'
          href={'/projects'}
          className='mt-14 px-10 rounded-md transition duration-300 ease-in-out hover:text-yellow-500'
        >
          Projects
        </Link>
        <a
          href='/Pavan - Resume(paypal).pdf'
          download='Pavan-cv'
          className='transition duration-300 ease-in-out m-10 ml-2 px-7 bg-yellow-500 text-gray-950 p-3 rounded-md hover:text-yellow-500 hover:bg-neutral-950'
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
