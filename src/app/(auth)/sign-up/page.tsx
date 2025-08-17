"use client";

import AuthHeader from "@/components/auth-header";
import GoogleSignInBtn from "@/components/google-sign-in-button";
import SignUpForm from "@/components/sign-up-form";

function SignUpPage() {
  return (
    <section className="flex w-full flex-col gap-[3.2rem] p-[3.2rem] md:h-auto lg:h-screen">
      <div className="mx-auto flex w-fit flex-col items-center justify-center gap-[2.4rem]">
        <AuthHeader />
        <h2 className="text-[2.4rem] font-bold text-foreground">
          Create a new account
        </h2>
      </div>
      <div className="flex flex-col gap-[2.4rem]">
        <GoogleSignInBtn text="Sign up with Google" />

        <SignUpForm />
      </div>
    </section>
  );
}

export default SignUpPage;
