import Navbar from './navbar';
import NavbarMobile from './navbarMobile';
import Content from './content';
import MyPhoto from './myPhoto';
import Links from './links';
// import Image from 'next/image';
import { Gabarito } from 'next/font/google';
// import downArrow from './../public/downArrow.svg';
// import { font } from './../public/fonts/OffBitTrial-DotBold.otf';

const gabaritoFont = Gabarito({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <main
      className={`max-w-screen-xl mx-auto sm:h-svh sm:pt-0 ${gabaritoFont.className}`}
    >
      <div className='hidden md:block'>
        {/* This is only visible on medium (768px) and larger screens. */}
        <Navbar />
      </div>
      <div className='block md:hidden pt-7'>
        {/* This is only visible on medium (768px) and smaller screens. */}
        <NavbarMobile />
      </div>
      <div className='items-center mt-32 sm:mt-40 mx-auto px-4 sm:px-12 flex grow flex-col gap-y-6'>
        <MyPhoto />
        {/* <div className='text-yellow-500 text-7xl'>PAVAN SARVESH</div> */}
        <Content />
        <Links />
      </div>
      {/* <Image
        src={downArrow}
        height={25}
        width={25}
        alt='down-arrow'
        className='mx-auto mt-10'
      /> */}
    </main>
  );
}
