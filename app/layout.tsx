import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Demo",
  description: "Next.js static site demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="pt-header min-h-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}