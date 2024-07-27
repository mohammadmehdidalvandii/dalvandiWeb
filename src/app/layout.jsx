import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import Avatar from "@/components/modules/Avatar/Avatar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DalvandiWeb",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body dir="rtl" className={inter.className}>
        <Navbar/>
        <div className="container mt-8">
          <div className="flex gap-12 flex-col lg:flex-row">
              <div className="block w-full lg:w-[25%]">
                <Avatar/>
              </div>
              <div className="block w-full lg:w-[75%]">
                 {children}  
              </div>
          </div>
        </div>
      </body>
    </html>
  );
}
