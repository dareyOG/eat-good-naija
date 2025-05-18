import Image from 'next/image';
import localFont from 'next/font/local';

import { Button } from '@/components/ui/button';
import Card from '@/components/home-card';

import jollofFrame from '@/assets/jollofFrame.png';

const rublik = localFont({
  src: '../../fonts/rublik/rubik-bold-webfont.woff',
  weight: '700',
  style: 'normal'
});

const lobsterTwo = localFont({
  src: '../../fonts/lobster-two/lobstertwo-bolditalic-webfont.woff',
  weight: '700',
  style: 'italic'
});

function Home() {
  return (
    <main className="">
      <section className="px-[14rem] py-[8rem] gap-[3.2rem] font flex justify-between items-center">
        <div className="flex flex-col gap-[2.5rem] min-w-[59.4rem]">
          <div className={`${rublik.className} text-[6.7rem] leading-[8.5rem]`}>
            Claim Best Offer on African{' '}
            <span className={`${lobsterTwo.className} text-[8rem] text-primary`}>Food</span> &{' '}
            <span className={`${lobsterTwo.className} text-[8rem] text-primary`}>Ingredients.</span>
          </div>
          <div className="text-[1.8rem] font-medium leading-[3rem] max-w-[47rem] w-full">
            Our job is to filling your tummy with delicious food and with fast and free delivery.
          </div>
          <Button
            variant={'default'}
            className="w-fit h-[4.6rem] px-[2.4rem] py-[1.2rem] text-[1.6rem] font-semibold"
          >
            Get Started
          </Button>
        </div>
        <div className="max-w-[69.3rem] w-full">
          <Image src={jollofFrame} alt="jollof frame" />
        </div>
      </section>
      <section className="mx-[7rem]">
        <div className="flex flex-col gap-[6.4rem] px-[13rem] py-[8rem]">
          <h2 className="capitalize text-[4.5rem] w-fit text-center mx-auto font-bold">
            what we serve
          </h2>
          <Card />
        </div>
      </section>
      <section className="mx-[14rem]">
        <div className="border border-red-500 py-[8rem] flex flex-col gap-[6.4rem]">
          <div className="">
            <h2 className="capitalize text-[4.5rem] leading-[6rem] font-bold">our menu</h2>
            <div className="">carousel here</div>
          </div>
          <div className="text-[4.5rem]">food list</div>
        </div>
      </section>
    </main>
  );
}

export default Home;
