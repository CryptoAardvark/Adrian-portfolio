import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function SectionsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--base-950)] text-white">
      <Header />
      <main className="min-h-[calc(100vh-200px)] px-4 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}


