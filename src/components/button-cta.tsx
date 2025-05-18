"use client";

import React, { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

function ActionBtn({
  btnTitle,
  variant = "default",
  logToPath,
  footerText,
  footerLink,
  footerLinkText,
  handleClick,
  btnStyling = " px-[2.4rem] py-[1.2rem]",
}: {
  btnTitle: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  logToPath?: string;
  footerText?: string;
  footerLink?: string;
  footerLinkText?: string;
  handleClick?: () => void;
  btnStyling?: string;
}) {
  const router = useRouter();

  const baseStyle =
    btnTitle === "Login"
      ? "flex flex-col gap-[3.2rem] items-center mb-[5rem]"
      : "flex flex-col gap-[3.2rem] items-center";

  return (
    <div className={baseStyle}>
      <Button
        variant={variant}
        onClick={(e: FormEvent) => {
          e.preventDefault();
          handleClick?.();
          // navigate to path
          if (logToPath) router.push(logToPath);
        }}
        className={`h-[4.4rem] w-full rounded-[1.6rem] ${btnStyling} text-[1.4rem] capitalize focus:outline-none focus:outline-offset-0`}
      >
        {btnTitle}
      </Button>
      {footerLink && (
        <footer className="flex gap-x-2">
          <span className="text-[1.4rem] text-muted-foreground">
            {footerText}
          </span>
          <Link
            href={footerLink}
            className="text-[1.4rem] font-semibold text-primary hover:underline hover:underline-offset-4"
          >
            {footerLinkText}
          </Link>
        </footer>
      )}
    </div>
  );
}

export default ActionBtn;
