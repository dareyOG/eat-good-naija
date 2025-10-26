import type { Metadata } from 'next';
import { Crimson_Pro, Gabriela, Lustria } from 'next/font/google';
import './globals.css';

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson-pro',
});

const gabriela = Gabriela({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gabriela',
  display: 'swap',
});

const lustria = Lustria({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
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
        className={`${crimsonPro.variable} ${gabriela.variable} ${lustria.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
