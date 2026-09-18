import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/website/Navbar";
import Footer from "@/components/website/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieBanner from "@/components/website/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <div className="website-theme min-h-screen w-full">
        <Navbar />
        <main className="w-full">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
}
