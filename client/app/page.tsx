import Image from 'next/image';
import localFont from 'next/font/local';

import { Button } from '@/components/ui/button';

import jollofFrame from '@/assets/jollofFrame.png';

const rublik = localFont({
  src: '../fonts/rublik/rubik-bold-webfont.woff',
});

const lobsterTwo = localFont({
  src: '../fonts/lobster-two/lobstertwo-bolditalic-webfont.woff',
});

function Home() {
  return (
    <section className="gap-x-8 md:grid lg:grid-cols-2">
      <Image src={jollofFrame} alt="jollof frame" priority />

      <div className="space-y-8 lg:col-start-1 lg:row-end-2 lg:flex lg:h-full lg:items-center lg:justify-center">
        <div className="flex flex-col gap-6">
          <p
            className={`${rublik.className} text-balance text-center text-[4rem] text-stone-800 md:text-start lg:text-[6.7rem]`}
          >
            Claim Best Offer on African
            <span
              className={`${lobsterTwo.className} text-[4rem] text-primary lg:text-[8rem]`}
            >
              Food
            </span>{' '}
            &
            <span
              className={`${lobsterTwo.className} text-[4rem] text-primary lg:text-[8rem]`}
            >
              Ingredients
            </span>
          </p>

          <p className="w-full text-center text-[1.8rem] font-medium leading-12 md:text-left font-mono mb-5">
            Our job is to filling your tummy with sumptuous dishes and with fast
            and free delivery.
          </p>
          <Button
            variant={'outline'}
            size={'lg'}
            className="capitalize border-primary text-primary hover:bg-primary hover:text-primary-foreground text-2xl py-3.5 mx-auto md:w-fit md:mx-0 duration-300 ease-in"
          >
            get started
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Home;
