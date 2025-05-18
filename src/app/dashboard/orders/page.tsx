"use client";

import Cart from "@/components/cart";
import Invoice from "@/components/invoice";

function Orders() {
  return (
    <section className="flex gap-10">
      <div className="no-scrollbar flex h-full max-h-[50rem] w-full max-w-[84rem] flex-col gap-[2.4rem] overflow-y-auto">
        <div className="hover:shadow-order flex max-w-[84rem] cursor-pointer justify-between rounded-[1.2rem] border border-transparent px-[1.6rem] py-[.8rem] hover:border-primary">
          <div className="flex w-fit flex-col justify-between gap-[2.4rem]">
            <div className="flex items-center gap-[.4rem]">
              <span className="text-[1.8rem] font-medium text-secondary-foreground">
                Order ID:
              </span>
              <span className="text-[2rem] font-semibold">90762</span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium text-secondary-foreground">
                Total:
              </span>
              <span className="text-[1.8rem] font-medium">120000</span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between gap-[1.6rem]">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.8rem] font-medium capitalize text-secondary-foreground">
                payment method:
              </span>
              <span className="text-[1.6rem] capitalize text-accent-foreground">
                debit card
              </span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                shipping method:
              </span>
              <span className="text-[1.6rem] font-medium capitalize text-accent-foreground">
                air
              </span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                delivery address:
              </span>
              <span className="text-[1.6rem] capitalize text-accent-foreground">
                Rasaq-Eletu
              </span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                delivery city:
              </span>
              <span className="text-[1.6rem] text-accent-foreground">
                London, United Kingdom
              </span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.8rem] font-medium capitalize text-secondary-foreground">
                order date:
              </span>
              <span className="text-[1.6rem] text-accent-foreground">
                12 Jun 2023
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-end text-[1.6rem] font-medium capitalize text-secondary-foreground">
                ratings:
              </span>
              <span className="text-[1.8rem] font-medium text-destructive">
                ****
              </span>
            </div>
          </div>
        </div>
        {/* duplicates */}
        <div className="hover:shadow-order flex max-w-[84rem] cursor-pointer justify-between rounded-[1.2rem] border border-transparent px-[1.6rem] py-[.8rem] hover:border-primary">
          <div className="flex w-fit flex-col justify-between gap-[2.4rem]">
            <div className="flex items-center gap-[.4rem]">
              <span className="text-[1.8rem] font-medium text-secondary-foreground">
                Order ID:
              </span>
              <span className="text-[2rem] font-semibold">90762</span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium text-secondary-foreground">
                Total:
              </span>
              <span className="text-[1.8rem] font-medium">120000</span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between gap-[1.6rem]">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.8rem] font-medium capitalize text-secondary-foreground">
                payment method:
              </span>
              <span className="text-[1.6rem] capitalize text-accent-foreground">
                debit card
              </span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                shipping method:
              </span>
              <span className="text-[1.6rem] font-medium capitalize text-accent-foreground">
                air
              </span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                delivery address:
              </span>
              <span className="text-[1.6rem] capitalize text-accent-foreground">
                Rasaq-Eletu
              </span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                delivery city:
              </span>
              <span className="text-[1.6rem] text-accent-foreground">
                London, United Kingdom
              </span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.8rem] font-medium capitalize text-secondary-foreground">
                order date:
              </span>
              <span className="text-[1.6rem] text-accent-foreground">
                12 Jun 2023
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-end text-[1.6rem] font-medium capitalize text-secondary-foreground">
                ratings:
              </span>
              <span className="text-[1.8rem] font-medium text-destructive">
                ****
              </span>
            </div>
          </div>
        </div>
        <div className="hover:shadow-order flex max-w-[84rem] cursor-pointer justify-between rounded-[1.2rem] border border-transparent px-[1.6rem] py-[.8rem] hover:border-primary">
          <div className="flex w-fit flex-col justify-between gap-[2.4rem]">
            <div className="flex items-center gap-[.4rem]">
              <span className="text-[1.8rem] font-medium text-secondary-foreground">
                Order ID:
              </span>
              <span className="text-[2rem] font-semibold">90762</span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium text-secondary-foreground">
                Total:
              </span>
              <span className="text-[1.8rem] font-medium">120000</span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between gap-[1.6rem]">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.8rem] font-medium capitalize text-secondary-foreground">
                payment method:
              </span>
              <span className="text-[1.6rem] capitalize text-accent-foreground">
                debit card
              </span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                shipping method:
              </span>
              <span className="text-[1.6rem] font-medium capitalize text-accent-foreground">
                air
              </span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                delivery address:
              </span>
              <span className="text-[1.6rem] capitalize text-accent-foreground">
                Rasaq-Eletu
              </span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                delivery city:
              </span>
              <span className="text-[1.6rem] text-accent-foreground">
                London, United Kingdom
              </span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.8rem] font-medium capitalize text-secondary-foreground">
                order date:
              </span>
              <span className="text-[1.6rem] text-accent-foreground">
                12 Jun 2023
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-end text-[1.6rem] font-medium capitalize text-secondary-foreground">
                ratings:
              </span>
              <span className="text-[1.8rem] font-medium text-destructive">
                ****
              </span>
            </div>
          </div>
        </div>
        <div className="hover:shadow-order flex max-w-[84rem] cursor-pointer justify-between rounded-[1.2rem] border border-transparent px-[1.6rem] py-[.8rem] hover:border-primary">
          <div className="flex w-fit flex-col justify-between gap-[2.4rem]">
            <div className="flex items-center gap-[.4rem]">
              <span className="text-[1.8rem] font-medium text-secondary-foreground">
                Order ID:
              </span>
              <span className="text-[2rem] font-semibold">90762</span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium text-secondary-foreground">
                Total:
              </span>
              <span className="text-[1.8rem] font-medium">120000</span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between gap-[1.6rem]">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.8rem] font-medium capitalize text-secondary-foreground">
                payment method:
              </span>
              <span className="text-[1.6rem] capitalize text-accent-foreground">
                debit card
              </span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                shipping method:
              </span>
              <span className="text-[1.6rem] font-medium capitalize text-accent-foreground">
                air
              </span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                delivery address:
              </span>
              <span className="text-[1.6rem] capitalize text-accent-foreground">
                Rasaq-Eletu
              </span>
            </div>
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.6rem] font-medium capitalize text-secondary-foreground">
                delivery city:
              </span>
              <span className="text-[1.6rem] text-accent-foreground">
                London, United Kingdom
              </span>
            </div>
          </div>
          <div className="flex w-fit flex-col justify-between">
            <div className="flex flex-col gap-[.4rem]">
              <span className="text-[1.8rem] font-medium capitalize text-secondary-foreground">
                order date:
              </span>
              <span className="text-[1.6rem] text-accent-foreground">
                12 Jun 2023
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-end text-[1.6rem] font-medium capitalize text-secondary-foreground">
                ratings:
              </span>
              <span className="text-[1.8rem] font-medium text-destructive">
                ****
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Cart />
        <Invoice />
      </div>
    </section>
  );
}

export default Orders;
