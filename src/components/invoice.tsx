"use client";

import ActionBtn from "./button-cta";

function Invoice() {
  return (
    <aside className="flex w-full max-w-[30rem] flex-col gap-[2.4rem] border-t border-t-divider p-[2.4rem]">
      <div className="flex flex-col divide-y divide-solid divide-divider">
        <div className="flex flex-col gap-[.6rem] pb-[1.6rem]">
          <div className="flex justify-between">
            <span className="text-[1.4rem] text-secondary-foreground">
              Items
            </span>
            <span className="text-[1.6rem]">120000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[1.4rem] text-secondary-foreground">
              Tax (12%)
            </span>
            <span className="text-[1.6rem]">12000</span>
          </div>
        </div>
        <div className="flex justify-between pt-[1.6rem]">
          <span className="text-[1.4rem] text-secondary-foreground">Total</span>
          <span className="text-[1.6rem] font-semibold">132000</span>
        </div>
      </div>

      <ActionBtn
        btnTitle="make payment"
        handleClick={() => {
          // payment logic stays here
        }}
      />
    </aside>
  );
}

export default Invoice;
