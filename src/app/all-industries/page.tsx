import IndustryCard from "@/components/IndustryCard";
import { industries } from "@/data/industries";

export default function AllIndustriesPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-600 mb-4">
            所有行业
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            浏览所有可用的行业类别，发现每个行业的前10名网站。
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </div>
  );
}
