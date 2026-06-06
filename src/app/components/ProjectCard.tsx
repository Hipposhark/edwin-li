import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import TruncatingSkillBadges from "./TruncatingSkillBadges";

export function ProjectCard({ slug, title, description, image, skills }: Project) {
    return (
        <Link href={`/projects/${slug}`} className="block">
            <article
                tabIndex={0}
                className="mb-6 p-4 rounded-lg bg-[var(--background)] transition transform hover:-translate-y-1 hover:shadow-lg hover:brightness-105"
            >
                <div className="flex items-stretch gap-4">
                    <div className="relative w-32 self-stretch min-h-28 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <Image
                            aria-hidden
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 640px) 100vw, 200px"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-[var(--foreground)]">{title}</h3>
                        <p className="mt-2 text-sm text-[var(--foreground)]/85">{description}</p>

                        <div className="mt-3 min-w-0">
                            <TruncatingSkillBadges skills={skills} />
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}