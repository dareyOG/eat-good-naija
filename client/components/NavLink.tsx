'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ link, href }: { link: string; href: string }) {
  const path = usePathname();

  return (
    <>
      <Link
        href={href}
        className={`capitalize text-[2rem] ${
          path.startsWith(href) ? 'text-foreground' : 'text-primary'
        } lg:hover:opacity-65 font-medium`}
      >
        {link}
      </Link>
    </>
  );
}

export default NavLink;
