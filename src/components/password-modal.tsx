import Image from "next/image";

import ActionBtn from "@/components/button-cta";
import accessDenied from "@/assets/accessDenied.svg";

function PasswordModal() {
  return (
    <section className="flex flex-col items-center justify-center gap-[2.4rem] rounded-[1.6rem]">
      <Image src={accessDenied} alt="new mail" />
      <h2 className="text-center text-[2.3rem] font-semibold capitalize text-primary">
        Password updated Successfully!
      </h2>
      <ActionBtn
        handleClick={() => {
          // close modal
        }}
        btnTitle="Continue"
      />
    </section>
  );
}

export default PasswordModal;
