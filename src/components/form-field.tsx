import React from 'react';

function Formfield({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[0.4rem]">
      <label htmlFor={label} className="text-[1.4rem] text-primary">
        {label}
      </label>
      {children}
    </div>
  );
}

export default Formfield;
