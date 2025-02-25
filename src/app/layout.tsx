"use client";
import "./globals.css";
import SidebarLeft from "./components/SidebarLeft/SidebarLeft";
import { usePathname } from "next/navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

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
        <Header />

        <div className="flex flex-1 mt-14">
          {pathname !== "/" && <SidebarLeft />}

          <main className="flex-1 p-4 overflow-auto ">{children}</main>
        </div>

        {!(pathname === "/" && isMobile) && <Footer />}
      </body>
    </html>
  );
}
