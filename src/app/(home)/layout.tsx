import type { Metadata } from "next";
import "@/app/globals.css";

import MainHeader from "@/components/mainheader";

import { Crimson_Pro, Inter, Poppins } from "next/font/google";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson-pro",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Eat Good Naija",
  description: "eat-good-naija created and developed by Oludire Damilare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.variable} ${inter.variable} ${poppins.variable}`}
      >
        <MainHeader />
        <main className="h-full px-[3rem] py-[1.25rem] md:px-[6.5rem] md:py-[3.5rem] lg:px-[13rem] lg:py-[7rem]">
          {children}
        </main>
      </body>
    </html>
  );
}
