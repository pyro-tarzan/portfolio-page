// METADATA
import type { Metadata } from "next";

// FONTS
import { Funnel_Display, Funnel_Sans } from "next/font/google";

// COMPONENTS
import Navbar from "@/components/Navbar";
import AnimatedRootContainer from "@/components/AnimatedRootContainer";

// STYLES
import "./globals.css";
import "@/app/styles/Layout.css"

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"]
})

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
})

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
        className={`${funnelDisplay.variable} ${funnelSans.variable} antialiased`}
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
