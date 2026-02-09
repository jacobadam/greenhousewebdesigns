import Image from "next/image";

export default function HomePortfolio() {
  return (
    <section className="w-full h-full py-40 lg:py-24 relative bg-zinc-200 dark:bg-zinc-950">
      <div className="w-full max-w-2xl md:max-w-7xl px-6 lg:px-8 mx-auto">
        <h1 className="text-2xl xl:text-3xl font-bold text-black dark:text-white mb-16 text-center lg:text-left">
          Professional Project Achievements
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <a
            href="https://www.animalshepherd.org/en"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center flex-col gap-8 w-full cursor-pointer"
          >
            <div className="w-full h-full">
              <Image
                className="w-full h-full rounded object-contain transform transition-transform duration-300 group-hover:scale-105"
                src="/animalshepherd-homepage.webp"
                alt="Animal Sanctuary Website"
                width={2830}
                height={1346}
              />
            </div>
            <div className="flex items-center justify-between max-w-101.5 md:max-w-full w-full lg:px-0">
              <div className="block">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-1">
                  Animal Sanctuary
                </h2>
                <h3 className="font-medium text-lg text-zinc-800 dark:text-zinc-200">
                  Nonprofit
                </h3>
              </div>
              <button
                aria-label="Visit Animal Sanctuary site"
                className="border border-lightmode dark:border-darkmode py-2 px-4 rounded-full transition-all duration-300 group-hover:bg-lightmode dark:group-hover:bg-darkmode cursor-pointer"
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
                    stroke=""
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </a>

          <a
            href="https://www.katieshevlin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center flex-col gap-8 w-full cursor-pointer"
          >
            <div className="w-full h-full">
              <Image
                className="w-full h-full rounded object-contain transform transition-transform duration-300 group-hover:scale-105"
                src="/katieshevlin-homepage.webp"
                alt="Content services website"
                width={2834}
                height={1348}
              />
            </div>
            <div className="flex items-center justify-between max-w-101.5 md:max-w-full w-full lg:px-0">
              <div className="block">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-1">
                  Content Services Portfolio
                </h2>
                <h3 className="font-medium text-lg text-zinc-800 dark:text-zinc-200">
                  Content Design
                </h3>
              </div>
              <button
                aria-label="Visit Content Services Portfolio site"
                className="border border-lightmode dark:border-darkmode py-2 px-4 rounded-full transition-all duration-300 group-hover:bg-lightmode dark:group-hover:bg-darkmode cursor-pointer"
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
                    stroke=""
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </a>

          <a
            href="https://www.studio-24.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center flex-col gap-8 w-full cursor-pointer"
          >
            <div className="w-full h-full">
              <Image
                className="w-full h-full rounded object-contain transform transition-transform duration-300 group-hover:scale-105"
                src="/studio24-homepage.webp"
                alt="Hair Salon Website"
                width={2830}
                height={1346}
              />
            </div>
            <div className="flex items-center justify-between max-w-101.5 md:max-w-full w-full lg:px-0">
              <div className="block">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-1">
                  Hair Salon
                </h2>
                <h3 className="font-medium text-lg text-zinc-800 dark:text-zinc-200">
                  Beauty
                </h3>
              </div>
              <button
                aria-label="Visit Hair Salon site"
                className="border border-lightmode dark:border-darkmode py-2 px-4 rounded-full transition-all duration-300 group-hover:bg-lightmode dark:group-hover:bg-darkmode cursor-pointer"
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
                    stroke=""
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </a>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-4">
          <a
            href="/portfolio"
            aria-label="Go to portfolio"
            className="flex justify-center items-center relative h-12.5 w-40 overflow-hidden border dark:border-darkmode border-lightmode dark:hover:border-darkmode bg-transparent px-3 dark:text-darkmode text-lightmode dark:hover:text-white hover:shadow-2xl before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-lightmode dark:before:bg-darkmode before:transition-all before:duration-300 hover:text-white hover:shadow-lightmode dark:hover:shadow-darkmode hover:before:left-0 hover:before:w-full rounded-full font-semibold mt-4"
          >
            <span className="relative z-3">See More</span>
          </a>
        </div>
      </div>
    </section>
  );
}
