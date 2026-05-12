import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import InsightsSignup from "@/components/sections/InsightsSignup";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | Ravian Matrix Systems",
  description: "Updates on GIS methods, remote sensing, and geospatial project insights.",
};

const placeholderPosts = [
  {
    title: "Understanding Remote Sensing for Project Monitoring",
    date: "May 10, 2026",
    category: "Remote Sensing",
    excerpt: "How continuous satellite imagery ingestion changes the way infrastructure and agricultural projects are tracked globally."
  },
  {
    title: "Why Spatial Databases Matter for GIS Projects",
    date: "April 22, 2026",
    category: "Architecture",
    excerpt: "Moving beyond shapefiles: the operational benefits of structured PostGIS and centralized spatial architectures."
  },
  {
    title: "WebGIS vs Traditional GIS: What Businesses Need to Know",
    date: "March 15, 2026",
    category: "WebGIS",
    excerpt: "Evaluating when to use desktop GIS tools versus when to invest in a centralized WebGIS platform for your team."
  },
  {
    title: "Using GIS for Environmental and Infrastructure Planning",
    date: "February 08, 2026",
    category: "GIS Analysis",
    excerpt: "Practical approaches to spatial suitability analysis, constraint mapping, and operational decision support in infrastructure planning."
  }
];

export default function InsightsPage() {
  return (
    <div>
      <PageHero 
        eyebrow="Insights"
        title="Knowledge and project notes."
        description="Updates on GIS methods, remote sensing, and geospatial project insights."
      />
      
      <section className="py-24 bg-bg border-b border-line">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {placeholderPosts.map((post, index) => (
              <Link href="#" key={index} className="group flex flex-col border border-line rounded-xl bg-paper p-8 transition-colors hover:border-mustard/40">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] text-mustard-ink bg-mustard/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="font-mono text-[11px] text-muted">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-medium tracking-tight mb-3 group-hover:text-mustard-ink transition-colors">
                  {post.title}
                </h3>
                <p className="text-[15px] text-ink-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-6 font-mono text-[11px] uppercase tracking-wider text-muted flex items-center gap-1 group-hover:text-mustard transition-colors">
                  Read article <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InsightsSignup />
    </div>
  );
}
