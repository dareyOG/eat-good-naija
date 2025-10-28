import ServiceCards from './ServicesCard';

function Services() {
  return (
    <section
      id="services"
      className="flex flex-col gap-10 text-center text-[3rem] md:text-[4.5rem]"
    >
      <div className="space-y-5">
        <div className="flex items-center">
          <div className=" h-1 w-full bg-primary"></div>
          <h2 className=" text-nowrap px-5 text-[1.8rem] font-semibold tracking-[16%] uppercase text-primary">
            what we serve
          </h2>
          <div className=" h-1 w-full bg-primary"></div>
        </div>
        <div className="font-mono text-[4.5rem] capitalize  mx-auto w-full max-w-[53.2rem] font-bold leading-24">
          your favourite food delivery partner
        </div>
      </div>
      <ServiceCards />
    </section>
  );
}

export default Services;
