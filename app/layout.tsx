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
  title: "Adrian Garcia — AI/ML & Senior Backend Engineer",
  description:
    "Portfolio of Adrian Garcia, a senior backend and AI engineer specializing in Go, Python, distributed systems, high-throughput APIs, cloud infrastructure, and scalable AI/LLM architectures.",
  metadataBase: new URL("https://adrianport.vercel.app/"),
  openGraph: {
    title: "Adrian Garcia — AI/ML & Senior Backend Engineer",
    description:
      "Explore production-grade engineering work across Go/Python microservices, distributed systems, vector search, RAG pipelines, data platforms, and cloud-native infrastructure on AWS, GCP, and Kubernetes.",
    url: "https://adrianport.vercel.app/",
    siteName: "Adrian Garcia Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrian Garcia — AI/ML & Senior Backend Engineer",
    description:
      "Backend-focused engineer delivering scalable microservices, high-performance APIs, data pipelines, and AI/LLM-integrated platforms.",
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
