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
    "Senior Full Stack Developer with 7+ years building Node.js APIs, Next.js apps, Strapi CMS integrations, Cloudflare edge services, and reader engagement platforms.",
  keywords: [
    "Full Stack Developer",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Strapi",
    "Cloudflare Workers",
    "NextAuth.js",
    "RESTful APIs",
    "TanStack Query",
    "Racheal Joseph",
  ],
  authors: [{ name: "Racheal Joseph" }],
  openGraph: {
    title: "Racheal Joseph | Senior Full Stack Developer",
    description:
      "Full stack engineer — APIs, auth, CMS integrations, and engagement features at scale.",
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
      <body className="min-h-screen bg-[#080c14] font-sans text-slate-400 antialiased">
        {children}
      </body>
    </html>
  );
}
