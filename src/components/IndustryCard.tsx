import Link from 'next/link';
import { Industry } from '@/data/industries';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface IndustryCardProps {
  industry: Industry;
  rank?: number;
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <Badge variant="gold">🥇 精选</Badge>;
  if (rank === 2) return <Badge variant="silver">🥈 精选</Badge>;
  if (rank === 3) return <Badge variant="bronze">🥉 精选</Badge>;
  return null;
}

export default function IndustryCard({ industry, rank }: IndustryCardProps) {
  return (
    <Card className="hover:bg-[#2d2d2f] hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{industry.icon}</span>
            <h2 className="text-xl font-semibold text-white">{industry.name}</h2>
          </div>
          {rank && <RankBadge rank={rank} />}
        </div>
        <div className={`h-px bg-gradient-to-r ${industry.gradient} mt-3 rounded-full opacity-60`} />
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-gray-400 mb-3 text-sm leading-relaxed">{industry.description}</p>
        {industry.marketSize && (
          <p className="text-xs text-gray-500 mb-3">📊 {industry.marketSize} · 🏢 {industry.websites.length} 家企业</p>
        )}
        <ul className="space-y-2">
          {industry.websites.slice(0, 5).map((website, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className={`inline-flex items-center justify-center w-5 h-5 bg-gradient-to-br ${industry.gradient} text-white rounded-full text-xs font-bold flex-shrink-0`}>
                {index + 1}
              </span>
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {website.name}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full group-hover:border-white/20">
          <Link href={`/industry/${industry.id}`}>
            查看全部 ({industry.websites.length})
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
