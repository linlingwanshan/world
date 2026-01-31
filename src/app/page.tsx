import IndustryCard from "@/components/IndustryCard";
import { industries } from "@/data/industries";

export default function Home() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-600 mb-4">
            世界各行业排名前10门户
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            Global Industry Top 10 Portal
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            探索世界各行业的前10名排名。我们的门户网站提供了不同行业领先公司和平台的便捷访问。
          </p>
        </div>

        {/* Featured Industries */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            精选行业
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 3).map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>

        {/* Other Industries */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            其他行业
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(3).map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
