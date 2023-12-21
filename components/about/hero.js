import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden ">
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
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 items-center">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 flex flex-col justify-center">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            The Creative Technologist
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 font-light">
            Hello! I'm a Front-End Developer. My
            journey, rooted in a deep-seated passion for coding, led me to a
            B.Tech in Computer Science and Engineering. This blend of artistic
            vision and technical skills defines my approach to web development.
            In the world of ones and zeros, I see a canvas for creativity.
            Specializing in HTML, CSS, JavaScript, React, and Next.js, I bring
            to life intuitive and visually captivating web experiences. My
            commitment to quality and innovation is not just about building
            websites but about crafting digital stories that resonate. Beyond
            the confines of code, my creative energies flow through graphic
            designing and abstract photography. These pursuits, more than
            hobbies, are extensions of my professional narrative, enriching my
            perspective and attention to detail. I
            thrive on challenges that blur the lines between technology and art,
            always aiming to push the digital envelope. 
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32 justify-center">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="/aboutHero.gif"
              alt="App screenshot"
              width={500}
              height={500}
              className="w-[25rem] rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
