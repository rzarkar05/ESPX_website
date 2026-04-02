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
    "ESPX Global is a technology startup developing a centralized platform to evaluate financial and operational trade-offs and opportunities to integrate battery energy storage into the evolving electric power market. We collect, curate and standardize energy storage asset data, deploying data science methodologies to enhance our client's decision making with insights on how energy storage impacts electricity grids and markets.",
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
