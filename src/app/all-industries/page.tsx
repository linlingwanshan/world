import IndustryCard from "@/components/IndustryCard";
import { industries } from "@/data/industries";

export default function AllIndustriesPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 relative overflow-hidden rounded-2xl shadow-2xl p-10 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 border border-white/10">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full translate-y-1/2 -translate-x-1/2 opacity-10 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-5 border border-white/20">
              📋 全行业浏览
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
              所有行业
            </h1>
            <p className="text-slate-300 max-w-3xl mx-auto mb-6">
              浏览所有可用的行业类别，发现每个行业的前10名网站。
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-sm text-slate-300">
              <span className="text-purple-400 font-bold">{industries.length}</span> 个行业分类 · 共 <span className="text-purple-400 font-bold">{industries.reduce((a, b) => a + b.websites.length, 0)}</span>+ 精选网站
            </div>
          </div>
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
