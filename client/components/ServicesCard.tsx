import Image from 'next/image';

import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { LucideCheck } from 'lucide-react';

type ServiceCardProp = {
  service: string;
  description: string;
  image: string;
}[];

const serviceCards: ServiceCardProp = [
  {
    service: 'smooth order',
    description: 'You only need a few steps in ordering food',
    image: '/assets/Orderfood-pana.png',
  },
  {
    service: 'fast delivery',
    description: 'Delivery that is always on time even faster',
    image: '/assets/TakeAway-rafiki.png',
  },
  {
    service: 'premium quality',
    description: 'Not only fast for us, quality is also number one',
    image: '/assets/Waiters-rafiki.png',
  },
];

function ServiceCards() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] px-16 gap-14 lg:px-0 lg:gap-10">
      {serviceCards.map((card) => (
        <Card
          className="group flex flex-col justify-between border-0 lg:border lg:border-transparent rounded-lg p-10 lg:p-5 duration-300 ease-in-out  lg:hover:-translate-y-3 lg:hover:shadow-2xl"
          key={card.service}
        >
          <Image
            src={card.image}
            alt={card.service}
            width={200}
            height={200}
            priority
            className="mx-auto"
          />
          <CardHeader className="flex gap-4 p-0 flex-col md:justify-center lg:justify-normal">
            <CardTitle className="m-auto flex w-fit items-center gap-x-5 font-bold capitalize text-primary md:m-0 lg:m-auto">
              <span className="tracking-wide text-[1.4rem] lg:text-[2.8rem]">
                {card.service}
              </span>
              <span className="hidden lg:invisible lg:group-hover:visible">
                <LucideCheck />
              </span>
            </CardTitle>
            <CardDescription className="mx-auto w-full max-w-[300px] text-[1.4rem] lg:text-[2.8rem] font-light lg:group-hover:text-primary">
              {card.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default ServiceCards;
