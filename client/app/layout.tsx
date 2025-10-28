import type { Metadata } from 'next';

import { Poppins, Gabriela, PT_Serif } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

import MainHeader from '@/components/MainHeader';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
  display: 'swap',
});

const gabriela = Gabriela({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gabriela',
  display: 'swap',
});

const pt_serif = PT_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pt_serif',
  display: 'swap',
});

const rublik = localFont({
  src: '../fonts/rublik/rubik-bold-webfont.woff2',
  variable: '--font-rublik',
});

export const metadata: Metadata = {
  title: 'Eat Good Naija',
  description: 'eat-good-naija created and developed by Oludire Damilare',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${gabriela.variable} ${pt_serif.variable} ${rublik.variable}  antialiased`}
      >
        <MainHeader />
        <div className="pt-5 px-4 lg:px-10">{children}</div>
      </body>
    </html>
  );
}
