import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Link from "next/link";

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
        <footer className="bg-white/90 backdrop-blur-sm shadow-md mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🌍</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    行业门户
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  探索全球各行业前10名排名，发现领先企业和平台。汇聚权威数据，助力行业洞察。
                </p>
              </div>
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">快速链接</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/" className="hover:text-purple-600 transition-colors">🏠 首页</Link></li>
                  <li><Link href="/all-industries" className="hover:text-purple-600 transition-colors">📋 所有行业</Link></li>
                  <li><Link href="/industry/technology" className="hover:text-purple-600 transition-colors">💻 科技行业</Link></li>
                  <li><Link href="/industry/finance" className="hover:text-purple-600 transition-colors">💰 金融行业</Link></li>
                  <li><Link href="/industry/healthcare" className="hover:text-purple-600 transition-colors">🏥 医疗行业</Link></li>
                </ul>
              </div>
              {/* About */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">关于平台</h3>
                <p className="text-sm text-gray-600 mb-4">
                  我们致力于汇聚全球各行业的权威排名，为用户提供最全面的行业洞察与便捷导航。
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/linlingwanshan/world"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-100 hover:text-purple-600 transition-colors text-gray-600"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-6 text-center">
              <p className="text-gray-500 text-sm">
                &copy; 2026 Global Industry Top 10 Portal. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
