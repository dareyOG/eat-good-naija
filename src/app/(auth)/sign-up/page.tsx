'use client';

import AuthHeader from '@/components/auth-header';
import GoogleSignInBtn from '@/components/google-sign-in-button';
import SignUpForm from '@/components/sign-up-form';

function SignUpPage() {
  return (
    <section className="flex flex-col gap-[3.2rem] w-full md:h-auto lg:h-screen p-[3.2rem]">
      <div className="flex gap-[2.4rem] flex-col justify-center items-center w-fit mx-auto">
        <AuthHeader />
        <h2 className="font-bold text-[2.4rem] text-foreground">Create a new account</h2>
      </div>
      <div className="flex flex-col gap-[2.4rem]">
        <GoogleSignInBtn text="Sign up with Google" />

        <SignUpForm />
      </div>
    </section>
  );
}

export default SignUpPage;
