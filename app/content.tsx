import React from 'react'
import Link from 'next/link';

const Content = () => {
  return (
    <div className='text-center m-2 sm:m-5'>
      <p className='font-bold text-xl sm:text-3xl pb-2'>
        Hey, I&apos;m Pavan Sarvesh
      </p>
      <p className='text-lg sm:text-xl'>
        I&apos;m a Web Developer based in Bangalore, Karnataka. Currently pursuing my undergrad in Amrita Viswa Vidyapeetam.
      </p>
      <Link className='text-lg font-semibold text-yellow-500 italic hover:underline' href={'/about/'}>( Know More )</Link>
    </div>
  );
}

export default Content