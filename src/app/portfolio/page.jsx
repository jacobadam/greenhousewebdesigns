import Image from "next/image";

export default function Portfolio() {
  const portfolioData = [
    {
      src: "/animalshepherd-homepage.webp",
      altText: "Animal Sanctuary",
      title: "Animal Sanctuary",
      description:
        "Built a website for an animal sanctuary that includes adoption application forms and donation processing. Focused on organized navigation so users can find sanctuary information and ways to help.",
      url: "https://www.animalshepherd.org/en",
    },
    {
      src: "/katieshevlin-homepage.webp",
      altText: "Content Services Portfolio",
      title: "Content Services Portfolio",
      description:
        "Developed a polished website for a freelance content creator, showcasing their skills, services, and portfolio to attract and engage potential clients.",
      url: "https://www.katieshevlin.com/",
    },
    {
      src: "/studio24-homepage.webp",
      altText: "Hair Salon",
      title: "Hair Salon",
      description:
        "Developed a website for a hair salon that features an online booking system and a gallery of their styling work. Focused on making it easy for clients to schedule appointments and view available services.",
      url: "https://www.studio-24.ca/",
    },
    {
      src: "/neilnevitt-homepage.webp",
      altText: "Healthcare",
      title: "Healthcare",
      description:
        "Designed and built a modern website for a healthcare provider, ensuring responsive design for all devices. Focused on user-friendly navigation and improving online visibility.",
      url: "https://www.neilnevitt.com/",
    },
  ];

  return (
    <section className="pt-28 lg:pt-4 pb-20 relative bg-transparent grow">
      <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto py-12 lg:py-24">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-between gap-5 flex-col mb-14">
            <h2 className="text-zinc-800 dark:text-zinc-200 text-3xl md:text-4xl xl:text-5xl font-semibold leading-snug">
              Portfolio
            </h2>
            <p className="font-normal text-lg text-zinc-900 dark:text-zinc-100 max-w-3xl text-center">
              Whatever your end goal, make it happen with a modern, professional
              website. Here&apos;s some examples of my recent work:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {portfolioData.map(
            ({ src, altText, title, description, url }, id) => (
              <div
                key={id}
                className="relative overflow-hidden group rounded"
                tabIndex={0}
              >
                <div className="w-80 h-80">
                  <Image
                    src={src}
                    alt={altText}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-focus-within:scale-110 group-active:scale-110"
                  />
                </div>

                <div className="absolute bottom-0 left-0 z-10 py-7 px-6 flex justify-between flex-col transition-all duration-500 transform translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 group-active:translate-y-0 group-hover:w-full group-hover:h-full group-hover:bg-black/80 group-focus-within:w-full group-focus-within:h-full group-focus-within:bg-black/90 group-active:w-full group-active:h-full group-active:bg-black/50 pointer-events-none group-focus-within:pointer-events-auto group-active:pointer-events-auto rounded">
                  <div className="block">
                    <h6 className="text-xl font-bold leading-8 text-white mb-5">
                      {title}
                    </h6>
                    <p className="text-base font-normal text-gray-100 max-w-xl">
                      {description}
                    </p>
                  </div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer group flex items-center gap-2 text-base font-semibold text-white transition-all duration-500 pointer-events-auto"
                  >
                    View Website
                    <svg
                      className="transition-all duration-500 group-hover:translate-x-1 group-focus-within:translate-x-1 group-active:translate-x-1"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 9L14.25 9M10.5 13.5L14.4697 9.53033C14.7197 9.28033 14.8447 9.15533 14.8447 9C14.8447 8.84467 14.7197 8.71967 14.4697 8.46967L10.5 4.5"
                        stroke="#FFF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
