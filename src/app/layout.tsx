import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import BigNumber from "bignumber.js";

const inter = Inter({ subsets: ["latin"] });

BigNumber.config({
  FORMAT: {
    // decimal separator
    decimalSeparator: ',',
    // grouping separator of the integer part
    groupSeparator: '.',
  }
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
