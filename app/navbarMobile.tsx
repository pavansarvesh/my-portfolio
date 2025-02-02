import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Menu from '../public/menu.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NavbarMobile = () => {
  return (
    <div className='font-bold flex justify-between mx-9 my-7'>
      <Link className='text-lg sm:text-xl text-yellow-500' href={'/'}>
        Pavan Sarvesh
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={Menu}
            height={50}
            width={50}
            alt='Menu'
            className='float-right size-6'
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href={'/'}>
            <DropdownMenuLabel>Home</DropdownMenuLabel>
          </Link>
          {/* <DropdownMenuItem>
            <Link href={'/about/'}>About</Link>
          </DropdownMenuItem> */}
          <Link href={'/blog/'}>
            <DropdownMenuItem>Blog</DropdownMenuItem>
          </Link>
          <Link href={'/projects/'}>
            <DropdownMenuItem>Projects</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarMobile;
