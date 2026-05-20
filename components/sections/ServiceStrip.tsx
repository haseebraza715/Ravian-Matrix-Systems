export default function ServiceStrip() {
  const logos = [
    { name: "Web Solutions", label: "WEB" },
    { name: "Software Development", label: "SOFTWARE" },
    { name: "Geospatial Intelligence", label: "GEO" },
    { name: "Digital Growth", label: "GROWTH" },
    { name: "English & German", label: "LANG" },
    { name: "Non-Binding Quote", label: "QUOTE" }
  ];

  return (
    <section className="py-6 bg-bg-surface border-y border-line overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 md:gap-x-12 opacity-40 hover:opacity-60 transition-opacity duration-300">
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted select-none w-full lg:w-auto text-center lg:text-left mb-2 lg:mb-0">
            CORE SERVICE AREAS
          </span>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-8 md:gap-x-12 w-full lg:w-auto flex-grow">
            {logos.map((logo, index) => (
              <span 
                key={index}
                className="font-mono text-xs sm:text-[13px] tracking-widest text-primary font-bold hover:text-gold transition-colors cursor-default"
                title={logo.name}
              >
                {"//" + logo.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
