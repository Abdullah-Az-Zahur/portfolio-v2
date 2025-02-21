"use client";
import "./globals.css";
import SidebarLeft from "./components/SidebarLeft/SidebarLeft";

import { usePathname } from "next/navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col border border-gray-500 rounded-md">
        <main className="flex-grow">
          <Header />
          <div className="flex">
            <div className="lg:w-1/5 border-r p-4 border-gray-500 h-full ">
              {/* {pathname !== "/" && <SidebarLeft />} */}
              <SidebarLeft />
            </div>
            <div className="flex-1">{children}</div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
