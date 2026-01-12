import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Provider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KK X DEV",
  description: "A Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
