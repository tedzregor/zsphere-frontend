import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/website/Navbar";

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
    <div className="website-theme min-h-screen w-full">
      <Navbar />

      <main className="w-full">
        {children}
      </main>
    </div>
  );
}
