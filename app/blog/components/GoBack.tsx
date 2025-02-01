'use client';
import Link from 'next/link';
import React from 'react';

const GoBack = () => {
  return (
    <div>
      <Link
        href={'/blog'}
        className='transition duration-300 ease-in-out text-base sm:text-xl font-semibold text-yellow-500 pb-12 hover:text-slate-200 no-underline'
      >
        Go Back
      </Link>
    </div>
  );
};

export default GoBack;
