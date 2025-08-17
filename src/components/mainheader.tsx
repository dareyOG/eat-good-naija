"use client";

import Logo from "./logo";
import Navigation from "./navigation";

function MainHeader() {
  return (
    <header className="sticky left-0 right-0 top-0 flex items-center justify-between bg-background px-[1.5rem] py-[1.6rem] md:px-[2.5rem] lg:bg-transparent lg:px-[13rem] lg:backdrop-blur-3xl">
      <div className="flex items-center gap-x-[0.8rem]">
        <Logo />
        <span className="text-nowrap font-mono text-[2.4rem] font-bold capitalize text-primary">
          {" "}
          eat good naija
        </span>
      </div>
      <Navigation />
    </header>
  );
}

export default MainHeader;
