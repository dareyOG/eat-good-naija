"use client";

import AuthHeader from "@/components/auth-header";
import GoogleSignInBtn from "@/components/google-sign-in-button";
import SignInForm from "@/components/sign-in-form";

function SignInPage() {
  return (
    <section className="flex w-full flex-col gap-[3.2rem] p-[3.2rem] md:h-auto lg:h-screen">
      <div className="mx-auto flex w-fit flex-col items-center justify-center gap-[2.4rem]">
        <AuthHeader />
      </div>
      <div className="flex flex-col gap-[2.4rem]">
        <GoogleSignInBtn text="Sign in with Google" />

        <SignInForm />
      </div>
    </section>
  );
}

export default SignInPage;
