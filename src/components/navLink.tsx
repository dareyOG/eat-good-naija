'use client';

import Link from 'next/link';
import { buttonVariants } from './ui/button';
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
  console.log(pathName);

  return (
    <ul className="flex justify-between items-center gap-x-[5rem]">
      {navLinks.map(navLink => {
        const isActive = pathName === navLink.path || pathName.endsWith(navLink.path);

        return (
          <li key={navLink.link} className="text-[1.6rem] capitalize">
            <Link
              href={navLink.path}
              className={
                buttonVariants({ variant: 'link' }) +
                ' hover:no-underline ' +
                `${isActive ? 'text-destructive' : ''}`
              }
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
