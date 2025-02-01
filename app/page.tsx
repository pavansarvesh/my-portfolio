import Navbar from './navbar';
import NavbarMobile from './navbarMobile';
import Content from './content';
import MyPhoto from './myPhoto';
import Links from './links';
import { Gabarito } from 'next/font/google';

const gabaritoFont = Gabarito({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <main
      className={`max-w-screen-xl mx-auto sm:h-svh sm:pt-0${gabaritoFont.className}`}
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
        <Content />
        <Links />
      </div>
    </main>
  );
}
