"use client";

import { useState } from "react";

import Image from "next/image";

import searchNormal from "@/assets/search-normal.png";
import candle from "@/assets/candle.png";

function Searchbar() {
  const [query, setQuery] = useState("");
  return (
    <div className="mx-[20rem] my-[1.6rem] w-fit">
      <div className="flex w-full items-center justify-between gap-[0.8rem] rounded-[0.8rem] border border-transparent bg-secondary px-[1.2rem] py-[0.8rem]">
        <span>
          <Image src={searchNormal} alt="Search Icon" width={24} />
        </span>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-secondary text-[1.6rem] text-primary focus:outline focus:outline-secondary"
        />
        <span>
          <Image src={candle} alt="Candle Icon" width={24} />
        </span>
      </div>
    </div>
  );
}

export default Searchbar;
