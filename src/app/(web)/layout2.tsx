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
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ContextProvider>
          <NavBar />
          <div className="flex flex-col md:flex-row flex-1 mt-14">
            {<Sidebar />}
            <main className="flex-1 overflow-y-auto pb-10 md:ml-[20%] md:pt-14">
              {<TabBar />}
              {children}
            </main>
          </div>
          {<Footer />}
        </ContextProvider>
      </body>
    </html>
  );
}
