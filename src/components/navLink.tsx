'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    link: 'home',
    path: '/'
  },
  {
    link: 'services',
    path: '/services'
  },
  {
    link: 'menu',
    path: '/menu'
  },
  {
    link: 'contact',
    path: '/contact'
  }
];

function NavLink() {
  const pathName = usePathname();

  return (
    <ul className="flex justify-between items-center gap-x-[5rem]">
      {navLinks.map(navLink => {
        const isActive = pathName === navLink.path || pathName.endsWith(navLink.path);

        return (
          <li key={navLink.link}>
            <Link
              href={navLink.path}
              className={`text-[1.6rem] capitalize font-medium ${
                isActive ? 'text-primary' : 'text-foreground'
              } font-serif`}
            >
              {navLink.link}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLink;
