import Link from "next/link";
import {
  LucideGift,
  LucideHome,
  LucidePenBox,
  LucidePhoneCall,
  LucideSoup,
} from "lucide-react";

const menu = [
  { name: "home", icon: <LucideHome /> },
  { name: "services", icon: <LucideGift /> },
  { name: "menu", icon: <LucideSoup /> },
  { name: "contact", icon: <LucidePhoneCall /> },
];

function NavMenu() {
  return (
    <>
      <div className="md:absolute md:left-0 md:right-0 md:top-20 md:h-screen md:backdrop-blur-2xl lg:hidden"></div>
      <nav className="fixed left-0 right-0 top-[6.8rem] z-10 h-full backdrop-blur-3xl md:m-auto md:h-fit md:w-1/2 md:translate-y-1/2 md:rounded-sm md:bg-background lg:hidden">
        <ul className="flex flex-col divide-y divide-solid divide-primary/50 p-[1.5rem] text-[2.1rem] font-semibold capitalize text-primary">
          <li className="flex w-fit items-center space-x-5 py-[2rem] hover:text-primary/70 md:mx-auto">
            <span>
              <LucidePenBox />
            </span>
            <Link href={"/sign-up"}>sign up</Link>
          </li>
          <li className="flex flex-col gap-y-10 py-[2rem]">
            {menu.map((menuItem) => (
              <Link
                href={menuItem.name === "home" ? "/" : `/${menuItem.name}`}
                key={menuItem.name}
                className="flex w-fit items-center space-x-5 hover:text-primary/70 md:mx-auto"
              >
                <span>{menuItem.icon}</span>
                <span className="tracking-widest">{menuItem.name}</span>
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
