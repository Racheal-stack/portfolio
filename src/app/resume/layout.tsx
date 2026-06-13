import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Racheal Joseph — Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer resume — Node.js, Next.js, Strapi, Cloudflare, NextAuth, and RESTful APIs.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
