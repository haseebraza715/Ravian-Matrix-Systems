export default function ContactCTA() {
  return (
    <section id="contact" className="py-[140px] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="relative border border-line rounded-[18px] bg-paper p-8 md:p-16 lg:p-20 overflow-hidden">
          {/* Internal Grid pattern */}
          <div className="absolute inset-0 bg-[image:linear-gradient(var(--line-soft)_1px,transparent_1px),linear-gradient(90deg,var(--line-soft)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" style={{ maskImage: "radial-gradient(ellipse at 80% 20%, black 0%, transparent 60%)", WebkitMaskImage: "radial-gradient(ellipse at 80% 20%, black 0%, transparent 60%)" }}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 relative items-center">
            <div>
              <div className="eyebrow">Start a project</div>
              <h2 className="font-space text-[clamp(36px,4.6vw,60px)] leading-[1] tracking-[-0.03em] font-medium mt-4 mb-6 text-balance text-ink">
                Have a project involving maps, data, websites, or automation?
              </h2>
              <p className="text-[17px] text-ink2 leading-[1.5] m-0 max-w-[500px]">
                Tell us what you are trying to build. We&apos;ll help turn it into a clear, usable digital solution.
              </p>
            </div>

            <div className="border border-line bg-bg rounded-xl p-6 shadow-sm">
              <h5 className="font-ibm text-[11px] tracking-[0.12em] uppercase text-muted m-0 mb-4.5">Send a message</h5>
              <form className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-ibm text-[10.5px] text-muted tracking-[0.05em]">YOUR NAME</label>
                  <input type="text" id="name" className="font-sans text-[14px] px-3 py-2.5 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-ink transition-colors" placeholder="Jane Doe" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-ibm text-[10.5px] text-muted tracking-[0.05em]">WORK EMAIL</label>
                  <input type="email" id="email" className="font-sans text-[14px] px-3 py-2.5 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-ink transition-colors" placeholder="jane@company.com" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="interest" className="font-ibm text-[10.5px] text-muted tracking-[0.05em]">INTERESTED IN</label>
                  <select id="interest" className="font-sans text-[14px] px-3 py-2.5 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-ink transition-colors appearance-none">
                    <option>Web Development</option>
                    <option>Web GIS Platform</option>
                    <option>Data Automation Pipeline</option>
                    <option>Remote Sensing Analysis</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="details" className="font-ibm text-[10.5px] text-muted tracking-[0.05em]">PROJECT DETAILS</label>
                  <textarea id="details" rows={3} className="font-sans text-[14px] px-3 py-2.5 border border-line rounded-lg bg-paper text-ink focus:outline-none focus:border-ink transition-colors resize-none" placeholder="Briefly describe what you're building..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center mt-2">
                  Start a conversation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
