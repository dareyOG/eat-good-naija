import React, { Suspense } from "react";

import Searchbar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";

import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="grid h-screen grid-cols-[12.1rem_1fr] gap-8">
          <Sidebar />
          <main>
            <Searchbar />
            <section>
              <Suspense
                fallback={
                  <p className="text-3xl uppercase text-primary">Loading...</p>
                }
              >
                {children}
              </Suspense>
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}

export default DashboardLayout;
