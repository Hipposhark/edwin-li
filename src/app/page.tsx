import Image from "next/image";

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Home() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col">
        <Image
          src={`${imagePrefix}/headshot.svg`}
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
              src={`${imagePrefix}/github_icon.svg`}
              alt="gitHub icon"
              width={24}
              height={24}
            />
          </a>
          <a href="https://www.linkedin.com/in/edwin-li-5a398b248/" target="_blank" rel="noopener noreferrer">
            <Image
              aria-hidden
              src={`${imagePrefix}/linkedin_icon.svg`}
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

    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //   <div className="columns-2">
    //     <div className="flex flex-col">
    //       <div>
    //         hello, my name is
    //       </div>
    //       <div>
    //         Edwin Li
    //       </div>
    //     </div>
    //     <div>

    //     </div>
    //   </div>
    // </div>
  );
}
