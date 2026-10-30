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
        {/* Main App Container */}
        <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-[#011627] text-[#607b96] transition-colors duration-200 light:bg-[#eef3f8] light:text-[#314158]">
          {/* Windows 11 Frame Border */}
          <div className="pointer-events-none absolute inset-0 z-50 rounded-lg border border-(--app-border-color) light:border-[#cbd6e3]" />

          {/* Top Navbar */}
          <NavBar />

          {/* Middle Section: Mobile-e unified scroll context (overflow-y-auto), Desktop-e overflow-hidden */}
          <div
            className={`flex flex-1 min-h-0 ${
              isHomePage
                ? "h-full overflow-hidden"
                : "flex-col overflow-y-auto md:flex-row md:overflow-hidden"
            }`}
          >
            {!isHomePage && (
              <aside
                aria-label="Sidebar Navigation"
                className="w-full shrink-0 border-b border-(--app-border-color) light:border-[#cbd6e3] md:h-full md:w-64 lg:w-72 md:border-b-0 md:border-r md:overflow-y-auto"
              >
                <Sidebar />
              </aside>
            )}

            {/* Main Content Area */}
            <main
              className={`relative flex flex-1 flex-col min-w-0 ${
                isHomePage
                  ? "h-full w-full overflow-hidden"
                  : "min-h-0 md:h-full md:overflow-y-auto"
              }`}
            >
              <TabBar />

              {/* Children wrapper */}
              <div
                className={`flex-1 min-w-0 ${
                  isHomePage ? "h-full overflow-hidden" : "h-auto pb-6"
                }`}
              >
                {children}
              </div>
            </main>
          </div>

          {/* Bottom Footer */}
          <Footer />
        </div>
      </AppTabProvider>
    </Provider>
  );
}
