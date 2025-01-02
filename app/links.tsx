import React from 'react';
import Image from 'next/image';
import Linkedin from '../public/linkedin.svg';
import Github from '../public/github.svg';
import Twitter from '../public/twitter.svg';

const Links = () => {
  return (
    <div className='flex justify-between grow'>
      <Image
        src={Linkedin}
        height={50}
        width={50}
        alt='linkedin'
        className='mr-6'
      />
      <Image
        src={Github}
        height={50}
        width={50}
        alt='github'
        // onClick='https://www.linkedin.com/in/r-pavan-sarvesh-462798256/'
        className='mr-6'
      />
      <Image
        src={Twitter}
        height={50}
        width={50}
        alt='twitter'
        className='size-10 mt-1'
      />
    </div>
  );
};

export default Links;
