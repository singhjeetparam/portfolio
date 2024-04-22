export default function Hero() {
  return (
    <div id="home">
      <div className="relative  px-6 pt-14 lg:px-8 h-screen flex justify-center items-center ">
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100/10 hover:ring-gray-100 bg-white/5">
              Front End Developer
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-9xl">
             PARAMJEET SINGH
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
            Coding, Coffee, and Creativity - Front-end Developer with a Passion for Crafting User-Friendly Experiences!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-full bg-white/5 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-gray-100/10 hover:ring-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
