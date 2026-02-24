import IndustryCard from "@/components/IndustryCard";
import { industries } from "@/data/industries";

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
                  <div className="text-lg font-bold text-purple-600">6+</div>
                  <div className="text-xs text-gray-500">行业分类</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow-sm px-5 py-3 border border-purple-100">
                <span className="text-2xl">🌐</span>
                <div className="text-left">
                  <div className="text-lg font-bold text-purple-600">60+</div>
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
