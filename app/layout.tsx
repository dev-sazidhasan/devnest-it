import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevNest IT — Digital Innovation Studio",
  description: "We craft innovative, scalable, and future-ready IT solutions. Web, Mobile, UI/UX & Cloud — DevNest IT is your partner in digital transformation.",
  keywords: ["DevNest IT", "web development", "mobile apps", "UI/UX design", "cloud solutions", "Bangladesh"],
  openGraph: {
    title: "DevNest IT — Digital Innovation Studio",
    description: "Your trusted partner in digital transformation & custom IT solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: '#050510' }}
      >
        {children}
      </body>
    </html>
  );
}
