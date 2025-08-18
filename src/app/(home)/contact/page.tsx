import { Mail, MapPin, Phone } from "lucide-react";

const contacts = [
  {
    location: "Lekki",
    address: "123 Adedeji crescent, Lekki, Lagos",
    phone: "+234 800 123 4567",
  },
  {
    location: "Yaba",
    address: "12A Mark Hughes Avenue, Alagomerin, Yaba",
    phone: "+234 800 123 4567",
  },
  {
    location: "Abuja",
    address: "Jabi Mall, Jabi, Abuja",
    phone: "+234 800 234 5678",
  },
  {
    location: "Abuja",
    address: "Capital Road, Lugbe, Abuja",
    phone: "+234 800 234 5678",
  },
  {
    location: "Port Harcourt",
    address: "789 Wilber Inyang Avenue, off GRA, Port Harcourt",
    phone: "+234 800 345 6789",
  },
  {
    location: "Port Harcourt",
    address: "Governor's road, Port Harcourt",
    phone: "+234 800 345 6789",
  },
  {
    location: "Kano",
    address: " 101 Market Road, Sabon Gari, Kano",
    phone: "+234 800 456 7890",
  },
  {
    location: "Niger",
    address: "FUTMinna main campus, Bosso, Minna",
    phone: "+234 800 456 7890",
  },
  {
    location: "Akwa Ibom",
    address: "202 Palms drive, Uyo",
    phone: "+234 800 567 8901",
  },
  {
    location: "Akwa Ibom",
    address: "Campus road, Ikot, Uyo",
    phone: "+234 800 567 8901",
  },
  {
    location: "Owerri",
    address: "32B Heritage Street, Ganduje road, Owerri",
    phone: "+234 800 678 9012",
  },
  {
    location: "Onitsha",
    address: "Isi-Agu way, opposite Cubana Events hall and gardens, Onitsha",
    phone: "+234 800 678 9012",
  },
];
function Contact() {
  return (
    <section className="space-y-10">
      <section>
        <h2 className="text-[2.5rem] font-bold capitalize leading-[6rem]">
          Our Offices
        </h2>
        <div className="flex flex-col gap-y-10 text-[1.5rem]">
          <p>
            If you have any questions or need assistance, feel free to reach out
            to us through the contact information below. We are here to help!
          </p>
          <div className="mt-4 space-y-2.5">
            <div className="flex items-center gap-2">
              <div>
                <MapPin />
              </div>
              <address>1 continental drive, secretariat, Ikeja Lagos</address>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <Phone />
              </div>
              <a href="tel:+2348001234567" className="text-blue-500 underline">
                +234 800 123 4567
              </a>
            </div>
            <p className="flex items-center gap-2">
              <div>
                <Mail />
              </div>
              <a
                href="mailto:info@eatgoodnaija.com"
                className="underline hover:text-blue-500 hover:no-underline"
              >
                info@eatgoodnaija.com
              </a>
            </p>
          </div>

          <p className="italic">or any of our nationwide branches:</p>

          <ul className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-12">
            {contacts.map((Contact, index) => (
              <li key={index} className="">
                {" "}
                <h2 className="text-[1.5rem] font-semibold">
                  {Contact.location} office
                </h2>
                <div className="mt-4 space-y-5">
                  <div className="flex items-center gap-2">
                    <div>
                      <MapPin />
                    </div>
                    <address>{Contact.address}</address>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Phone />
                    </div>
                    <a
                      href={`tel:${Contact.phone}`}
                      className="underline hover:text-blue-500 hover:no-underline"
                    >
                      {Contact.phone}
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-[2.5rem] font-bold capitalize leading-[6rem]">
          Get in Touch
        </h2>
        <p className="text-[1.5rem]">
          We would love to hear from you! <br /> Please fill out the form below,
          and we will get back to you as soon as possible.
        </p>
        <form className="mt-8 space-y-4">
          <div className="flex flex-col gap-x-8 lg:flex-row">
            <div className="flex w-full flex-col">
              <label htmlFor="name" className="text-[1.2rem] font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border p-2 text-[1.2rem]"
              />
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="email" className="text-[1.2rem] font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border p-2 text-[1.2rem]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-[1.2rem] font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="border p-2 text-[1.2rem]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>
    </section>
  );
}

export default Contact;
