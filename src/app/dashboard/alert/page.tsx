"use client";

import ActionBtn from "@/components/button-cta";
import { CheckIcon } from "lucide-react";

const alertupdates = [
  { icon: "icon", title: "Order received", time: "time" },
  { icon: "icon", title: "Order is being prepared", time: "time" },
  { icon: "icon", title: "Order ready", time: "time" },
  { icon: "icon", title: "in transit", time: "time" },
  { icon: "icon", title: "Customs Clearance", time: "time" },
  { icon: "icon", title: "Your Order is on its way", time: "time" },
  { icon: "icon", title: "Delivered", time: "time" },
];

function Alert() {
  return (
    <section className="flex w-[117.7rem] flex-col gap-[1.6rem]">
      <div className="flex items-center gap-[2.4rem] px-[1.6rem] py-[.8rem]">
        <div className="flex aspect-square w-[5rem] items-center justify-center rounded-full bg-primary text-background">
          <CheckIcon />
        </div>

        <div className="flex w-[107.1rem] justify-between">
          <div className="flex w-fit flex-col justify-between gap-[2.4rem]">
            <div className="flex items-center gap-[.4rem]">
              <span className="text-[1.8rem] font-medium text-secondary-foreground">
                Order ID:
              </span>
              <span className="text-[2rem] font-semibold">907623</span>
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
            <div className="flex flex-col items-end gap-[.4rem]">
              <span className="text-[1.8rem] font-medium capitalize text-secondary-foreground">
                order date:
              </span>
              <span className="text-[1.6rem] text-accent-foreground">
                12 Jun 2023
              </span>
            </div>

            <ActionBtn btnTitle="rate this delivery" handleClick={() => {}} />
          </div>
        </div>
      </div>
      <div>
        {alertupdates.map((alert) => (
          <div
            key={alert.title}
            className="flex items-center gap-[2.4rem] pl-[5rem]"
          >
            <div className="aspect-square w-[3.2rem]">{alert.icon}</div>
            <div className="flex flex-col gap-[.4rem]">
              <p className="text-[1.6rem]">{alert.title}</p>
              <p className="text-[1.4rem] text-accent-foreground">
                {alert.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Alert;
