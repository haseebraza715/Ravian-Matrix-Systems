"use client";

import { useState } from "react";
import { Card } from "@/components/ui-custom/Card";
import { Database, Globe, MapPin, ArrowRight } from "lucide-react";
import Link from "@/lib/i18n/Link";

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  role: string;
  metric: string;
  desc: string;
  tags: string[];
}

interface WorkShowcaseProps {
  categories: string[];
  projects: Project[];
  requestDetailsLabel: string;
  clientLabel: string;
  roleLabel: string;
}

export default function WorkShowcase({
  categories,
  projects,
  requestDetailsLabel,
  clientLabel,
  roleLabel
}: WorkShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0] || "All");

  const getProjectIcon = (id: string) => {
    if (id.includes("ndvi") || id.includes("wind")) return MapPin;
    if (id.includes("water") || id.includes("billing")) return Globe;
    if (id.includes("logistics") || id.includes("crm")) return Database;
    return Globe;
  };

  const englishCategories = ["All", "Geospatial", "Web Applications", "Cloud & Backend"];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === categories[0] || activeCategory === "All" || activeCategory === "Alle") return true;

    // Find the English category name to filter correctly
    const catIdx = categories.indexOf(activeCategory);
    const engCategoryName = englishCategories[catIdx] || activeCategory;

    return p.category === engCategoryName || p.category === activeCategory;
  });

  return (
    <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`h-11 px-5 flex items-center justify-center whitespace-nowrap rounded-lg font-mono text-[11px] sm:text-xs tracking-wider uppercase border transition-all duration-300 ${
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
        {filteredProjects.map((project) => {
          const Icon = getProjectIcon(project.id);
          return (
            <div key={project.id} className="flex">
              <Card
                className="p-6 sm:p-8 bg-bg-base border-line flex flex-col justify-between w-full h-full relative"
                glow
              >
                <div>
                  {/* Bounding Box / Client Header */}
                  <div className="flex flex-col gap-1 mb-6 border-b border-line pb-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                      {clientLabel}
                    </span>
                    <span className="text-[13px] font-semibold text-primary">{project.client}</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted mt-2">
                      {roleLabel}
                    </span>
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
                    {project.tags.map((tag) => (
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
                    {requestDetailsLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
