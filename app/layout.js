

import { Geist, Geist_Mono, Lora, Playfair_Display_SC } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import Providers from "./components/Providers";
import TopBar from "./components/TopBar";
import MyNav from "./components/MyNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display_SC({
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "BAAZ Durum Wheat Atta | Premium Quality Whole Wheat Flour for Healthy Living",
  description:
    "Discover BAAZ Atta – your trusted source for authentic durum wheat products, wellness solutions, and holistic health.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${playfair.variable} antialiased`}
      >
        <Providers>
          <TopBar />
          <MyNav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
