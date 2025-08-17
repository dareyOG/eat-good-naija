import { useState } from "react";

import NavHeader from "./nav-header";
import NavMenu from "./nav-menu";

import { LucideMenu, LucideX } from "lucide-react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((open) => !open);

  return (
    <div>
      <NavHeader />
      <button
        onClick={toggleNav}
        className="text-primary hover:text-primary/50 lg:hidden"
      >
        {!isOpen ? <LucideMenu /> : <LucideX />}
      </button>
      {isOpen && <NavMenu />}
    </div>
  );
}

export default Navigation;
