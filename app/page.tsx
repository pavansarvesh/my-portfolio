import Navbar from './navbar';
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
    <main className={`${gabaritoFont.className}`}>
      <Navbar />
      <div className='items-center pt-40 mx-auto max-w-screen-xl px-4 md:px-12 flex grow flex-col gap-y-6'>
        <MyPhoto />
        <Content />
        <Links />
      </div>
    </main>
  );
}
