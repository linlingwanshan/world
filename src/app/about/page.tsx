import Link from 'next/link';
import { industries } from '@/data/industries';

const totalWebsites = industries.reduce((sum, ind) => sum + ind.websites.length, 0);

export default function AboutPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10 relative overflow-hidden rounded-2xl shadow-2xl p-10 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 border border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-5 border border-white/20">
              ℹ️ 关于我们
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
              关于行业门户
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              了解我们的平台使命、数据来源以及为什么我们致力于汇聚全球各行业的权威排名。
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">🌍 平台使命</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Global Industry Top 10 Portal（全球行业 Top 10 门户）旨在为全球用户提供一站式行业洞察与企业导航服务。我们通过汇集各行业最具代表性的企业与平台，帮助用户快速了解行业格局、发现领先企业，并获得可靠的行业趋势参考。
          </p>
          <p className="text-slate-300 leading-relaxed">
            无论您是行业研究者、投资分析师、创业者还是普通用户，我们的门户都能为您提供精选、准确且持续更新的行业数据。
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">{industries.length}</div>
            <div className="text-sm text-slate-400">行业分类</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">{totalWebsites}</div>
            <div className="text-sm text-slate-400">精选企业/平台</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">Top 10</div>
            <div className="text-sm text-slate-400">每行业排名</div>
          </div>
        </div>

        {/* Data Coverage */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">📊 数据覆盖</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            每个行业门户包含以下维度的数据信息：
          </p>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span> 行业深度解读与市场趋势分析</li>
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span> 全球市场规模与年增长率</li>
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span> 行业趋势热词与关键技术方向</li>
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span> 企业成立时间、总部地址、子分类标签</li>
            <li className="flex items-start gap-2"><span className="text-purple-400">✓</span> 精选企业简介与官方网站直达链接</li>
          </ul>
        </div>

        {/* Industry List */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">🏭 行业目录</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                href={`/industry/${ind.id}`}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                <span>{ind.icon}</span>
                {ind.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm transition-colors"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
