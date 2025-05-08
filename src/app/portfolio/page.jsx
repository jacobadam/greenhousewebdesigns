export default function Portfolio() {
  const portfolioData = [
    {
      imgSrc: "https://www.katieshevlin.com/hero-image.webp",
      altText: "Content Services Portfolio",
      title: "Content Services Portfolio",
      description:
        "Developed a polished website for a freelance content creator, showcasing their skills, services, and portfolio to attract and engage potential clients.",
      url: "https://www.katieshevlin.com/",
    },
    {
      imgSrc: "https://www.neilnevitt.com/homepage-image.webp",
      altText: "Healthcare Business",
      title: "Healthcare Business",
      description:
        "Designed and built a modern website for a healthcare provider, ensuring responsive design for all devices. Focused on user-friendly navigation and improving online visibility.",
      url: "https://www.neilnevitt.com/",
    },
  ];
  return (
    <section
      className="pt-4 sm:pt-8 pb-20 relative bg-transparent flex-grow"
      style={{
        paddingTop: "clamp(8rem, 10vw, 8rem)",
        minHeight: "calc(100vh - clamp(4rem, 10vw, 8rem))",
      }}
    >
      <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-between gap-5 flex-col mb-14">
            <h2 className="text-black dark:text-white text-2xl lg:text-3xl font-semibold leading-snug">
              Portfolio
            </h2>
            <p className="font-normal text-base text-zinc-900 dark:text-zinc-100 max-w-3xl text-center">
              Whatever your end goal, make it happen with a modern, professional
              website. Here’s some examples of my recent work:
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {portfolioData.map(
            ({ imgSrc, altText, title, description, url }, id) => (
              <div
                key={id}
                className="relative md:w-[calc(50%-1rem)] lg:w-[calc(50%-2rem)] overflow-hidden rounded-xl group focus-within:ring"
                tabIndex={0}
              >
                <img
                  src={imgSrc}
                  alt={altText}
                  className="h-80 w-full object-cover transition-all duration-700 group-hover:scale-110 group-focus-within:scale-110 group-active:scale-110"
                />

                <div className="absolute bottom-0 left-0 z-10 py-7 px-6 flex justify-between flex-col transition-all duration-500 transform translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 group-active:translate-y-0 group-hover:w-full group-hover:h-full group-hover:bg-black/50 group-focus-within:w-full group-focus-within:h-full group-focus-within:bg-black/50 group-active:w-full group-active:h-full group-active:bg-black/50 rounded-xl pointer-events-none group-focus-within:pointer-events-auto group-active:pointer-events-auto">
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
                    View Portfolio
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
            )
          )}
        </div>
      </div>
    </section>
  );
}
