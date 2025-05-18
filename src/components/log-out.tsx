"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

import { LogOut } from "lucide-react";

function Logout() {
  const router = useRouter();
  return (
    <Button
      variant={"ghost"}
      onClick={() => {
        // log out
        router.push("/sign-in");
      }}
      className=""
    >
      <LogOut />
    </Button>
  );
}

export default Logout;
