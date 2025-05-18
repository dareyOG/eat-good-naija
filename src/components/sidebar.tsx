"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import Logo from "./logo";
import ProfileAvatar from "./avatar";

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

  // row-span-full flex flex-col justify-between gap-x-80 divide-y-2 divide-solid divide-divider px-[2.4rem] py-[3.2rem]
  return (
    // container
    // fixed left-0 top-0
    <aside className="flex min-h-screen w-full flex-col justify-between gap-[3.6rem] px-[2.4rem] py-[3.2rem]">
      <div className="flex h-screen flex-col justify-between gap-y-[3.6rem] overflow-auto">
        {/* <div className="border border-primary"> */}
        <div className="">
          <div
            role="button"
            onClick={() => {
              router.push("/");
            }}
            className="mx-auto w-fit"
          >
            <Logo />
          </div>
        </div>

        <div className="no-scrollbar h-screen overflow-y-scroll">
          <ul className="flex flex-col justify-around gap-[3.6rem]">
            {menu.map((item) => {
              console.log(pathName);

              const isActive = pathName === item.link;
              console.log(isActive);

              return (
                <li key={item.item}>
                  <Link
                    href={item.link}
                    className={`flex flex-col items-center gap-[0.4rem] px-[1.2rem] py-[0.8rem] hover:rounded-[1rem] hover:bg-activeTab hover:text-primary ${
                      isActive ? "rounded-[1rem] bg-activeTab text-primary" : ""
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
              );
            })}
          </ul>
        </div>
        {/* </div> */}
        <div className="flex flex-col gap-[3.6rem]">
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
