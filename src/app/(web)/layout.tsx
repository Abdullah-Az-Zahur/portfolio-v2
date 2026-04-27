"use client";
import Footer from "@/shared/layout/Footer/Footer";
import Sidebar from "@/shared/layout/Sidebar/Sidebar";
import TabBar from "@/shared/layout/TabBar/TabBar";
import NavBar from "@/shared/layout/NavBar/NavBar";
import { AppTabProvider } from "@/providers/AppTabProvider";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { usePathname } from "next/navigation";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Provider store={store}>
        <AppTabProvider>
          <NavBar />
          <div className="flex flex-col md:flex-row flex-1 mt-14">
            <Sidebar />
            <main
              className={`flex-1 md:ml-[20%] ${
                isHomePage
                  ? "overflow-hidden h-[calc(100vh-56px)] md:h-[calc(100vh-56px-48px)]"
                  : "overflow-y-auto pb-10 md:pt-14"
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
