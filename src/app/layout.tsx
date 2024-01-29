import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Dos",
  description: "Typescript app designed and developed by Kai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={" font-body text-2xl bg-BrandBlack text-BrandWhite"}>
        {children}
      </body>
    </html>
  );
}
