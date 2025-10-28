import NavLink from './NavLink';

function NavHeader() {
  const navLinks = [
    { link: 'why us?', href: 'why-us' },
    { link: 'services', href: 'services' },
    { link: 'menu', href: 'menu' },
    { link: 'contact', href: 'contact' },
  ];
  return (
    <nav className="hidden lg:block">
      <ul className=" flex items-center capitalize gap-x-14">
        {navLinks.map((link) => (
          <li key={link.link}>
            <NavLink href={link.href} link={link.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavHeader;
