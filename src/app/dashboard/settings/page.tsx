"use client";

import ActionBtn from "@/components/button-cta";
import Formfield from "@/components/form-field";
import FormInput from "@/components/form-input";

function Settings() {
  return (
    <section className="flex justify-between gap-[5rem] pr-[10rem]">
      <div className="flex flex-col gap-[2rem]">
        <div className="flex w-full max-w-[80rem] gap-[2.4rem]">
          <ActionBtn
            btnTitle="reset password"
            variant="secondary"
            handleClick={() => {}}
            btnStyling="px-[1.2rem] py-[.6rem] hover:bg-activeTab hover:text-primary"
          />
          <ActionBtn
            btnTitle="payment methods"
            variant="secondary"
            handleClick={() => {}}
            btnStyling="px-[1.2rem] py-[.6rem] hover:bg-activeTab hover:text-primary"
          />
        </div>
        <form onSubmit={() => {}} className="w-[52rem]">
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
          <Formfield label="Confirm password">
            <FormInput
              type="password"
              id="confirmPassword"
              icon={<p>icon</p>}
              errorMessage={""}
            />
          </Formfield>
        </form>
      </div>
      <ActionBtn btnTitle="save changes" handleClick={() => {}} />
    </section>
  );
}

export default Settings;
