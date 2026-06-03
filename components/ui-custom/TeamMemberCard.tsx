import { TeamMemberPortrait } from "@/components/ui-custom/TeamMemberPortrait";
import { cn } from "@/lib/utils";

export type TeamMemberCardData = {
  name: string;
  role: string;
  initials: string;
  description: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
};

type TeamMemberCardProps = {
  member: TeamMemberCardData;
  className?: string;
};

export function TeamMemberCard({ member, className }: TeamMemberCardProps) {
  return (
    <article
      className={cn(
        "team-member-card flex h-full w-full flex-col rounded-2xl border border-line bg-bg-base p-6 sm:p-8 text-muted shadow-[0_16px_36px_-22px_rgba(3,8,18,0.7)] transition-all duration-300 hover:border-gold/35 hover:shadow-[0_22px_48px_-24px_rgba(3,8,18,0.82)]",
        className
      )}
    >
      {member.image && member.imageWidth && member.imageHeight ? (
        <TeamMemberPortrait
          src={member.image}
          alt={member.name}
          initials={member.initials}
          width={member.imageWidth}
          height={member.imageHeight}
        />
      ) : (
        <div
          className="mb-6 flex h-[184px] w-full shrink-0 items-center justify-center"
          aria-hidden
        >
          <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 font-display text-[28px] font-semibold text-gold-ink shadow-[0_8px_24px_-12px_rgba(11,18,32,0.1)]">
            {member.initials}
          </div>
        </div>
      )}

      <p className="team-member-role mb-3 shrink-0 font-mono text-xs tracking-[0.12em] uppercase text-gold-ink">
        {member.role}
      </p>
      <h3 className="team-member-name mb-3 shrink-0 text-[20px] font-semibold leading-snug text-brand-black">
        {member.name}
      </h3>
      <p className="team-member-bio flex-1 text-[14px] leading-relaxed text-slate-600">
        {member.description}
      </p>
    </article>
  );
}
