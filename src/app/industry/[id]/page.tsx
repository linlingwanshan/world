import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getIndustryById, getIndustryIds } from '@/data/industries';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  const ids = getIndustryIds();
  return ids.map((id) => ({ id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

const podiumConfig = [
  { medal: '🥇', label: '冠军', badgeVariant: 'gold' as const, border: 'border-yellow-400/30', bg: 'bg-[#1d1d1f]' },
  { medal: '🥈', label: '亚军', badgeVariant: 'silver' as const, border: 'border-slate-400/30', bg: 'bg-[#1d1d1f]' },
  { medal: '🥉', label: '季军', badgeVariant: 'bronze' as const, border: 'border-orange-600/30', bg: 'bg-[#1d1d1f]' },
];

export default async function IndustryPage({ params }: PageProps) {
  const { id } = await params;
  const industry = getIndustryById(id);

  if (!industry) {
    notFound();
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8 -ml-2">
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
        </Button>

        {/* Industry Header Banner */}
        <div className={`relative overflow-hidden rounded-2xl mb-12 bg-gradient-to-br ${industry.gradient} p-px`}>
          <div className="relative rounded-[14px] bg-gradient-to-br from-black/90 to-[#1d1d1f]/90 backdrop-blur-sm p-10">
            <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-5 rounded-[14px]`} />
            <div className="relative z-10 flex items-center gap-6">
              <span className="text-6xl animate-float">{industry.icon}</span>
              <div>
                <h1 className={`text-4xl md:text-5xl font-semibold mb-2 bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent`}>
                  {industry.name}
                </h1>
                <p className="text-gray-400 text-lg">{industry.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Deep Insight */}
        {(industry.longDescription || industry.marketSize || industry.growthRate) && (
          <Card className="mb-12">
            <CardContent className="pt-6">
              {industry.longDescription && (
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{industry.longDescription}</p>
              )}
              <div className="flex flex-wrap gap-4 mb-4">
                {industry.marketSize && (
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                    <span className="text-lg">💹</span>
                    <div>
                      <div className="text-xs text-gray-500">全球市场规模</div>
                      <div className="text-sm font-semibold text-white">{industry.marketSize}</div>
                    </div>
                  </div>
                )}
                {industry.growthRate && (
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                    <span className="text-lg">📈</span>
                    <div>
                      <div className="text-xs text-gray-500">年增长率</div>
                      <div className="text-sm font-semibold text-white">{industry.growthRate}</div>
                    </div>
                  </div>
                )}
              </div>
              {industry.trendKeywords && industry.trendKeywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {industry.trendKeywords.map((kw) => (
                    <Badge key={kw} variant="secondary" className="text-xs">#{kw}</Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Sub-category Filter Chips */}
        {(() => {
          const categories = Array.from(new Set(industry.websites.map((w) => w.category).filter(Boolean)));
          if (categories.length === 0) return null;
          return (
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">🏷️ 子分类</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Badge key={cat} variant="outline" className="text-xs">{cat}</Badge>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Top 3 Podium */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            🏆 前三名
          </h2>
          <div className="space-y-3">
            {industry.websites.slice(0, 3).map((website, index) => {
              const cfg = podiumConfig[index];
              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-5 rounded-xl border ${cfg.border} ${cfg.bg} hover:border-white/20 transition-all duration-300 hover:translate-x-1 group`}
                >
                  <Badge variant={cfg.badgeVariant} className="text-base px-3 py-1.5 flex-shrink-0">
                    {cfg.medal}
                  </Badge>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white mb-0.5">
                      <a href={website.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#2997ff] transition-colors">
                        {website.name}
                      </a>
                    </h3>
                    {website.description && (
                      <p className="text-gray-500 text-sm truncate">{website.description}</p>
                    )}
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                      {website.founded && <span className="text-gray-600 text-xs">🗓️ {website.founded}</span>}
                      {website.headquarters && <span className="text-gray-600 text-xs">📍 {website.headquarters}</span>}
                      {website.category && <span className="text-gray-600 text-xs">🏷️ {website.category}</span>}
                    </div>
                  </div>
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-1 text-sm text-gray-500 hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
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

        <Separator className="mb-8" />

        {/* Rank 4-10 */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            第{podiumConfig.length + 1}–{industry.websites.length}名
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                {industry.websites.slice(3).map((website, index) => {
                  const rank = index + 4;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200 hover:translate-x-1 group"
                    >
                      <span className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${industry.gradient} text-white rounded-full text-sm font-bold flex-shrink-0`}>
                        {rank}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-200">
                          <a href={website.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            {website.name}
                          </a>
                        </h3>
                        {website.description && (
                          <p className="text-gray-500 text-xs truncate">{website.description}</p>
                        )}
                        <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
                          {website.founded && <span className="text-gray-600 text-[11px]">🗓️ {website.founded}</span>}
                          {website.headquarters && <span className="text-gray-600 text-[11px]">📍 {website.headquarters}</span>}
                        </div>
                      </div>
                      <a
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-1 text-xs text-gray-500 hover:text-gray-200 transition-all duration-200 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
