import Image from 'next/image';
import nativeJollof from '../../../public/nativeJollof.png';
import '@/app/globals.css';

import { Crimson_Pro, Inter } from 'next/font/google';

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${inter.variable} font-sans`}>
      <body>
        <main className="grid grid-cols-1 lg:grid-cols-[2.5fr,1.2fr] h-screen">
          <Image
            src={nativeJollof}
            alt="native jollof"
            priority
            className="object-cover h-screen hidden lg:block"
          />

          <div className="bg-auth-bg bg-cover bg-center lg:bg-none overflow-y-auto max-h-screen">
            <div className="absolute inset-0 bg-neutral-900 opacity-70 lg:hidden"></div>
            <div className="relative top-[50%] -translate-y-1/2 max-w-[50rem] m-auto z-10 flex justify-center items-center bg-background rounded-[1.2rem] overflow-y-auto lg:rounded-none ">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

export default AuthLayout;
