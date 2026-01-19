import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Global Industry Top 10 Portal",
  description: "A central hub linking to the top 10 rankings from various industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 min-h-screen"
      >
        <Navigation />
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <footer className="bg-white shadow-md mt-auto py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 text-sm">
              &copy; 2026 Global Industry Top 10 Portal. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
