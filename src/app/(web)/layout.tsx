"use client";

import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { AppTabProvider } from "@/providers/AppTabProvider";
import NavBar from "@/shared/layout/NavBar/NavBar";
import Sidebar from "@/shared/layout/Sidebar/Sidebar";
import TabBar from "@/shared/layout/TabBar/TabBar";
import Footer from "@/shared/layout/Footer/Footer";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <Provider store={store}>
      <AppTabProvider>
        {/* Main Viewport Wrapper: Full screen without extra padding */}
        <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-[#011627] text-[#607b96] transition-colors duration-200 light:bg-[#eef3f8] light:text-[#314158]">
          {/* Windows 11 Inset Frame Border (Content choto korbe na) */}
          <div className="pointer-events-none absolute inset-0 z-50 rounded-lg border border-(--app-border-color) light:border-[#cbd6e3]" />

          {/* Top Navbar */}
          <NavBar />

          {/* Middle Body */}
          <div className="flex flex-1 overflow-hidden">
            <aside aria-label="Sidebar Navigation" className="h-full">
              <Sidebar />
            </aside>

            <main
              className={`flex-1 flex-col ${
                isHomePage
                  ? "h-full overflow-hidden"
                  : "h-full overflow-y-auto pb-6"
              }`}
            >
              <TabBar />
              {children}
            </main>
          </div>

          {/* Bottom Footer */}
          <Footer />
        </div>
      </AppTabProvider>
    </Provider>
  );
}
