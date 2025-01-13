import React from 'react';
import Image from 'next/image';
import LinkedinIcon from '../public/linkedin.svg';
import GithubIcon from '../public/github.svg';
import TwitterIcon from '../public/twitter.svg';

const Links = () => {
  return (
    <div className='flex justify-between grow'>
      <a
        href='https://www.linkedin.com/in/r-pavan-sarvesh-462798256/'
        target='_blank'
      >
        <Image
          src={LinkedinIcon}
          height={50}
          width={50}
          alt='linkedin'
          className='mr-6'
        />
      </a>

      <a href='https://github.com/pavansarvesh' target='_blank'>
        <Image
          src={GithubIcon}
          height={50}
          width={50}
          alt='github'
          className='mr-6'
        />
      </a>
      <a href='https://x.com/pavansarveshr' target='_blank'>
        <Image
          src={TwitterIcon}
          height={50}
          width={50}
          alt='twitter'
          className='size-10 mt-1'
        />
      </a>
    </div>
  );
};

export default Links;
