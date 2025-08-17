"use client";

import Image from "next/image";
import { useCallback } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import slugify from "slugify";

import fire from "@/assets/fire.svg";
import soup from "@/assets/soup.svg";
import ricebowl from "@/assets/rice-bowl.svg";
import meat from "@/assets/meat.svg";
import HomeOrders from "@/components/home-orders";

// import MealCard from "@/components/ui/meal-card";

const menuTabs = [
  { icon: fire, tab: "Trending" },
  { icon: soup, tab: "Soups and Stews" },
  { icon: ricebowl, tab: "Rice Dishes" },
  {
    icon: meat,
    tab: "Grilled and Roasted Foods",
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

  const search = (
    searchParams.get("category") ? searchParams.get("category") : "trending"
  ) as string;

  return (
    <HomeOrders>
      <nav className="mb-[2.5rem] flex flex-col">
        <ul className="flex justify-evenly">
          {/* mx-[10rem] flex justify-around gap-x-[.2rem] */}
          {menuTabs.map((menu) => {
            const slug = slugify(menu.tab, { lower: true, strict: true });
            const isActive =
              (search === slug || search?.startsWith(slug)) && search !== "";
            return (
              <li key={menu.tab}>
                <Link
                  href={
                    pathName +
                    "?" +
                    queryParameter("category", search ? slug : "trending")
                  }
                  className={`flex items-center justify-between gap-x-[.6rem] rounded-[1.5rem] px-[1.2rem] py-[.6rem] ${isActive ? "bg-blue-400 hover:bg-secondary" : "hover:bg-activeTab bg-secondary"} w-fit text-nowrap`}
                >
                  <Image
                    src={menu.icon}
                    alt={menu.tab}
                    width={24}
                    height={24}
                  />
                  <span className="text-[1.2rem]">{menu.tab}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* fetch data based on search result */}
      <article className="mx-10 space-y-8 text-justify text-2xl">
        <div className="border border-primary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolorem
          cupiditate eligendi quibusdam, dolores quod veniam odit. Perspiciatis
          minus earum a possimus excepturi. Fugiat similique debitis nesciunt.
          Officiis praesentium adipisci, iste qui omnis, quaerat illo ut vel,
          sint quam error? Amet molestiae dolore hic. Ducimus nobis repellendus
          laudantium fugit illum, molestias ratione eos facere dolores tenetur
          esse odit ullam iure nesciunt harum veritatis laborum nisi.
          <br />
          <span className="text-2xl font-semibold text-primary">{search}</span>
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
          aliquam sit. Error consectetur nesciunt sit rem, reiciendis fugit
          sapiente accusamus ullam recusandae debitis. Nisi, numquam tenetur
          ducimus magnam harum, sunt consequatur nihil asperiores similique
          perspiciatis cumque sequi perferendis. Ab ut aperiam modi architecto!
          Consequatur natus quasi temporibus, fugit quibusdam repudiandae velit
          vero nesciunt quos quisquam labore iure delectus maiores earum eos
          illum facilis cupiditate porro ipsum non tempora sunt. Molestiae
          dolores reiciendis, accusamus voluptatum ducimus vero dolor ullam.
          Expedita, fuga!
        </div>
      </article>
    </HomeOrders>
  );
}

export default Dashboard;
