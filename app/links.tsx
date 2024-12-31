import React from 'react';
import Image from 'next/image';

const Links = () => {
  return (
    <div className='flex justify-between grow'>
      <Image
        src='/linkedin.svg'
        height={50}
        width={50}
        alt='linkedin'
        className='mr-6'
      />
      <Image
        src='/github.svg'
        height={50}
        width={50}
        alt='github'
        // onClick='https://www.linkedin.com/in/r-pavan-sarvesh-462798256/'
        className='mr-6'
      />
      <Image
        src='/twitter.svg'
        height={50}
        width={50}
        alt='twitter'
        className='size-10 mt-1'
      />
    </div>
  );
};

export default Links;
