import { ReactNode } from 'react';

function FormInput({
  id,
  type,
  icon,
  errorMessage,
  disclaimer
}: {
  id: 'name' | 'email' | 'phone' | 'password';
  type: 'text' | 'email' | 'password';
  icon: ReactNode;
  errorMessage: string;
  disclaimer?: string;
}) {
  return (
    <div className="">
      <span>{icon}</span>
      <input
        type={type}
        id={id}
        required
        className="w-full focus:outline focus:outline-transparent focus-visible:ring-2 focus-visible:ring-primary focus-within:ring-offset-0 bg-secondary text-input rounded-[0.8rem] px-[1.2rem] py-[0.8rem] text-[1.6rem]"
      />
      <div className="flex w-full justify-between">
        <p className="text-[1.2rem] text-input">{disclaimer}</p>
        {errorMessage && <p className="text-destructive text-[1.2rem] text-end">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default FormInput;

// flex gap-[0.8rem] w-full max-w-[43.6rem] h-[4.8rem] rounded-[0.8rem] py-[1.2rem] px-[1.6rem] focus:outline focus:outline-transparent focus-visible:ring-2 focus-visible:ring-primary focus-within:ring-offset-0 border border-gray-300 bg-white text-[1.4rem] font-normal
