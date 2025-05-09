'use client';

import Link from 'next/link';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

function ActionBtn({
  buttonText,
  logToPath,
  footerText,
  footerLink,
  footerLinkText,
  handleClick
}: {
  buttonText: string;
  logToPath?: string;
  footerText?: string;
  footerLink?: string;
  footerLinkText?: string;
  handleClick: () => void;
}) {
  const router = useRouter();

  const baseStyle =
    buttonText === 'Login'
      ? 'flex flex-col gap-[3.2rem] items-center mb-[5rem]'
      : 'flex flex-col gap-[3.2rem] items-center';

  return (
    <div className={baseStyle}>
      <Button
        variant={'default'}
        onClick={(e: FormEvent) => {
          e.preventDefault();
          handleClick();
          // navigate to path
          if (logToPath) router.push(logToPath);
        }}
        className=" px-[2.4rem] text-[1.4rem] py-[1.2rem] rounded-[1.6rem] h-[4.4rem] w-full focus:outline-none focus:outline-offset-0"
      >
        {buttonText}
      </Button>
      {footerLink && (
        <footer className="flex gap-x-2">
          <span className="text-[1.4rem] text-muted-foreground">{footerText}</span>
          <Link
            href={footerLink}
            className=" text-primary font-semibold text-[1.4rem] hover:underline hover:underline-offset-4"
          >
            {footerLinkText}
          </Link>
        </footer>
      )}
    </div>
  );
}

export default ActionBtn;
