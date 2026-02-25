import IndustryCard from "@/components/IndustryCard";
import { industries } from "@/data/industries";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center">
          <Badge variant="secondary" className="mb-8 text-sm px-4 py-1.5">
            🌍 全球行业排名门户
          </Badge>
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            世界各行业<br />排名前10门户
          </h1>
          <p className="text-gray-400 text-xl mb-4 font-medium">
            Global Industry Top 10 Portal
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            探索世界各行业的前10名排名。我们的门户网站提供了不同行业领先公司和平台的便捷访问。
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm px-4 py-1.5">
              🏭 {industries.length} 大行业
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-1.5">
              �� {totalWebsites}+ 顶级网站
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-1.5">
              📊 全球覆盖
            </Badge>
          </div>
        </section>

        <Separator />

        {/* Trend Keywords Banner */}
        <section className="py-12">
          <h3 className="text-sm font-semibold text-gray-500 mb-4 flex items-center gap-2 uppercase tracking-wider">🔥 行业趋势热词</h3>
          <div className="flex flex-wrap gap-2">
            {trendKeywords.slice(0, 20).map((kw) => (
              <Badge key={kw} variant="secondary" className="text-xs">
                {kw}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* Featured Star Companies */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center">
            ⭐ 季度明星企业
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCompanies.map((company) => (
              <div key={company.name} className="bg-[#1d1d1f] border border-white/10 rounded-xl p-6 hover:bg-[#2d2d2f] hover:border-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">{company.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-1">{company.name}</h3>
                <p className="text-gray-500 text-xs mb-2">{company.industry}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{company.highlight}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Featured Industries */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center">
            精选行业
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 3).map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} rank={index + 1} />
            ))}
          </div>
        </section>

        <Separator />

        {/* Other Industries */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center">
            其他行业
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(3).map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </section>

        <Separator />

        {/* Latest Updates */}
        <section className="py-16">
          <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">📰 最新动态</h2>
          <ul className="space-y-4">
            {latestUpdates.map((update, idx) => (
              <li key={idx} className="flex items-start gap-4 text-sm">
                <span className="inline-block bg-white/5 border border-white/10 text-gray-500 text-xs font-mono px-2.5 py-1 rounded-lg shrink-0">{update.date}</span>
                <span className="text-gray-400 pt-0.5">{update.text}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
