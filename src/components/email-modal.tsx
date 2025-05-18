import Image from "next/image";

import ActionBtn from "@/components/button-cta";
import newMessage from "@/assets/newMessages.svg";

function EmailModal() {
  return (
    <section className="flex flex-col items-center justify-center gap-[2.4rem] rounded-[1.6rem]">
      <Image src={newMessage} alt="new mail" />
      <h2 className="text-center text-[2.3rem] font-semibold capitalize text-primary">
        email sent successfully!
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

export default EmailModal;
