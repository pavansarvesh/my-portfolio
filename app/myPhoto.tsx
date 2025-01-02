import React from 'react';
import Image from 'next/image';
import me from '../public/my-portfolio-photo.jpeg';

const myPhoto = () => {
  return (
    <div className='m-10 relative'>
      <Image
        // src='https://www.w3schools.com/howto/img_avatar.png'
        src={me}
        alt='my-photo'
        // fill
        width={5000}
        height={5000}
        className='rounded-full size-60 border-white border-4'
      />
    </div>
  );
};

export default myPhoto;
