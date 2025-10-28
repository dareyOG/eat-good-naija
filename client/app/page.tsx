import Image from 'next/image';
import localFont from 'next/font/local';

import { Button } from '@/components/ui/button';
import Services from '@/components/Services';

import { Play } from 'lucide-react';

const rublik = localFont({
  src: '../fonts/rublik/rubik-bold-webfont.woff',
  weight: '700',
});

const lobster_two = localFont({
  src: '../fonts/lobster-two/lobstertwo-bolditalic-webfont.woff',
});

function Home() {
  return (
    <main className="flex flex-col gap-14">
      <section className="gap-x-8 md:grid lg:grid-cols-2 my-10">
        <Image
          src="/assets/jollofFrame.png"
          alt="jollof frame"
          width={600}
          height={600}
          priority
        />

        <div className="space-y-10 lg:col-start-1 lg:row-end-2 lg:flex lg:h-full lg:items-center lg:justify-center">
          <div className="flex flex-col gap-4">
            <p
              className={`${rublik.className} text-balance text-center text-[4rem] text-stone-800 md:text-start lg:text-[6.5rem] tracking-wide`}
            >
              Claim Best Offer on Fast
              <span
                className={`${lobster_two.className} text-[4rem] text-primary lg:text-[6.5rem]`}
              >
                Food
              </span>{' '}
              &
              <span
                className={`${lobster_two.className} text-[4rem] text-primary lg:text-[6.5rem]`}
              >
                Ingredients
              </span>
            </p>

            <p className="text-center text-[1.5rem] leading-12 md:text-left">
              Our job is to filling your tummy with sumptuous nigerian
              dishes🍲😋 and with fast and free delivery🚚 .
            </p>
            <div className="space-x-5 mx-auto lg:mx-0">
              <Button
                size={'lg'}
                className="capitalize border-primary text-2xl rounded-full p-10  duration-300 ease-in"
              >
                get started
              </Button>
              <Button
                variant={'ghost'}
                size={'lg'}
                className="group hover:border-transparent rounded-full p-10 duration-300 ease-in group space-x-3.5"
              >
                <span className="border border-transparent bg-muted rounded-full p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-in">
                  <Play className="fill-foreground border border-transparent size-5 text-border" />
                </span>
                <span className="text-foreground text-[1.8rem] font-medium">
                  watch video
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Services />
    </main>
  );
}

export default Home;
