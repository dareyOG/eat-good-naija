'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ link, href }: { link: string; href: string }) {
  const path = usePathname();

  return (
    <>
      <Link
        href={href}
        className={`capitalize font-medium text-[1.5rem] ${
          !path.startsWith(href)
            ? 'text-foreground hover:text-primary hover:opacity-80'
            : 'text-primary hover:opacity-80'
        } lg:hover:opacity-65 font-medium`}
      >
        {link}
      </Link>
    </>
  );
}

export default NavLink;
