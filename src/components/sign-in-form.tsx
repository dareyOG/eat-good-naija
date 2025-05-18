import Link from "next/link";
import Formfield from "./form-field";
import FormInput from "./form-input";
import { buttonVariants } from "./ui/button";
import ActionBtn from "./button-cta";

function SignInForm() {
  return (
    <form onSubmit={() => {}} className="flex flex-col gap-[2.4rem]">
      <Formfield label="Email">
        <FormInput
          type="email"
          id="email"
          icon={<p>icon</p>}
          errorMessage={""}
        />
      </Formfield>

      <Formfield label="Password">
        <FormInput
          type="password"
          id="password"
          icon={<p>icon</p>}
          errorMessage={""}
        />
      </Formfield>

      <Link
        href={"/forgot-password"}
        className={
          buttonVariants({ variant: "link" }) +
          " rounded-0 w-fit text-[1.42rem] font-normal underline focus-within:ring-offset-0 focus:outline-transparent focus-visible:ring-0 focus-visible:ring-transparent"
        }
      >
        Forgot password
      </Link>

      <ActionBtn
        btnTitle=" login"
        variant="default"
        logToPath="/dashboard"
        footerText="Don't have an account?"
        footerLink="/sign-up"
        footerLinkText="Sign Up here"
        handleClick={() => {
          // sign in
        }}
      />
    </form>
  );
}

export default SignInForm;
