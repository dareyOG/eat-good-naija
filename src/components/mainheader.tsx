'use client';

import Logo from './logo';
import NavHeader from './nav-header';

function MainHeader() {
  return (
    <header className="flex justify-between items-center px-[13rem] py-[1.6rem]">
      <div className="flex gap-[0.8rem] items-center">
        <Logo />
        <span className="text-[2.4rem] capitalize text-primary font-bold text-nowrap font-mono">
          {' '}
          eat good naija
        </span>
      </div>
      <NavHeader />
    </header>
  );
}

export default MainHeader;
