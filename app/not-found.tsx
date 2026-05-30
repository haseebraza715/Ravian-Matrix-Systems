import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 sm:px-8 text-center">
      <div className="font-mono text-gold text-[12px] tracking-widest uppercase mb-4">Error 404</div>
      <h1 className="text-[clamp(40px,6vw,60px)] font-medium leading-none mb-6 text-brand-cream tracking-tight">
        Signal <span className="text-white/20">Lost</span>.
      </h1>
      <p className="text-white/60 mb-8 max-w-[400px]">
        The page or coordinate you are looking for does not exist in our spatial database.
      </p>
      <Link href="/" className="btn bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 text-brand-cream transition-all">
        Return to Global View
      </Link>
    </div>
  );
}
