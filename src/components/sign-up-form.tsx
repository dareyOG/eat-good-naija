import Formfield from './form-field';
import FormInput from './form-input';
import ActionBtn from './button-cta';

function SignUpForm() {
  return (
    <form
      onSubmit={() => {
        // navigate to sign in
      }}
      className="flex flex-col gap-[2.4rem]"
    >
      <Formfield label="Full name">
        <FormInput
          type="text"
          id="name"
          icon={<p>icon</p>}
          errorMessage={''}
          disclaimer="first name comes first"
        />
      </Formfield>
      <Formfield label="Email">
        <FormInput type="email" id="email" icon={<p>icon</p>} errorMessage={''} />
      </Formfield>
      <Formfield label="Phone number">
        <FormInput type="text" id="phone" icon={<p>icon</p>} errorMessage={''} />
      </Formfield>
      <Formfield label="Password">
        <FormInput type="password" id="password" icon={<p>icon</p>} errorMessage={''} />
      </Formfield>
      <Formfield label="Confirm password">
        <FormInput type="password" id="password" icon={<p>icon</p>} errorMessage={''} />
      </Formfield>

      <ActionBtn
        buttonText="Login"
        logToPath="/sign-in"
        footerText="Already have an account?"
        footerLink="/sign-in"
        footerLinkText="Sign in here"
        handleClick={() => {}}
      />
    </form>
  );
}

export default SignUpForm;
