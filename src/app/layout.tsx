import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "fireeemaan.",
  description: "A Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-[#0B1215]"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
