"use client";

import Image from "next/image";

import { useState } from "react";

import efoRiro from "/public/images/efoRiro.png";
import { Button } from "./ui/button";

import { Edit3 } from "lucide-react";

function Cart() {
  const [count, setCount] = useState(1);

  const handleDecrement = () =>
    setCount((count) => (count > 1 ? count - 1 : count));
  const handleIncrement = () => setCount((count) => count + 1);

  return (
    <div className="flex flex-col gap-[.8rem]">
      <div className="flex items-center gap-[.4rem]">
        <span className="text-[2rem] uppercase">my cart</span>

        <span className="flex aspect-square w-[2.4rem] items-center justify-center rounded-full bg-primary text-center text-[1.1rem] font-medium text-background">
          50
        </span>
      </div>
      <div className="">
        <div className="no-scrollbar divide-divider flex h-full max-h-[25rem] flex-col divide-y-2 divide-solid overflow-y-auto">
          <div className="flex w-[30rem] items-center gap-[1.2rem] px-[1.2rem] py-[.8rem]">
            <Image src={efoRiro} alt="efo" className="w-[5.6rem]" />
            <div className="flex w-full flex-col gap-[1.2rem]">
              <div className="w-fit">
                <h3 className="text-[1.5rem] font-medium">Ofada stew</h3>
                <div className="flex w-fit justify-between gap-[.4rem] font-normal text-accent [&>span]:text-[1.2rem]">
                  <span>Note:</span>
                  <span className="text-foreground">Make it spicy</span>
                </div>
                <div className="w-fit">
                  <span className="text-cartPrice text-[1.4rem] font-semibold">
                    100000
                  </span>
                  <span className="text-[1.2rem]">/500kg</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[.4rem]">
                  <button
                    onClick={handleDecrement}
                    className="w-fit rounded-[.8rem] border border-transparent bg-secondary px-[.8rem] py-[.4rem] text-[1.2rem]"
                  >
                    &minus;
                  </button>
                  <span className="px-[.8rem] py-[.4rem] text-[1.2rem]">
                    {count}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="w-fit rounded-[.8rem] border border-transparent bg-secondary px-[.8rem] py-[.4rem] text-[1.2rem]"
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={() => {
                    // edit request note
                  }}
                  className="bg-activeTab hover:text-activeTab rounded-[.8rem] text-primary hover:bg-primary"
                >
                  {<Edit3 />}
                </Button>
              </div>
            </div>
          </div>

          <div className="my-[.8rem] flex w-[30rem] items-center gap-[1.2rem] px-[1.2rem] py-[.8rem]">
            <Image src={efoRiro} alt="efo" className="w-[5.6rem]" />
            <div className="flex w-full flex-col gap-[1.2rem]">
              <div className="w-fit">
                <h3 className="text-[1.5rem] font-medium">Ofada stew</h3>
                <div className="flex w-fit justify-between gap-[.4rem] font-normal text-accent [&>span]:text-[1.2rem]">
                  <span>Note:</span>
                  <span className="text-foreground">Make it spicy</span>
                </div>
                <div className="w-fit">
                  <span className="text-cartPrice text-[1.4rem] font-semibold">
                    100000
                  </span>
                  <span className="text-[1.2rem]">/500kg</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[.4rem]">
                  <button
                    onClick={handleDecrement}
                    className="w-fit rounded-[.8rem] border border-transparent bg-secondary px-[.8rem] py-[.4rem] text-[1.2rem]"
                  >
                    &minus;
                  </button>
                  <span className="px-[.8rem] py-[.4rem] text-[1.2rem]">
                    {count}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="w-fit rounded-[.8rem] border border-transparent bg-secondary px-[.8rem] py-[.4rem] text-[1.2rem]"
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={() => {
                    // edit request note
                  }}
                  className="bg-activeTab hover:text-activeTab rounded-[.8rem] text-primary hover:bg-primary"
                >
                  {<Edit3 />}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-[30rem] items-center gap-[1.2rem] px-[1.2rem] py-[.8rem]">
            <Image src={efoRiro} alt="efo" className="w-[5.6rem]" />
            <div className="flex w-full flex-col gap-[1.2rem]">
              <div className="w-fit">
                <h3 className="text-[1.5rem] font-medium">Ofada stew</h3>
                <div className="flex w-fit justify-between gap-[.4rem] font-normal text-accent [&>span]:text-[1.2rem]">
                  <span>Note:</span>
                  <span className="text-foreground">Make it spicy</span>
                </div>
                <div className="w-fit">
                  <span className="text-cartPrice text-[1.4rem] font-semibold">
                    100000
                  </span>
                  <span className="text-[1.2rem]">/500kg</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[.4rem]">
                  <button
                    onClick={handleDecrement}
                    className="w-fit rounded-[.8rem] border border-transparent bg-secondary px-[.8rem] py-[.4rem] text-[1.2rem]"
                  >
                    &minus;
                  </button>
                  <span className="px-[.8rem] py-[.4rem] text-[1.2rem]">
                    {count}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="w-fit rounded-[.8rem] border border-transparent bg-secondary px-[.8rem] py-[.4rem] text-[1.2rem]"
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={() => {
                    // edit request note
                  }}
                  className="bg-activeTab hover:text-activeTab rounded-[.8rem] text-primary hover:bg-primary"
                >
                  {<Edit3 />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
