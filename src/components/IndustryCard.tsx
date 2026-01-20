import Link from 'next/link';
import { Industry } from '@/data/industries';

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
      <h2 className="text-2xl font-bold text-purple-600 mb-3 border-b-2 border-purple-600 pb-2">
        {industry.name}
      </h2>
      <p className="text-gray-600 mb-4">{industry.description}</p>
      <ul className="space-y-2 mb-4">
        {industry.websites.slice(0, 5).map((website, index) => (
          <li key={index} className="flex items-center">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-600 text-white rounded-full text-xs font-bold mr-2">
              {index + 1}
            </span>
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              {website.name}
            </a>
          </li>
        ))}
      </ul>
      <Link
        href={`/industry/${industry.id}`}
        className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors text-sm font-medium"
      >
        View All ({industry.websites.length})
      </Link>
    </div>
  );
}
