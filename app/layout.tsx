import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./MainLayout.tsx/Navbar";
import Footer from "./MainLayout.tsx/Footer";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include necessary font weights
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cyber-Chetana",
  description: "Generated by CyberProbeX",
  icons: {
    icon: "/FINAL.png",
  },
  keywords: ["cyber security", "tech", "blog"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply Poppins font */}
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
