import Image from "next/image";
import headshot from '@/public/headshot.svg';
import githubIcon from '@/public/github_icon.svg';
import linkedinIcon from '@/public/linkedin_icon.svg';


export default function Home() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col">
        <Image
          src={headshot}
          alt="headshot"
          width={200}
          height={200}
          className="rounded-full"
        />

        <h2>hello, my name is</h2>
        <h1>Edwin Li</h1>
        <h3>Currently studying ECE @ CMU</h3>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a href="https://github.com/Hipposhark" target="_blank" rel="noopener noreferrer">
            <Image
              aria-hidden
              src={githubIcon}
              alt="gitHub icon"
              width={24}
              height={24}
            />
          </a>
          <a href="https://www.linkedin.com/in/edwin-li-5a398b248/" target="_blank" rel="noopener noreferrer">
            <Image
              aria-hidden
              src={linkedinIcon}
              alt="linkedin icon"
              width={24}
              height={24}
            />
          </a>
        </footer>
      </div>
      <div className="flex flex-col">

      </div>
    </div>
  );
}
