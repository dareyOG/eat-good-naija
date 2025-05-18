"use client";

import AuthHeader from "@/components/auth-header";
import ActionBtn from "@/components/button-cta";
import Formfield from "@/components/form-field";
import FormInput from "@/components/form-input";

function ResetPassword() {
  return (
    <section className="flex w-full flex-col gap-[3.2rem] p-[3.2rem] md:h-auto lg:h-screen">
      <div className="mx-auto flex w-fit flex-col items-center justify-center gap-[2.4rem]">
        <AuthHeader />
        <h2 className="text-[2.4rem] font-bold text-foreground">
          Reset your password
        </h2>
      </div>
      <div className="flex flex-col gap-[2.4rem]">
        <Formfield label="Password">
          <FormInput
            id="password"
            type="password"
            errorMessage=""
            icon={<p>icon</p>}
          />
        </Formfield>
        <Formfield label="Confirm password">
          <FormInput
            id="password"
            type="password"
            errorMessage=""
            icon={<p>icon</p>}
          />
        </Formfield>

        <ActionBtn
          btnTitle="Reset Password"
          handleClick={() => {
            // open order successful modal
          }}
        />
      </div>
    </section>
  );
}

export default ResetPassword;
