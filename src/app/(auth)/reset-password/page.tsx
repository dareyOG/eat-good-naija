'use client';

import AuthHeader from '@/components/auth-header';
import ActionBtn from '@/components/button-cta';
import Formfield from '@/components/form-field';
import FormInput from '@/components/form-input';

function ResetPassword() {
  return (
    <section className="flex flex-col gap-[3.2rem] w-full md:h-auto lg:h-screen p-[3.2rem]">
      <div className="flex gap-[2.4rem] flex-col justify-center items-center w-fit mx-auto">
        <AuthHeader />
        <h2 className="font-bold text-[2.4rem] text-foreground">Reset your password</h2>
      </div>
      <div className="flex flex-col gap-[2.4rem]">
        <Formfield label="Password">
          <FormInput id="password" type="password" errorMessage="" icon={<p>icon</p>} />
        </Formfield>
        <Formfield label="Confirm password">
          <FormInput id="password" type="password" errorMessage="" icon={<p>icon</p>} />
        </Formfield>

        <ActionBtn
          buttonText="Reset Password"
          handleClick={() => {
            // open order successful modal
          }}
        />
      </div>
    </section>
  );
}

export default ResetPassword;
