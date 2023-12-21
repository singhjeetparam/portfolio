import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-ful ">
        <Image src={'/heroBg.webp'} width={10000} height={10000} className="scale-[50] blur-sm"/>
      </div>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 flex lg:px-8 lg:py-40 justify-center min-h-screen items-center">
        <div className="mx-auto lg:mx-0  lg:pt-8 text-center">
          <h1 className="mt-10 text-7xl font-bold tracking-tight text-white sm:text-9xl break-words">
            PARAM<br className="md:hidden"></br>JEET<br className="md:hidden"></br> SINGH
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 font-medium italic">
          Creating Impactful Digital Journeys
          </p>
          <div className="mt-10 flex items-center gap-x-6 justify-center">
            <a
              href="/about"
              className="rounded-md bg-[url('/skills.jpg')] px-3.5 py-2.5 text-sm font-semibold bg-cover text-white"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
