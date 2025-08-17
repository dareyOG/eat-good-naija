"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import Logo from "./logo";
import ProfileAvatar from "../app/dashboard/profile/components/avatar";

import {
  BellIcon,
  Clock,
  Home,
  LocateFixed,
  LogOut,
  MessagesSquare,
  Settings,
} from "lucide-react";

const menu = [
  { item: "home", link: "/dashboard", icon: <Home /> },
  { item: "track", link: "/dashboard/track", icon: <LocateFixed /> },
  { item: "orders", link: "/dashboard/orders", icon: <Clock /> },
  { item: "chat", link: "/dashboard/chat", icon: <MessagesSquare /> },
  {
    item: "alert",
    link: "/dashboard/alert",
    icon: <BellIcon />,
  },
  { item: "settings", link: "/dashboard/settings", icon: <Settings /> },
];

function Sidebar() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <aside className="hidden w-[12.1rem] flex-shrink-0 flex-col border-2 border-emerald-500 px-[2.4rem] py-[3.2rem] md:flex">
      <div className="flex h-screen flex-col justify-between gap-y-[3.6rem] overflow-auto">
        <div className="no-scrollbar space-y-[3.6rem] overflow-y-scroll">
          <div
            role="button"
            onClick={() => {
              router.push("/");
            }}
            className="mx-auto w-fit"
          >
            <Logo />
          </div>
          <nav className="no-scrollbar overflow-y-scroll">
            <ul className="flex flex-col justify-around gap-y-[3.6rem]">
              {menu.map((item) => (
                <li key={item.item}>
                  <Link
                    href={item.link}
                    className={`hover:bg-activeTab flex flex-col items-center gap-[0.4rem] px-[1.2rem] py-[0.8rem] hover:rounded-[1rem] hover:text-primary ${
                      pathName === item.link
                        ? "bg-activeTab rounded-[1rem] text-primary"
                        : ""
                    }`}
                  >
                    <span className="w-[2.4rem] text-[0.5rem]">
                      {item.icon}
                    </span>
                    <span className="text-[1.2rem] capitalize">
                      {item.item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-y-[3.6rem]">
          <ProfileAvatar />

          <button
            onClick={() => {
              router.replace("/sign-in");
            }}
            className="mx-auto h-fit w-fit"
          >
            <LogOut />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
