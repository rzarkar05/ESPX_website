import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ESPX | Energy Storage Power Exchange",
  description:
    "ESPX Global is a grid scale energy storage technology purpose-entity integrating science methodologies to enhance client's energy storage financial and operational decision-making to more effectively meet electrical demand challenges of the new digital based economy.",
  keywords: [
    "energy storage",
    "power exchange",
    "blockchain",
    "renewable energy",
    "AI",
    "data center",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased cursor-default`}>
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
