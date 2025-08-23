import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
     default: "Md. Abdullah Az-Zahur",
     template: "%s | Md. Abdullah Az-Zahur"
  },
  description: "web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
