"use client";

import { useState, useEffect } from "react";
import PageHero from "@/components/ui-custom/PageHero";
import CTASection from "@/components/sections/CTASection";
import { Card } from "@/components/ui-custom/Card";
import { Database, Globe, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  role: string;
  metric: string;
  desc: string;
  tags: string[];
  icon: React.ComponentType<any>;
}

const projects: Project[] = [
  {
    id: "ndvi-agtech",
    title: "Satellite Crop-Monitoring GIS Platform",
    category: "Geospatial",
    client: "AgTech SaaS (Munich)",
    role: "Lead GIS Developer & Frontend",
    metric: "10,000+ NDVI Scenes",
    desc: "Processed multi-spectral Sentinel-2 satellite imagery covering 400,000 hectares of farmland. Built custom React raster rendering with sub-second polygon queries.",
    tags: ["Sentinel-2", "PostGIS", "React", "NDVI"],
    icon: MapPin
  },
  {
    id: "water-scada",
    title: "Municipal Water SCADA Telemetry",
    category: "Web Applications",
    client: "Water Utilities (Lower Saxony)",
    role: "Full-Stack & Database Architect",
    metric: "1.2M Sensors Daily",
    desc: "Designed TimescaleDB data lake and real-time dashboard plotting flow pressure sensors. Achieved sub-50ms query responses on historical data streams.",
    tags: ["TimescaleDB", "Next.js", "WebSockets", "IoT"],
    icon: Globe
  },
  {
    id: "logistics-kafka",
    title: "Global Logistics Data Sync Pipeline",
    category: "Cloud & Backend",
    client: "Supply Chain Operator (Hamburg / MENA)",
    role: "Cloud Architect & API Developer",
    metric: "4.2s Sync Latency",
    desc: "Replaced fragile nightly SFTP file transfers with an event-driven sync pipeline. Integrated legacy ERP systems with a robust API broker layer.",
    tags: ["Go", "Kafka", "PostgreSQL", "REST API"],
    icon: Database
  },
  {
    id: "wind-bounding",
    title: "Renewable Wind Bounding Box Tracker",
    category: "Geospatial",
    client: "CleanEnergy Fund (Munich)",
    role: "GIS Consultant & Analyst",
    metric: "320 Turbine Assets",
    desc: "Created automated spatial buffers and bounding box intersections mapping wind turbines to environmental conservation boundaries.",
    tags: ["QGIS", "GeoPandas", "Python", "Spatial Buffers"],
    icon: MapPin
  },
  {
    id: "billing-portal",
    title: "Automated Client Document Billing Portal",
    category: "Web Applications",
    client: "Logistics Agency (Hamburg)",
    role: "Frontend Engineer",
    metric: "94% Billing Speedup",
    desc: "Built a secure client interface enabling bulk PDF processing and automated invoice dispatching. Integrated with Stripe and Datev CSV billing flows.",
    tags: ["React", "Node.js", "PDF-parse", "Stripe"],
    icon: Globe
  },
  {
    id: "crm-multitenant",
    title: "Multi-tenant SaaS CRM Backend",
    category: "Cloud & Backend",
    client: "PropTech Startup (Berlin)",
    role: "Backend Architect",
    metric: "15k Daily Active Users",
    desc: "Architected a secure row-level tenant database schema in PostgreSQL. Optimized connection pools and automated token auth for external API consumers.",
    tags: ["PostgreSQL", "Express.js", "JWT Auth", "Redis"],
    icon: Database
  }
];

const categories = ["All", "Geospatial", "Web Applications", "Cloud & Backend"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "Case Studies | Ravian Matrix Systems";
  }, []);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-bg-base min-h-screen text-primary">
      <PageHero 
        eyebrow="Portfolio"
        title="Our Case Studies"
        description="Explore concrete digital and geospatial solutions we engineered for our enterprise partners, featuring key performance metrics."
      />

      {/* Portfolio Filter & Showcase */}
      <section className="py-16 sm:py-24 bg-bg-surface" style={{ borderBottom: '1px solid var(--line-soft)' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg font-mono text-[11px] sm:text-xs tracking-wider uppercase border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold border-gold text-brand-black font-semibold shadow-[0_4px_12px_rgba(225,184,74,0.2)]"
                    : "bg-bg-base border-line text-muted hover:border-gold/50 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div key={project.id} className="flex">
                  <Card 
                    className="p-6 sm:p-8 bg-bg-base border-line flex flex-col justify-between w-full h-full relative"
                    glow
                  >
                    <div>
                      {/* Bounding Box / Client Header */}
                      <div className="flex flex-col gap-1 mb-6 border-b border-line pb-4">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted">Client / Location</span>
                        <span className="text-[13px] font-semibold text-primary">{project.client}</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted mt-2">Role</span>
                        <span className="text-[12px] text-muted">{project.role}</span>
                      </div>

                      {/* Performance Metric highlight */}
                      <div className="text-[26px] font-bold text-signal font-display tracking-tight mb-4">
                        {project.metric}
                      </div>

                      <h3 className="text-[18px] font-semibold tracking-tight text-primary mb-3 flex items-center justify-between group-hover:text-gold transition-colors">
                        {project.title}
                        <Icon className="w-4 h-4 text-gold flex-shrink-0 ml-2" />
                      </h3>

                      <p className="text-[14px] leading-relaxed text-muted mb-6">
                        {project.desc}
                      </p>
                    </div>

                    {/* Bottom Metadata & Contact Hook */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line mb-4">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="font-mono text-[9.5px] text-muted px-2.5 py-1 border border-line rounded-full bg-bg-surface"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href="/contact"
                        className="font-mono text-[10px] tracking-widest uppercase text-gold hover:text-gold-soft flex items-center gap-1.5 transition-colors mt-2"
                      >
                        Request Architecture Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
