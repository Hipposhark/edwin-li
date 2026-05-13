import Image from "next/image";
import { SocialIcon } from "./components/SocialIcon";

export default function Home() {
    return (
        // <div className="flex flex-row justify-center ">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4 lg:items-start">
                <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">

                    <div className="flex items-center gap-6 flex-wrap">
                        <Image
                            src="/headshot.svg"
                            alt="headshot"
                            width={160}
                            height={160}
                            className="rounded-full w-40 h-40"
                        />

                        <div >
                            <h1 className="text-5xl tracking-tight font-bold sm:text-7xl ">
                                <span className="sm:block">Edwin </span>
                                <span className="sm:block">Li</span>
                            </h1>
                        </div>
                    </div>

                    <h2>ECE Student @ Carnegie Mellon University</h2>
                    <p>I build computer hardware from first-principles.</p>

                    <footer className="row-start-3 flex gap-[24px] flex-col items-center justify-center">
                        <div className="row-start-3 flex gap-[24px] flex-row items-center justify-center">
                            <SocialIcon
                                href="https://github.com/Hipposhark"
                                icon="/github_icon.svg"
                                alt="GitHub Icon" />
                            <SocialIcon
                                href="https://www.linkedin.com/in/edwin-li-5a398b248/"
                                icon="/linkedin_icon.svg"
                                alt="LinkedIn Icon" />

                        </div>
                        <p>© 2026 Edwin Li</p>
                    </footer>
                </div>

                <div className="pt-24 lg:w-[52%] lg:py-24">
                    <section>
                        <h1>
                            About
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section>
                        <h1>
                            Experience
                        </h1>

                        {/* experience card component */}
                        <li>
                            <div>

                            </div>
                        </li>

                    </section>

                    <section>
                        <h1>
                            Projects
                        </h1>

                        {/* project card component */}
                    </section>

                    <section>
                        <h1>
                            Skills
                        </h1>

                        {/* skill bullet component */}
                        <li>

                        </li>
                    </section>


                    <section>
                        <h1>
                            Get in Touch!
                        </h1>
                        <p>
                            Open to internships and research opportunities!
                        </p>

                        
                        {/* button to C.V. */}
                    </section>
                </div>
            </div>
        </div>
    );
}
