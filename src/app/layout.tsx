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
  title: "Racheal Joseph | Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer with 7 years of experience building scalable backend systems and full-stack applications with Node.js, React, and cloud-ready technologies.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Node.js",
    "React",
    "NestJS",
    "TypeScript",
    "Racheal Joseph",
  ],
  authors: [{ name: "Racheal Joseph" }],
  openGraph: {
    title: "Racheal Joseph | Senior Full Stack Developer",
    description:
      "7 years building scalable backend systems and full-stack applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-950 font-sans text-slate-300 antialiased">
        {children}
      </body>
    </html>
  );
}
