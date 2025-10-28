import Link from 'next/link';

import Logo from './Logo';
import NavHeader from './NavHeader';
import NavDrawer from './NavDrawer';

import { Button } from './ui/button';

import { Moon, Sun } from 'lucide-react';

function MainHeader() {
  return (
    <header className="flex items-center justify-between px-4 lg:px-10 py-[1.6rem] border-b-2 border-primary border-dotted">
      <Link href={'/'}>
        <div className="flex flex-col items-center gap-y-2">
          <Logo />
          <p className="text-[1.2rem] text-nowrap font-bold capitalize text-primary font-gabriela hidden lg:block">
            {' '}
            eat good naija
          </p>
        </div>
      </Link>
      <div className="flex items-center gap-x-32">
        <NavHeader />
        <div className="flex items-center gap-x-5">
          <Link
            href={'/log-in'}
            className="capitalize text-xl bg-primary text-primary-foreground hover:bg-primary/90 border-transparent font-sans px-5 py-2.5 rounded-lg hidden lg:block"
          >
            log in
          </Link>
          <Button variant="ghost" size={'icon-lg'} className="p-8 rounded-full">
            {' '}
            {true ? (
              <Moon className="text-primary size-8" />
            ) : (
              <Sun className="text-primary size-8" />
            )}
          </Button>

          <NavDrawer />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
