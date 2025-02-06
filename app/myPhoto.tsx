import React from 'react';
import Image from 'next/image';
import me from '../public/my-portfolio-photo.jpeg';

const myPhoto = () => {
  return (
    <div className='sm:m-10'>
      <Image
        src={me}
        alt='my-photo'
        width={5000}
        height={5000}
        className='rounded-full size-40 sm:size-60 border-yellow-500 border-4'
      />
    </div>
  );
};

export default myPhoto;
