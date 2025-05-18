"use client";

import Image from "next/image";
import { useCallback } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

// import { meals } from "../../../../public/meal";

import fire from "@/assets/fire.svg";
import soup from "@/assets/soup.svg";
import ricebowl from "@/assets/rice-bowl.svg";
import meat from "@/assets/meat.svg";
import Cart from "@/components/cart";
import Invoice from "@/components/invoice";
// import MealCard from "@/components/ui/meal-card";

const menuTabs = [
  { icon: fire, tab: "Trending", path: "trending" },
  { icon: soup, tab: "Soups and Stews", path: "soups-and-stews" },
  { icon: ricebowl, tab: "Rice Dishes", path: "rice-dishes" },
  {
    icon: meat,
    tab: "Grilled and Roasted Foods",
    path: "grilled-and-roasted-food",
  },
];

function Dashboard() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const queryParameter = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const search = (searchParams.get("category") || "trending") as string;

  return (
    <main className="flex gap-[10rem]">
      <section>
        <nav className="mb-[2.5rem] flex flex-col">
          <ul className="flex gap-x-[2.4rem]">
            {menuTabs.map((menu) => {
              const isActive =
                (search === menu.path || search?.startsWith(menu.path)) &&
                search !== "";
              return (
                <li key={menu.tab}>
                  <Link
                    href={
                      pathName +
                      "?" +
                      queryParameter(
                        "category",
                        search ? menu.path : "trending",
                      )
                    }
                    className={`flex gap-[.6rem] rounded-[1.2rem] px-[1.2rem] py-[.6rem] ${isActive ? "bg-activeTab hover:bg-secondary" : "bg-secondary hover:bg-activeTab"} items-center text-nowrap`}
                  >
                    <Image
                      src={menu.icon}
                      alt={menu.tab}
                      width={24}
                      height={24}
                    />
                    <span className="text-[1.4rem]">{menu.tab}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <article className="gap-[2rem] text-2xl">{search}</article>
      </section>
      <section className="flex h-screen max-h-screen w-[31.6rem] flex-col items-center justify-between">
        <Cart />
        <Invoice />
      </section>
    </main>
  );
}

export default Dashboard;

/* 

 <main className="">
      <section>
        <nav className="mb-[2.5rem] flex flex-col">
          <ul className="flex gap-x-[2.4rem]">
            {menuTabs.map((menu) => {
              const isActive =
                (search === menu.path || search?.startsWith(menu.path)) &&
                search !== "";
              return (
                <li key={menu.tab}>
                  <Link
                    href={
                      pathName +
                      "?" +
                      queryParameter(
                        "category",
                        search ? menu.path : "trending",
                      )
                    }
                    className={`flex gap-[.6rem] rounded-[1.2rem] px-[1.2rem] py-[.6rem] ${isActive ? "bg-activeTab hover:bg-secondary" : "bg-secondary hover:bg-activeTab"} items-center text-nowrap`}
                  >
                    <Image
                      src={menu.icon}
                      alt={menu.tab}
                      width={24}
                      height={24}
                    />
                    <span className="text-[1.4rem]">{menu.tab}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <article className="gap-[2rem] border border-destructive text-2xl">
          {search}
        </article>
      </section>
      <section className="flex h-screen flex-col items-center justify-between border border-dashed border-destructive">
        <Cart />
        <Invoice />
      </section>
    </main>
*/
