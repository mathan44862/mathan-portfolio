import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathan's Portfolio",
  description:
    "This is the portfolio of Mathan M, showcasing my work in front-end and back-end development. From stunning React applications to reliable Java solutions, I bring your ideas to life with code.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          {/* <Navbar /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
