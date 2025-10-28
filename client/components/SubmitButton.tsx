'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size={'lg'}
      className="mt-4 text-xl w-full lg:w-fit"
      disabled={pending}
    >
      {pending ? 'Sending...' : 'Send Message'}
      <Mail className="size-5" />
      {/* <MailCheck className="size-5" /> on success */}
    </Button>
  );
}

export default SubmitButton;
