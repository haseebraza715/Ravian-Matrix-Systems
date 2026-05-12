export default function ServiceStrip() {
  const items = [
    "GIS Analysis",
    "Remote Sensing",
    "WebGIS",
    "Hydrological Modeling",
    "Environmental Monitoring",
    "Spatial Databases",
    "IT & Automation",
    "Drone Mapping",
    "Data Pipelines",
  ];

  // Double the items for seamless loop
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden py-[18px]" style={{ borderTop: '1px solid rgba(14,14,12,0.14)', borderBottom: '1px solid rgba(14,14,12,0.14)', background: '#E8E1CF' }}>
      <div className="marquee-track">
        {doubled.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8 sm:gap-10 px-5 sm:px-7 flex-shrink-0" style={{ borderRight: '1px solid rgba(14,14,12,0.07)' }}>
            <span className="text-[8px]" style={{ color: '#B8902A' }}>◆</span>
            <span className="font-mono text-[12px] tracking-[0.06em] uppercase whitespace-nowrap" style={{ color: '#2A2823' }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
