'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from './ui/button';
import Logo from './Logo';

import {
  X,
  LibraryBig,
  HelpingHand,
  CookingPot,
  MessageCircleCode,
  LogOut,
  Menu,
} from 'lucide-react';

export default function NavDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: '/about', label: 'about', icon: LibraryBig },
    { href: '/services', label: 'services', icon: HelpingHand },
    { href: '/menu', label: 'menu', icon: CookingPot },
    { href: '/reviews', label: 'reviews', icon: MessageCircleCode },
  ];

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleLinkClick = (href: string) => {
    console.log(`Navigating to: ${href}`);
    route.push(href);
    setIsOpen(false);
  };

  return (
    <div role="navigation" className="relative lg:hidden">
      {/* Menu Button */}
      <Button
        variant={'ghost'}
        aria-label="Toggle menu"
        className="p-8 transition-colors"
        onClick={toggleDrawer}
      >
        <Menu className="text-primary size-8" />
      </Button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-[60vw] bg-background z-50
          transform transition-transform duration-300 ease-in-out
          shadow-2xl
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-[1.6rem] border-b-2 border-primary">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-mono font-bold text-lg text-primary capitalize">
              eat good naija
            </span>
          </div>
          <Button
            variant={'ghost'}
            onClick={toggleDrawer}
            aria-label="Close menu"
            className="p-8 transition-colors"
          >
            <X className="size-8 text-primary" />
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-r-md border-l-4  ${
                      pathname === link.href
                        ? 'border-l-primary'
                        : 'border-l-transparent hover:border-ring/50'
                    } hover:bg-ring/5 transition-colors text-primary cursor-pointer`}
                  >
                    <Icon className="size-8 transition-colors" />
                    <span className="capitalize text-lg font-medium">
                      {link.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Divider */}
        <div className="mx-4 border-t border-secondary my-4" />

        {/* Additional Actions */}
        <div className="px-4 pb-4">
          <Button
            variant={'destructive'}
            size={'lg'}
            onClick={() => {}}
            className="gap-3.5 rounded-lg transition-colors duration-300"
          >
            <LogOut className="size-6 transition-colors" />
            <span className="capitalize text-lg font-medium">Log out</span>
          </Button>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-primary text-center">
            <p className="font-medium mb-1">developed by Oludire Damilare</p>
            <p>copyright &copy; 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
