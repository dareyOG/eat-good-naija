import Cards from "@/app/(home)/services/components/services-card";

function Services() {
  return (
    <section className="flex flex-col gap-[2.4rem] text-center text-[3rem] md:text-[4.5rem]">
      <h2 className="mx-auto text-nowrap font-bold capitalize">
        what we serve
      </h2>
      <Cards />
    </section>
  );
}

export default Services;
