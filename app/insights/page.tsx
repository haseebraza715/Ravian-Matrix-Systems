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
      
      <section className="py-24 bg-brand-black border-b border-white/5">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {placeholderPosts.map((post, index) => (
              <Link href="#" key={index} className="group flex flex-col border border-white/5 rounded-xl bg-brand-dark p-8 transition-all hover:border-gold/40 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] tracking-wider text-gold/90 bg-gold/5 border border-gold/20 px-2 py-1.5 rounded uppercase">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-white/60">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-medium tracking-tight mb-3 text-brand-cream group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-[15px] text-white/80 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-6 font-mono text-[11px] uppercase tracking-wider text-white/60 flex items-center gap-1 group-hover:text-gold transition-colors">
                  Read article <span>→</span>
                </div>
                
                <div className="absolute bottom-4 right-4 terminal-label opacity-0 group-hover:opacity-20 transition-opacity">DOC_REF_0x{index}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InsightsSignup />
    </div>
  );
}
