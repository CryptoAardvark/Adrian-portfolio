import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aardvark — Software Engineer Portfolio",
  description:
    "Modern portfolio for a full-stack engineer focused on AI, product, and scalable systems.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Aardvark — Software Engineer Portfolio",
    description:
      "Showcasing featured projects, expertise, and ways to collaborate on modern digital products.",
    url: "https://example.com",
    siteName: "Aardvark Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aardvark — Software Engineer Portfolio",
    description:
      "Product-focused full-stack engineer building performant apps with React, Next.js, and AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-base-950">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
