"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import TabBar from "@/components/TabBar/TabBar";
import NavBar from "@/components/NavBar/NavBar";
import { ContextProvider } from "@/contexts/Context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Check window size on mount and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set to true for mobile screens
    };

    // Initialize on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render layout
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col border border-gray-500 rounded-md">
        <ContextProvider>
          <NavBar />
          <div className="flex flex-col md:flex-row flex-1 mt-14">
            {pathname !== "/" && <Sidebar />}
            <main className="flex-1 overflow-auto">
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