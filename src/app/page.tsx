import Image from "next/image";
import { SocialIcon } from "./components/SocialIcon";
import { ExperienceCard } from "./components/ExperienceCard";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBadge } from "./components/SkillBadge";

import { projects } from "@/data/projects";
import { skillClasses } from "@/data/skillClasses";
import { experiences } from "@/data/experiences";

export default function Home() {



    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between md:gap-12 lg:gap-36 lg:items-start">
                {/* left side */}
                <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">

                    <div className="flex items-center gap-8 flex-wrap">
                        <Image
                            src="/headshot2.svg"
                            alt="headshot"
                            width={160}
                            height={160}
                            className="rounded w-40 h-40"
                        />

                        <div >
                            <h1 className="text-5xl tracking-tight font-bold sm:text-7xl ">
                                <span className="sm:block">Edwin </span>
                                <span className="sm:block">Li</span>
                            </h1>
                        </div>
                    </div>

                    {/* <h2>I build production-ready hardware from first principles</h2> */}


                    <section className="py-4 md:py-6">
                        {/* <h1>
                            ABOUT
                        </h1> */}
                        <p>
                            Hey there! I&apos;m currently a rising third-year studying Electrical & Computer 
                            Engineering student at CMU and am interested in digital hardware and their
                            applications in AI. My work spans FPGA and RTL design, embedded systems, 
                            circuit design, and low-level software. In my free time, I enjoy fishing 
                            and producing music.
                        </p>
                    </section>

                    <footer className="row-start-3 flex gap-[24px] flex-col items-center justify-center">
                        <div className="row-start-3 flex gap-[24px] flex-row items-center justify-center">
                            <SocialIcon
                                href="https://github.com/Hipposhark"
                                icon="/icons/github_icon.svg"
                                alt="GitHub Icon" />
                            <SocialIcon
                                href="https://www.linkedin.com/in/edwin-li-5a398b248/"
                                icon="/icons/linkedin_icon.svg"
                                alt="LinkedIn Icon" />

                        </div>
                        <p>© 2026 Edwin Li</p>
                    </footer>
                </div>

                {/* right side */}
                <div className="pt-24 lg:w-[60%] lg:py-24">
                    <section>
                        <h1>
                            EXPERIENCES
                        </h1>

                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.title}
                                {...experience} />
                        ))}
                    </section>

                    <section>
                        <h1>
                            PROJECTS
                        </h1>
                        {projects.map((project) => (
                            <ProjectCard 
                                key={project.title}
                                {...project} />
                        ))}
                    </section>

                    <section>
                        <h1>
                            SKILLS
                        </h1>

                        <div className="w-full p-4 rounded-md bg-[var(--background)] transition hover:brightness-105">
                            <div className="grid grid-cols-1 gap-4">
                                {skillClasses.map((skillClass) => (
                                    <div key={skillClass.class}>
                                        <h3 className="font-semibold text-sm text-[var(--foreground)] mb-2">{skillClass.class}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skillClass.skills.map((skill) => (
                                                <SkillBadge key={skill} skill={skill} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </section>


                    <section>
                        <h1>
                            CONTACT
                        </h1>
                        <p>
                            Get in touch by email <a href="mailto:edwinl@andrew.cmu.edu" className="text-[var(--color-primary)] hover:underline">edwinl@andrew.cmu.edu</a>. I am open to internships and research opportunities!
                        </p>

                        {/* button to C.V. */}
                    </section>
                </div>
            </div>
        </div>
    );
}
