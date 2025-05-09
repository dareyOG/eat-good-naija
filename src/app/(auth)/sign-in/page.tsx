'use client';

import AuthHeader from '@/components/auth-header';
import GoogleSignInBtn from '@/components/google-sign-in-button';
import SignInForm from '@/components/sign-in-form';

function SignInPage() {
  return (
    <section className="flex flex-col gap-[3.2rem] w-full md:h-auto lg:h-screen p-[3.2rem]">
      <div className="flex gap-[2.4rem] flex-col justify-center items-center w-fit mx-auto">
        <AuthHeader />
        <h2 className="font-bold text-[2.4rem] text-foreground">Welcome back to Decagon</h2>
      </div>
      <div className="flex flex-col gap-[2.4rem]">
        <GoogleSignInBtn text="Sign in with Google" />

        <SignInForm />
      </div>
    </section>
  );
}

export default SignInPage;
