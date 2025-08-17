import Image from "next/image";
import { Button } from "./ui/button";

import Google from "@/assets/Google.svg";

function GoogleSignInBtn({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-[2.4rem]">
      <Button
        variant={"secondary"}
        onClick={() => {
          // Handle Google sign-up here
        }}
        className="bg-white mx-auto flex h-[4.8rem] w-full max-w-[43.6rem] gap-[0.8rem] rounded-[0.8rem] border border-border px-[1.6rem] py-[1.2rem] text-[1.4rem] font-normal focus-within:ring-offset-0 focus:outline focus:outline-transparent focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Image src={Google} alt="google" width={24} height={24} />
        <span className="text-[1.4rem] text-accent-foreground">{text}</span>
      </Button>
      <div className="flex items-center gap-[1.6rem]">
        <div className="h-[1px] w-full bg-[#eaebec]"></div>
        <p className="text-[1.4rem] uppercase text-accent-foreground">or</p>
        <div className="h-[1px] w-full bg-[#eaebec]"></div>
      </div>
    </div>
  );
}

export default GoogleSignInBtn;
