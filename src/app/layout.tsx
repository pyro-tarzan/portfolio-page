// METADATA
import type { Metadata } from "next";

// FONTS
import { Geist, Geist_Mono } from "next/font/google";

// COMPONENTS
import Navbar from "@/components/Navbar";
import AnimatedRootContainer from "@/components/AnimatedRootContainer";

// STYLES
import "./globals.css";
import "@/app/styles/Layout.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Page",
  description: "Vignesh Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>
          <div className="main-page">
            <AnimatedRootContainer>
              {children}
            </AnimatedRootContainer>
          </div> 
        </main>
      </body>
    </html>
  );
}
