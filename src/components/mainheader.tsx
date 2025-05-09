'use client';

import Image from 'next/image';
import ThaiHotPot from '@/assets/ThaiHotPot.svg';
import NavHeader from './nav-header';

function MainHeader() {
  return (
    <header className="flex justify-between items-center px-[13rem] py-[1.6rem] border-2 border-black">
      <div className="flex gap-[0.8rem] items-center">
        <Image src={ThaiHotPot} alt="logo" />
        <span className="text-[2.4rem] capitalize text-primary font-bold"> eat good naija</span>
      </div>
      <NavHeader />
    </header>
  );
}

export default MainHeader;
