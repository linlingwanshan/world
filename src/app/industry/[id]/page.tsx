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
          className="inline-flex items-center text-white hover:text-purple-100 mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Industry Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            {industry.name}
          </h1>
          <p className="text-gray-700 text-lg">{industry.description}</p>
        </div>

        {/* Top 10 List */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Top 10 {industry.name} Websites
          </h2>
          <div className="space-y-4">
            {industry.websites.map((website, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full text-lg font-bold">
                    {index + 1}
                  </span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 transition-colors"
                    >
                      {website.name}
                    </a>
                  </h3>
                  {website.description && (
                    <p className="text-gray-600 text-sm">
                      {website.description}
                    </p>
                  )}
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 text-sm inline-flex items-center mt-1"
                  >
                    Visit Website
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
