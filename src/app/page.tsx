import Image from "next/image";
import nextConfig from "../../next.config";

export default function Home() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col">
        <Image
          src={`${nextConfig.basePath}/headshot.svg`}
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
              src={`${nextConfig.basePath}/github_icon.svg`}
              alt="gitHub icon"
              width={24}
              height={24}
            />
          </a>
          <a href="https://www.linkedin.com/in/edwin-li-5a398b248/" target="_blank" rel="noopener noreferrer">
            <Image
              aria-hidden
              src={`${nextConfig.basePath}/linkedin_icon.svg`}
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
