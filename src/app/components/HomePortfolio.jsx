import Image from "next/image";
import LinkButton from "../ui/LinkButton";

export default function HomePortfolio() {
  const portfolios = [
    {
      href: "https://www.animalshepherd.org/en",
      image: "/animalshepherd-homepage.webp",
      alt: "Animal Sanctuary Website",
      title: "Animal Sanctuary",
      category: "Nonprofit",
      aria: "Visit Animal Sanctuary site",
    },
    {
      href: "https://www.katieshevlin.com/",
      image: "/katieshevlin-homepage.webp",
      alt: "Content services website",
      title: "Content Services Portfolio",
      category: "Content Design",
      aria: "Visit Content Services Portfolio site",
    },
    {
      href: "https://www.studio-24.ca/",
      image: "/studio24-homepage.webp",
      alt: "Hair Salon Website",
      title: "Hair Salon",
      category: "Beauty",
      aria: "Visit Hair Salon site",
    },
  ];

  return (
    <section className="w-full h-full py-40 lg:py-28 relative bg-background dark:bg-zinc-950">
      <div className="w-full max-w-2xl md:max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="mb-14 text-center">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black dark:text-white leading-13 mb-5">
            Recent Projects
          </h1>
          <p className="text-zinc-900 dark:text-zinc-100 text-lg md:text-xl lg:max-w-3xl lg:mx-auto">
            A selection of recent work focused on performance, usability, and
            conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {portfolios.map((project) => (
            <a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-8 w-full"
            >
              <div className="w-full h-full">
                <Image
                  className="w-full h-full rounded object-contain transition-transform duration-300 group-hover:scale-105"
                  src={project.image}
                  alt={project.alt}
                  width={2830}
                  height={1346}
                />
              </div>

              <div className="flex items-center justify-between w-full">
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-1">
                    {project.title}
                  </h2>
                  <h3 className="font-medium text-lg text-zinc-800 dark:text-zinc-200">
                    {project.category}
                  </h3>
                </div>

                <button
                  aria-label={project.aria}
                  className="border border-lightmode dark:border-darkmode py-2 px-4 rounded transition-all duration-300 group-hover:bg-lightmode dark:group-hover:bg-darkmode"
                >
                  <svg
                    className="stroke-lightmode dark:stroke-darkmode transition-all duration-300 group-hover:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={16}
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center lg:mt-4">
          <LinkButton href="/services">View all</LinkButton>
        </div>
      </div>
    </section>
  );
}
