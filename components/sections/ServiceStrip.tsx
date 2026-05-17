export default function ServiceStrip() {
  const items = [
    "Business Websites",
    "Web Platforms",
    "Custom Applications",
    "Backend Systems",
    "Workflow Automation",
    "GIS Analysis",
    "WebGIS Solutions",
    "Remote Sensing",
    "Digital Marketing",
    "SEO & Content",
    "Graphic Design",
    "API Integrations",
  ];

  // Double the items for seamless loop
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden py-[18px]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#050605' }}>
      <div className="marquee-track">
        {doubled.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8 sm:gap-10 px-5 sm:px-7 flex-shrink-0" style={{ borderRight: '1px solid rgba(255,255,255,0.03)' }}>
            <span className="text-[8px] text-gold">◆</span>
            <span className="font-mono text-[12px] tracking-[0.06em] uppercase whitespace-nowrap text-white/60">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
