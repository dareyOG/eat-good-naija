'use client';

import AuthHeader from '@/components/auth-header';
import Formfield from '@/components/form-field';
import FormInput from '@/components/form-input';
import ActionBtn from '@/components/button-cta';

function ForgotPassword() {
  return (
    <section className="flex flex-col gap-[3.2rem] w-full md:h-auto lg:h-screen p-[3.2rem]">
      <div className="flex gap-[2.4rem] flex-col justify-center items-center w-fit mx-auto">
        <AuthHeader />
        <div className="text-center">
          <h2 className="font-bold text-[2.4rem] text-foreground">Reset your password</h2>
          <p className="text-[1.4rem] text-muted-foreground text-center">
            Enter your email below and we&apos;ll send you instructions on how to reset your
            password.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[2.4rem]">
        <Formfield label="Email">
          <FormInput id="email" type="email" errorMessage="" icon={<p>icon</p>} />
        </Formfield>

        <ActionBtn
          handleClick={() => {
            //  open email modal
          }}
          buttonText="Send reset instructions"
          footerText="Go back to"
          footerLink="/sign-in"
          footerLinkText="Sign in"
        />
      </div>
    </section>
  );
}

export default ForgotPassword;
