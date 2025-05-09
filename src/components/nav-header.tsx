'use client';

import { useRouter } from 'next/navigation';
import ActionBtn from './button-cta';
import NavLink from './navLink';

function NavHeader() {
  const router = useRouter();
  return (
    <nav className="flex justify-between items-center gap-x-[10rem]">
      <NavLink />
      <ActionBtn
        buttonText="Sign Up"
        logToPath="/sign-up"
        handleClick={() => {
          router.push('/sign-up');
        }}
      />
    </nav>
  );
}

export default NavHeader;
