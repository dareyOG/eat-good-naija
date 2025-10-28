import SubmitButton from './SubmitButton';

function ContactForm() {
  const sendMessage = async (formData: FormData) => {
    'use server';

    // collect message data
    const message = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    console.log('Message received:', message);

    // send message to email service or database
  };

  return (
    <form action={sendMessage} className="mt-8 space-y-4">
      <div className="flex flex-col gap-x-8 lg:flex-row">
        <div className="flex w-full flex-col">
          <label
            htmlFor="name"
            className="text-[1.5rem] font-semibold text-primary"
          >
            Name [first name, last name]
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="rounded-lg border px-2 py-4 text-[2rem] text-primary focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex w-full flex-col">
          <label
            htmlFor="email"
            className="text-[1.5rem] font-semibold text-primary"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="rounded-lg border px-2 py-4 text-[2rem] text-primary focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-[1.5rem] font-semibold text-primary"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          required
          className="rounded-lg border p-2 text-[2rem] text-primary focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </div>
      <div className="flex items-center lg:justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}

export default ContactForm;
