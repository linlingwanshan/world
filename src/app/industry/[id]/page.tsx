import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getIndustryById, getIndustryIds } from '@/data/industries';

export async function generateStaticParams() {
  const ids = getIndustryIds();
  return ids.map((id) => ({
    id: id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

const podiumConfig = [
  { medal: '🥇', label: '冠军', border: 'border-yellow-400/60', bg: 'bg-gradient-to-r from-yellow-950/60 to-amber-900/40', badgeBg: 'bg-gradient-to-br from-yellow-400 to-amber-500', shadow: 'shadow-yellow-500/20' },
  { medal: '🥈', label: '亚军', border: 'border-slate-400/60', bg: 'bg-gradient-to-r from-slate-800/80 to-slate-700/40', badgeBg: 'bg-gradient-to-br from-slate-300 to-slate-500', shadow: 'shadow-slate-400/20' },
  { medal: '🥉', label: '季军', border: 'border-orange-700/60', bg: 'bg-gradient-to-r from-orange-950/60 to-orange-900/40', badgeBg: 'bg-gradient-to-br from-orange-400 to-orange-600', shadow: 'shadow-orange-500/20' },
];

export default async function IndustryPage({ params }: PageProps) {
  const { id } = await params;
  const industry = getIndustryById(id);

  if (!industry) {
    notFound();
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-all duration-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-4 py-2 rounded-xl group"
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回首页
        </Link>

        {/* Industry Header Banner */}
        <div className={`relative overflow-hidden rounded-2xl shadow-2xl mb-8 bg-gradient-to-br ${industry.gradient} p-px`}>
          <div className="relative rounded-[14px] bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8">
            {/* Decorative glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-10 rounded-[14px]`} />
            <div className="relative z-10 flex items-center gap-6">
              <span className="text-6xl animate-float">{industry.icon}</span>
              <div>
                <h1 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent`}>
                  {industry.name}
                </h1>
                <p className="text-slate-300 text-lg">{industry.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Deep Insight */}
        {(industry.longDescription || industry.marketSize || industry.growthRate) && (
          <div className="mb-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            {industry.longDescription && (
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{industry.longDescription}</p>
            )}
            <div className="flex flex-wrap gap-4">
              {industry.marketSize && (
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                  <span className="text-lg">💹</span>
                  <div>
                    <div className="text-xs text-slate-500">全球市场规模</div>
                    <div className="text-sm font-semibold text-white">{industry.marketSize}</div>
                  </div>
                </div>
              )}
              {industry.growthRate && (
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                  <span className="text-lg">📈</span>
                  <div>
                    <div className="text-xs text-slate-500">年增长率</div>
                    <div className="text-sm font-semibold text-white">{industry.growthRate}</div>
                  </div>
                </div>
              )}
            </div>
            {industry.trendKeywords && industry.trendKeywords.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {industry.trendKeywords.map((kw) => (
                  <span key={kw} className={`inline-block bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent text-xs font-medium border border-white/10 px-3 py-1 rounded-full`}>
                    #{kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Sub-category Filter Chips */}
        {(() => {
          const categories = Array.from(new Set(industry.websites.map((w) => w.category).filter(Boolean)));
          if (categories.length === 0) return null;
          return (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-400 mb-2">🏷️ 子分类</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <span key={cat} className="inline-block bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Top 3 Podium */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-300 mb-4 flex items-center gap-2">
            <span>🏆</span> 前三名
          </h2>
          <div className="space-y-3">
            {industry.websites.slice(0, 3).map((website, index) => {
              const cfg = podiumConfig[index];
              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-5 rounded-xl border ${cfg.border} ${cfg.bg} shadow-lg ${cfg.shadow} transition-all duration-300 hover:translate-x-1 hover:shadow-xl group`}
                >
                  <span className={`inline-flex items-center justify-center w-12 h-12 ${cfg.badgeBg} text-white rounded-full text-xl font-bold flex-shrink-0 shadow-md`}>
                    {cfg.medal}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white mb-0.5">
                      <a href={website.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {website.name}
                      </a>
                    </h3>
                    {website.description && (
                      <p className="text-slate-400 text-sm truncate">{website.description}</p>
                    )}
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                      {website.founded && <span className="text-slate-500 text-xs">🗓️ {website.founded}</span>}
                      {website.headquarters && <span className="text-slate-500 text-xs">📍 {website.headquarters}</span>}
                      {website.category && <span className="text-slate-500 text-xs">🏷️ {website.category}</span>}
                    </div>
                  </div>
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                  >
                    访问
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rank 4-10 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-slate-300 mb-4 flex items-center gap-2">
            <span className={`inline-block w-6 h-6 rounded-full bg-gradient-to-br ${industry.gradient} text-white text-xs flex items-center justify-center font-bold`}>{podiumConfig.length + 1}</span>
            第{podiumConfig.length + 1}–{industry.websites.length}名
          </h2>
          <div className="space-y-2">
            {industry.websites.slice(3).map((website, index) => {
              const rank = index + 4;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/3 hover:bg-white/8 border border-transparent hover:border-white/10 transition-all duration-200 hover:translate-x-1 group"
                >
                  <span className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${industry.gradient} text-white rounded-full text-sm font-bold flex-shrink-0`}>
                    {rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-slate-200">
                      <a href={website.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        {website.name}
                      </a>
                    </h3>
                    {website.description && (
                      <p className="text-slate-500 text-xs truncate">{website.description}</p>
                    )}
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
                      {website.founded && <span className="text-slate-600 text-[11px]">🗓️ {website.founded}</span>}
                      {website.headquarters && <span className="text-slate-600 text-[11px]">📍 {website.headquarters}</span>}
                    </div>
                  </div>
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-1 text-xs text-slate-500 hover:text-slate-200 transition-all duration-200 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                  >
                    访问
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
