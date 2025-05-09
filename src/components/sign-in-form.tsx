import Link from 'next/link';
import Formfield from './form-field';
import FormInput from './form-input';
import { buttonVariants } from './ui/button';
import ActionBtn from './button-cta';

function SignInForm() {
  return (
    <form onSubmit={() => {}} className="flex flex-col gap-[2.4rem]">
      <Formfield label="Email">
        <FormInput type="email" id="email" icon={<p>icon</p>} errorMessage={''} />
      </Formfield>

      <Formfield label="Password">
        <FormInput type="password" id="password" icon={<p>icon</p>} errorMessage={''} />
      </Formfield>

      <Link
        href={'/forgot-password'}
        className={
          buttonVariants({ variant: 'link' }) +
          ' w-fit underline focus:outline-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-within:ring-offset-0 rounded-0 text-[1.42rem] font-normal'
        }
      >
        Forgot password
      </Link>

      <ActionBtn
        handleClick={() => {
          // sign in
        }}
        buttonText="login"
        logToPath="/dashboard"
        footerText="Don't have an account?"
        footerLink="/sign-up"
        footerLinkText="Sign Up here"
      />
    </form>
  );
}

export default SignInForm;
