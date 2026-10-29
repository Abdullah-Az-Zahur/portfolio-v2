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
    <div className="flex min-h-dvh flex-col bg-[#011627] text-[#607b96] transition-colors duration-200 light:bg-[#eef3f8] light:text-[#314158]">
      <Provider store={store}>
        <AppTabProvider>
          <header className="fixed top-0 z-50 w-full">
            <NavBar />
          </header>

          <div className="mt-14 flex flex-1 flex-col md:flex-row">
            <aside aria-label="Sidebar Navigation">
              <Sidebar />
            </aside>

            <main
              className={`flex-1 ${
                isHomePage
                  ? "h-[calc(100dvh-56px)] overflow-hidden md:h-[calc(100dvh-56px-48px)] md:ml-0"
                  : "overflow-y-auto pb-10 md:ml-[20%] md:pt-14"
              }`}
            >
              <TabBar />
              {children}
            </main>
          </div>

          <Footer />
        </AppTabProvider>
      </Provider>
    </div>
  );
}
