export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-white/10 border-t-gold rounded-full animate-spin"></div>
        <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Loading Data...</div>
      </div>
    </div>
  );
}
