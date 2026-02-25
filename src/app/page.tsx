import IndustryCard from "@/components/IndustryCard";
import { industries } from "@/data/industries";

const totalWebsites = industries.reduce((sum, ind) => sum + ind.websites.length, 0);

const trendKeywords = Array.from(
  new Set(industries.flatMap((ind) => ind.trendKeywords ?? []))
);

const featuredCompanies = [
  { name: 'OpenAI', industry: 'Artificial Intelligence', icon: '🤖', highlight: 'ChatGPT 引领 AI 应用浪潮' },
  { name: 'Tesla', industry: 'Automotive', icon: '🚗', highlight: '电动汽车与自动驾驶领跑者' },
  { name: 'Netflix', industry: 'Streaming Services', icon: '🎬', highlight: '全球流媒体订阅用户破 3 亿' },
  { name: 'Coursera', industry: 'Education', icon: '📚', highlight: '在线教育普惠全球学习者' },
];

const latestUpdates = [
  { date: '2026-02', text: '新增人工智能、航空航天等 9 大行业门户' },
  { date: '2026-02', text: '企业数据升级：成立时间、总部、子分类全面补齐' },
  { date: '2026-02', text: '行业深度解读与市场规模数据上线' },
  { date: '2026-01', text: '行业趋势热词横幅首次亮相' },
];

export default function Home() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 relative overflow-hidden bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl p-10">
          {/* Decorative dot grid */}
          <div className="absolute inset-0 opacity-[0.04] dot-grid" />
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-300 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300 rounded-full translate-y-1/2 -translate-x-1/2 opacity-20 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              🌍 全球行业排名门户
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              世界各行业排名前10门户
            </h1>
            <p className="text-xl text-gray-700 mb-2 font-medium">
              Global Industry Top 10 Portal
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              探索世界各行业的前10名排名。我们的门户网站提供了不同行业领先公司和平台的便捷访问。
            </p>
            {/* Stats badges */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-sm px-5 py-3 border border-purple-100">
                <span className="text-2xl">🏭</span>
                <div className="text-left">
                  <div className="text-lg font-bold text-purple-600">{industries.length}</div>
                  <div className="text-xs text-gray-500">行业分类</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-sm px-5 py-3 border border-purple-100">
                <span className="text-2xl">🌐</span>
                <div className="text-left">
                  <div className="text-lg font-bold text-purple-600">{totalWebsites}+</div>
                  <div className="text-xs text-gray-500">精选网站</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-sm px-5 py-3 border border-purple-100">
                <span className="text-2xl">📊</span>
                <div className="text-left">
                  <div className="text-lg font-bold text-purple-600">Top 10</div>
                  <div className="text-xs text-gray-500">每行业排名</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trend Keywords Banner */}
        <div className="mb-10 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 border border-white/10 p-5">
          <h3 className="text-sm font-semibold text-slate-400 mb-3 flex items-center gap-2">🔥 行业趋势热词</h3>
          <div className="flex flex-wrap gap-2">
            {trendKeywords.slice(0, 20).map((kw) => (
              <span key={kw} className="inline-block bg-white/10 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/20 transition-colors">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Star Companies */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-5 text-center flex items-center justify-center gap-2">
            ⭐ 季度明星企业推荐
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCompanies.map((company) => (
              <div key={company.name} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-2">{company.icon}</div>
                <h3 className="text-white font-bold text-lg">{company.name}</h3>
                <p className="text-slate-400 text-xs mb-2">{company.industry}</p>
                <p className="text-slate-300 text-sm">{company.highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Industries */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            精选行业
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 3).map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} rank={index + 1} />
            ))}
          </div>
        </div>

        {/* Other Industries */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            其他行业
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(3).map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>

        {/* Latest Updates */}
        <div className="rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">📰 最新动态</h2>
          <ul className="space-y-3">
            {latestUpdates.map((update, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-mono px-2 py-0.5 rounded shrink-0">{update.date}</span>
                <span className="text-slate-300">{update.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
