import Image from 'next/image';
import localFont from 'next/font/local';

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
      <Image src={jollofFrame} alt="jollof frame" />

      <div className="space-y-8 lg:col-start-1 lg:row-end-2 lg:flex lg:h-screen lg:items-center lg:justify-center">
        <div>
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

          <p className="w-full text-center text-[1.8rem] font-medium leading-12 md:text-left font-mono">
            Our job is to filling your tummy with delicious food and with fast
            and free delivery.
          </p>
          {/* <Button
            variant={'default'}
            className="h-[4.6rem] w-full px-[2.4rem] py-[1.2rem] text-[1.6rem] font-semibold md:w-fit"
          >
            Get Started
          </Button> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
