import orderFood from '@/assets/Orderfood-pana.png';
import takeAway from '@/assets/TakeAway-rafiki.png';
import waiters from '@/assets/Waiters-rafiki.png';

import Image, { StaticImageData } from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

type CardProp = {
  header: string;
  text: string;
  image: StaticImageData;
};

const cards: CardProp[] = [
  { header: 'easy to order', text: 'You only need a few steps in ordering food', image: orderFood },
  {
    header: 'fastest delivery',
    text: 'Delivery that is always ontime even faster',
    image: takeAway
  },
  {
    header: 'best quality',
    text: 'Not only fast for us, quality is also number one',
    image: waiters
  }
];

function Cards() {
  return (
    <div className="flex gap-[3.2rem] flex-col lg:flex-row">
      {cards.map(card => (
        <Card
          className="rounded-none border-0 flex flex-col justify-between w-fit"
          key={card.header}
        >
          <div className="flex justify-center">
            <Image src={card.image} width={230} height={230} alt={card.header} />
          </div>

          <CardHeader className="p-0">
            <CardTitle className="capitalize w-fit m-auto text-[2.8rem] font-bold">
              {card.header}
            </CardTitle>
            <CardDescription className="text-[1.8rem] text-center leading-[3rem] font-medium">
              {card.text}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default Cards;

/* 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
} */
