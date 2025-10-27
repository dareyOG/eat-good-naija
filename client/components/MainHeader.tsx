import Link from 'next/link';
import Logo from './Logo';
import NavHeader from './NavHeader';
import { LucideMoon, LucideSun } from 'lucide-react';
import { Button } from './ui/button';

function MainHeader() {
  // sticky left-0 right-0 top-0
  return (
    <header className="flex items-center justify-between px-10 py-[1.6rem]">
      <Link href={'/'}>
        <div className="flex flex-col items-center gap-y-2">
          <Logo />
          <p className="text-lg text-nowrap font-mono font-bold capitalize text-primary">
            {' '}
            eat good naija
          </p>
        </div>
      </Link>
      <NavHeader />
      <div className="space-x-5 my-auto">
        <Link
          href={'/sign-in'}
          className="capitalize text-xl bg-primary text-primary-foreground hover:bg-primary/90 border-transparent font-serif px-5 py-2.5 rounded-lg"
        >
          sign in
        </Link>
        <Button variant="ghost" size={'icon-lg'} className="text-primary">
          {' '}
          {true ? <LucideMoon /> : <LucideSun />}
        </Button>
      </div>
    </header>
  );
}

export default MainHeader;
