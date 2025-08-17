import orderFood from "@/assets/Orderfood-pana.png";
import takeAway from "@/assets/TakeAway-rafiki.png";
import waiters from "@/assets/Waiters-rafiki.png";

import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

type CardProp = {
  header: string;
  text: string;
  image: StaticImageData;
};

const cards: CardProp[] = [
  {
    header: "easy to order",
    text: "You only need a few steps in ordering food",
    image: orderFood,
  },
  {
    header: "fastest delivery",
    text: "Delivery that is always ontime even faster",
    image: takeAway,
  },
  {
    header: "best quality",
    text: "Not only fast for us, quality is also number one",
    image: waiters,
  },
];

function Cards() {
  return (
    <div className="flex flex-col items-center justify-center gap-[3.2rem] lg:flex-row">
      {cards.map((card) => (
        <Card
          className="group flex flex-col justify-between rounded-lg p-5 duration-300 ease-in-out md:flex-row-reverse md:border-0 md:odd:flex-row lg:flex-col lg:odd:flex-col lg:hover:-translate-y-3 lg:hover:shadow-2xl"
          key={card.header}
        >
          <div className="flex justify-center">
            <Image
              src={card.image}
              width={230}
              height={230}
              alt={card.header}
            />
          </div>

          <CardHeader className="flex p-0 md:flex-col md:justify-center lg:justify-normal">
            <CardTitle className="m-auto w-fit text-[2.8rem] font-bold capitalize md:m-0 lg:m-auto">
              {card.header}
            </CardTitle>
            <CardDescription className="text-center text-[1.8rem] font-medium leading-[3rem] md:text-start lg:text-center lg:group-hover:text-primary">
              {card.text}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
