import { Inter } from "next/font/google";
import Sidebar from "@/components/navbar";
import "../globals.css";
import AdminNavbar from "@/components/navbar/adminNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <AdminNavbar />
          {children}
        </div>
      </body>
    </html>
  );
}
