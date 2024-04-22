const timeline = [
  {
    name: "CODING NINJAS",
    description:
      "Teaching Assistant",
    date: "Jun 2022",
    dateTime: "2021-08",
  },
  {
    name: "The Web Plant",
    description:
      "Web Designer",
    date: "Mar 2023",
    dateTime: "2021-12",
  },
  {
    name: "Vaionex Corporation",
    description:
      "Frontend Developer",
    date: "Sep 2023",
    dateTime: "2022-02",
  },
//   {
//     name: "Global launch of product",
//     description:
//       "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
//     date: "Dec 2022",
//     dateTime: "2022-12",
//   },
];

export default function Experience() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8" id="experience">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            EXPERIENCE
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
          Navigating Development: Blending Code and Creativity for Impact
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-16">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-white"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="#ffffff" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-white sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-200">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
