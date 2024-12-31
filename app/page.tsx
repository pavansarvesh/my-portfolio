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
      <div className='flex flex-col items-center pt-40'>
        <MyPhoto />
        <Content />
        <Links />
      </div>
    </main>
  );
}
