import Image from "next/image";
import nativeJollof from "@/assets/nativeJollof.png";

import "@/app/globals.css";
import { Crimson_Pro, Inter } from "next/font/google";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${inter.variable} font-sans`}
    >
      <body>
        <main className="grid h-screen grid-cols-1 overflow-y-auto lg:grid-cols-[2fr_1fr]">
          <Image
            src={nativeJollof}
            alt="native jollof"
            priority
            className="hidden h-screen w-full object-cover lg:block"
          />

          <div className="no-scrollbar bg-authPage-bg max-h-screen w-full overflow-y-auto bg-cover bg-center lg:bg-none">
            <div className="absolute inset-0 bg-foreground/75 lg:hidden"></div>
            <div className="relative top-[50%] z-10 mx-auto flex w-full -translate-y-1/2 items-center justify-center rounded-[1.2rem] border border-transparent bg-background lg:rounded-none">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

export default AuthLayout;
