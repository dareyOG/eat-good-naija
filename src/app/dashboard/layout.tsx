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
        <div className="flex">
          {/* grid grid-cols-[12.1rem_1fr] */}
          <Sidebar />
          <main className="flex-1">
            <Searchbar />

            <Suspense
              fallback={
                <p className="text-3xl uppercase text-primary">Loading...</p>
              }
            >
              {children}
            </Suspense>
          </main>
        </div>
      </body>
    </html>
  );
}

export default DashboardLayout;
