import IndustryCard from "@/components/IndustryCard";
import { industries } from "@/data/industries";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AllIndustriesPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <section className="py-20 md:py-32 text-center">
          <Badge variant="secondary" className="mb-8 text-sm px-4 py-1.5">
            📋 全行业浏览
          </Badge>
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            所有行业
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            浏览所有可用的行业类别，发现每个行业的前10名网站。
          </p>
          <div className="flex justify-center gap-3">
            <Badge variant="outline" className="text-sm px-4 py-1.5">
              🏭 {industries.length} 个行业分类
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-1.5">
              🌐 {industries.reduce((a, b) => a + b.websites.length, 0)}+ 精选网站
            </Badge>
          </div>
        </section>

        <Separator />

        {/* Industries Grid */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
