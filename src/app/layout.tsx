import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Level Sony",
    default: "Level Sony",
  },
  description: "Check out my smart portfolio website with a custom AI chatbot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="p-4 pb-12 max-w-7xl mx-auto overflow-hidden lg:overflow-visible">
            {children}
          </main>
          <Analytics/>
          <SpeedInsights/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
