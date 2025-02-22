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
        {/* Fixed Header */}
        <Header />

        {/* Layout Wrapper */}
        <div className="flex flex-1 mt-14">
          {/* Sidebar - Only Rendered If Not on Home Page */}
          {pathname !== "/" && <SidebarLeft />}

          {/* Main Content (Scrollable) */}
          <main className="flex-1 p-4 overflow-auto ">
            {children}
          </main>
        </div>

        {/* Fixed Footer */}
        <Footer />
      </body>
    </html>
  );
}
