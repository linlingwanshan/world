import Link from 'next/link';
import { Industry } from '@/data/industries';

interface IndustryCardProps {
  industry: Industry;
  rank?: number;
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <span className="text-xs font-semibold px-2 py-1 rounded-full border bg-yellow-100 text-yellow-800 border-yellow-300">🥇 精选</span>;
  if (rank === 2) return <span className="text-xs font-semibold px-2 py-1 rounded-full border bg-gray-100 text-gray-700 border-gray-300">🥈 精选</span>;
  if (rank === 3) return <span className="text-xs font-semibold px-2 py-1 rounded-full border bg-orange-100 text-orange-800 border-orange-300">🥉 精选</span>;
  return null;
}

export default function IndustryCard({ industry, rank }: IndustryCardProps) {
  return (
    <div className={`p-[2px] rounded-xl bg-gradient-to-br ${industry.gradient} hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group`}>
      <div className="bg-white rounded-[10px] p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{industry.icon}</span>
            <h2 className="text-xl font-bold text-gray-800">
              {industry.name}
            </h2>
          </div>
          {rank && <RankBadge rank={rank} />}
        </div>
        <div className={`h-0.5 bg-gradient-to-r ${industry.gradient} mb-3 rounded-full`}></div>
        <p className="text-gray-600 mb-4 text-sm">{industry.description}</p>
        <ul className="space-y-2 mb-4 flex-1">
          {industry.websites.slice(0, 5).map((website, index) => (
            <li key={index} className="flex items-center">
              <span className={`inline-flex items-center justify-center w-6 h-6 bg-gradient-to-br ${industry.gradient} text-white rounded-full text-xs font-bold mr-2 flex-shrink-0`}>
                {index + 1}
              </span>
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm"
              >
                {website.name}
              </a>
            </li>
          ))}
        </ul>
        <Link
          href={`/industry/${industry.id}`}
          className={`inline-block bg-gradient-to-r ${industry.gradient} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}
        >
          查看全部 ({industry.websites.length})
        </Link>
      </div>
    </div>
  );
}
