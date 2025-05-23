"use client";

import { useRouter } from "next/navigation";
import ActionBtn from "./button-cta";
import NavLink from "./navLink";

function NavHeader() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between gap-x-[10rem]">
      <NavLink />
      <ActionBtn
        btnTitle={"sign up"}
        logToPath="/sign-up"
        handleClick={() => {
          router.push("/sign-up");
        }}
      />
    </nav>
  );
}

export default NavHeader;
