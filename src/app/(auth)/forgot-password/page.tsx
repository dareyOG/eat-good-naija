"use client";

import AuthHeader from "@/components/auth-header";
import Formfield from "@/components/form-field";
import FormInput from "@/components/form-input";
import ActionBtn from "@/components/button-cta";

function ForgotPassword() {
  return (
    <section className="flex w-full flex-col gap-[3.2rem] p-[3.2rem] md:h-auto lg:h-screen">
      <div className="mx-auto flex w-fit flex-col items-center justify-center gap-[2.4rem]">
        <AuthHeader />
        <div className="text-center">
          <h2 className="text-[2.4rem] font-bold text-foreground">
            Reset your password
          </h2>
          <p className="text-center text-[1.4rem] text-muted-foreground">
            Enter your email below and we&apos;ll send you instructions on how
            to reset your password.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[2.4rem]">
        <Formfield label="Email">
          <FormInput
            id="email"
            type="email"
            errorMessage=""
            icon={<p>icon</p>}
          />
        </Formfield>

        <ActionBtn
          handleClick={() => {
            //  open email modal
          }}
          btnTitle="Send reset instructions"
          footerText="Go back to"
          footerLink="/sign-in"
          footerLinkText="Sign in"
        />
      </div>
    </section>
  );
}

export default ForgotPassword;
