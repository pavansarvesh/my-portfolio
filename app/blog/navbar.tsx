import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between text-l font-bold text-sm sm:text-xl pb-14'>
      <div className='mt-14 ml-5 text-sm sm:text-xl text-yellow-500'>
        <Link className='' href={'/'}>
          Pavan Sarvesh&apos;s Blog
        </Link>
      </div>
      <div className='flex justify-end mx-9 text-base font-bold'>
        <div className='flex justify-between'>
          {/* <Link
            type='button'
            href={'/about'}
            className='mt-14 sm:px-6 transition duration-300 ease-in-out hover:text-yellow-500'
          >
            About
          </Link> */}
          <Link
            type='button'
            href={'/blog'}
            className='mt-14 sm:px-6 rounded-md transition duration-300 ease-in-out hover:text-yellow-500'
          >
            Blogs
          </Link>
          <Link
            type='button'
            href={'/projects'}
            className='mt-14 px-5 sm:px-6 rounded-md transition duration-300 ease-in-out hover:text-yellow-500'
          >
            Projects
          </Link>
          <Link
            href='/Pavan - Resume(paypal).pdf'
            download='Pavan-cv'
            className='mt-14 px-5 sm:px-6 rounded-md transition duration-300 ease-in-out hover:text-yellow-500'
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
