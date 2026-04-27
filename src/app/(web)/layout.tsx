"use client";
import Footer from "@/shared/layout/Footer/Footer";
import Sidebar from "@/shared/layout/Sidebar/Sidebar";
import TabBar from "@/shared/layout/TabBar/TabBar";
import NavBar from "@/shared/layout/NavBar/NavBar";
import { AppTabProvider } from "@/providers/AppTabProvider";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Provider store={store}>
        <AppTabProvider>
          <NavBar />
          <div className="flex flex-col md:flex-row flex-1 mt-14">
            <Sidebar />
            <main className="flex-1 overflow-y-auto pb-10 md:ml-[20%] md:pt-14">
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
