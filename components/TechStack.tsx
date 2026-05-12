import { techStack } from "@/data/content";

export default function TechStack() {
  return (
    <section id="stack" className="py-[120px] border-b border-line">
      <div className="container-custom">
        <div>
          <div className="eyebrow">Our tools</div>
          <h2 className="font-space text-[clamp(36px,4.2vw,56px)] leading-[1] tracking-[-0.03em] font-medium mt-3.5 mb-12 text-ink">
            What we build with.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mt-12">
          {techStack.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-ibm text-[11px] tracking-[0.12em] uppercase text-muted m-0 mb-4 pb-3.5 border-b border-line">
                {col.group}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-3">
                {col.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-baseline gap-3 text-[15px] text-ink">
                    <span className="w-1.5 h-1.5 bg-mustard rounded-full shrink-0 -translate-y-0.5"></span>
                    {item.name}
                    <span className="font-ibm text-[11px] text-muted ml-auto">{item.type}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
