import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

// Self-hosted fonts (no build-time network). Variable names are part of the
// design tokens in globals.css, so no other file changes.
const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});
const archivo = localFont({
  src: "./fonts/Archivo-Variable.woff2",
  variable: "--font-display",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NORTHFORM — Building space for what comes next",
  description:
    "NORTHFORM is a fictional premium construction and development studio. Residential, commercial and mixed-use architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0c0c0b] text-[#edeae2]">
        <SmoothScroll />
        <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
