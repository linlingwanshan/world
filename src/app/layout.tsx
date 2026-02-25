import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

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
      <body className="antialiased bg-black min-h-screen text-gray-300" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif' }}>
        <Navigation />
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <Separator />
        <footer className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🌍</span>
                  <span className="text-lg font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    行业门户
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  探索全球各行业前10名排名，发现领先企业和平台。汇聚权威数据，助力行业洞察。
                </p>
              </div>
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-white mb-4 text-sm">快速链接</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link href="/" className="hover:text-white transition-colors">首页</Link></li>
                  <li><Link href="/all-industries" className="hover:text-white transition-colors">所有行业</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">关于我们</Link></li>
                  <li><Link href="/industry/technology" className="hover:text-white transition-colors">科技行业</Link></li>
                  <li><Link href="/industry/finance" className="hover:text-white transition-colors">金融行业</Link></li>
                </ul>
              </div>
              {/* Tech Stack */}
              <div>
                <h3 className="font-semibold text-white mb-4 text-sm">技术栈</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  使用 Next.js App Router、Tailwind CSS v4 和 shadcn/ui 构建的现代化行业导航平台。
                </p>
                <div className="flex gap-2 flex-wrap">
                  {['Next.js', 'React 19', 'Tailwind v4', 'shadcn/ui'].map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Separator className="my-8" />
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                &copy; 2026 Global Industry Top 10 Portal. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
