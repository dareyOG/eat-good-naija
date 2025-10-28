import type { Metadata } from 'next';
import { Crimson_Pro, Gabriela, PT_Serif } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/MainHeader';

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson_pro',
});

const gabriela = Gabriela({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gabriela',
  display: 'swap',
});

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pt_serif',
  display: 'swap',
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
        className={`${crimsonPro.variable} ${gabriela.variable} ${ptSerif.variable} antialiased divide-y-2 divide-primary`}
      >
        <MainHeader />
        <div className="pt-5">{children}</div>
      </body>
    </html>
  );
}
