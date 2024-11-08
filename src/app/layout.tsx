import type { Metadata } from "next";
import "./globals.css";
import { Tangerine, Cormorant_Infant } from "next/font/google";

const tangerine = Tangerine({ subsets: ["latin"], weight: "400" });
const cormorantInfant = Cormorant_Infant({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "M | O",
  description: "forever in love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tangerine.className} ${cormorantInfant.className}`}>
        {children}
      </body>
    </html>
  );
}
