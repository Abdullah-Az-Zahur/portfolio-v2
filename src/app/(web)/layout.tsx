"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import TabBar from "@/components/TabBar/TabBar";
import NavBar from "@/components/NavBar/NavBar";
import { ContextProvider } from "@/contexts/Context";

// RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col border border-gray-500 rounded-md">
        <ContextProvider>
          <NavBar />
          <div className="flex flex-col md:flex-row flex-1 mt-14">
            {/* Sidebar */}
            {pathname !== "/" && <Sidebar />}

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto pb-10 md:ml-[20%] md:pt-14">
              {pathname !== "/" && !isMobile && <TabBar />}
              {children}
            </main>
          </div>
          {!(pathname === "/" && isMobile) && <Footer />}
        </ContextProvider>
      </body>
    </html>
  );
}