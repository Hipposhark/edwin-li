import { Experience } from "@/data/experiences";
import { SkillBadge } from "./SkillBadge";

export function ExperienceCard({ title, startDate, endDate, details, skills }: Experience) {
    return (
        <article
            tabIndex={0}
            className="mb-6 py-6 px-6 rounded-lg bg-[var(--background)] transition transform hover:-translate-y-1 hover:shadow-lg hover:brightness-105"
        >
            <div className="flex gap-4">
                <div className="w-28 flex-shrink-0 text-sm text-[var(--foreground)]/80">
                    <div className="mt-1 text-xs text-[var(--foreground)]/70">{startDate} - {endDate}</div>
                </div>

                <div className="flex-1">
                    <header className="font-semibold text-lg text-[var(--foreground)]">{title}</header>
                    <ul className="mt-3 pl-6 list-disc text-sm text-[var(--foreground)]/85 space-y-1">
                        {details.map((detail) => (
                            <li key={detail} className="mt-0">{detail}</li>
                        ))}
                    </ul>
                    {skills && skills.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {skills.map((s) => (
                                <SkillBadge key={s} skill={s} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}