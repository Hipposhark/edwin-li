interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span
      className="inline-flex items-center whitespace-nowrap px-2 py-0.5 text-xs rounded border text-[var(--foreground)]/90 bg-[var(--color-accent)]/10 border-[var(--color-secondary)]/40 hover:bg-[var(--color-accent)]/20"
    >
      {skill}
    </span>
  );
}