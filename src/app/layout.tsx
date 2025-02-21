"use client";
import "./globals.css";
import SidebarLeft from "./components/SidebarLeft/SidebarLeft";

import { usePathname } from "next/navigation";
import Header from "./components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="">
        <main className="bg-[#1E2D3D]">
          <Header />
          <div className="p-4">{children}</div>
        </main>
        {/* {pathname !== "/" && <SidebarLeft />} */}
        <SidebarLeft />
      </body>
    </html>
  );
}
