import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import MainNavbar from "@/components/main-navbar/MainNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio Hafizi Iqbal",
  description:
    "Saya Hafizi Iqbal, seorang desainer grafis dan programmer yang berfokus pada menciptakan solusi kreatif dan inovatif. Saya menggabungkan estetika desain dengan logika pemrograman untuk menghasilkan karya yang fungsional dan memukau.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
