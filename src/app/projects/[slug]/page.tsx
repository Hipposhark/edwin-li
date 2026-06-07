import Image from "next/image";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SkillBadge } from "@/app/components/SkillBadge";
import MasonryGallery from "@/app/components/MasonryGallery";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

    return (
        <main className="mx-auto max-w-5xl px-6 py-12 space-y-12">
            <Link href="/" className="text-sm underline">
                Back to home
            </Link>

            <section className="relative min-h-[360px] overflow-hidden border border-[var(--color-secondary)] rounded-2xl">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8">
                    <h1 className="text-4xl font-bold text-white md:text-6xl">
                        {project.title}
                    </h1>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/80">
                        {renderProjectDate(project.startDate, project.endDate)}
                    </p>
                </div>
            </section>

            <section>
                <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} />
                    ))}
                </div>
            </section>

            <section>
                <h2 className="mb-4 text-2xl font-semibold">Details</h2>
                <div className="space-y-3">
                    <p>{project.longDescription || project.description}</p>
                    <ul className="mt-3 pl-6 list-disc text-sm text-[var(--foreground)]/85 space-y-1">
                        {project.details?.length ? (project.details.map((detail) => (
                                <li key={detail} className="mt-0">{renderInlineBold(detail)}</li>
                            ))) :
                            null
                        }
                    </ul>
                </div>
            </section>


            {project.links?.length ? (
                <section>
                    <h2 className="mb-4 text-2xl font-semibold">Relevant Links</h2>
                    <div className="space-y-3">
                        {project.links.map((link) => (
                            <a key={link.href} href={link.href} className="block underline">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </section>) :
                null
            }

            {project.images?.length ? (
                <section>
                    <h2 className="mb-4 text-2xl font-semibold">More Images</h2>
                    {
                        project.images.length > 1 ? 
                            (<MasonryGallery images={project.images} />)
                        : 
                            (<div className="grid gap-4 md:grid-cols-2">
                            {project.images?.map((src) => (
                                <Image
                                    key={src}
                                    src={src}
                                    alt={project.title}
                                    width={1200}
                                    height={800}
                                    className="rounded-xl object-cover"
                                />
                            ))}
                        </div>)
                    }
                    
                </section>) :
                null
            }
        </main>
    );
}

function renderProjectDate(startDate: string, endDate?: string) {
  if (endDate && startDate === endDate)
    return startDate;

  if (!endDate)
    return `${startDate} - Present`;

  return `${startDate} - ${endDate}`;
}

function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*.+?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return <strong key={index}><u>{part.slice(2, -2)}</u></strong>;
    else 
        return <span key={index}>{part}</span>;
  });
}