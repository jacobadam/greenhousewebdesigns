import Image from "next/image";

export default function HomePortfolio() {
  return (
    <section className="w-full h-full py-40 relative bg-zinc-200 dark:bg-zinc-950">
      <div className="w-full max-w-2xl md:max-w-7xl px-6 lg:px-8 mx-auto">
        <h1 className="text-2xl xl:text-3xl font-bold text-black dark:text-white mb-16 text-center lg:text-left">
          Professional Project Achievements
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            <div className="flex items-center justify-between max-w-[406px] md:max-w-full w-full lg:px-0">
              <div className="block">
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-1">
                  Content Services Portfolio
                </h2>
                <h3 className="font-medium text-lg text-gray-800 dark:text-zinc-200">
                  Content Design, Marketing
                </h3>
              </div>
              <button
                aria-label="Visit Content Services Portfolio site"
                className="border border-[#6fa96f] dark:border-indigo-500 py-2 px-4 rounded-full transition-all duration-300 group-hover:bg-[#6fa96f] dark:group-hover:bg-indigo-500 cursor-pointer"
              >
                <svg
                  className="stroke-[#6fa96f] dark:stroke-indigo-500 transition-all duration-300 group-hover:stroke-white"
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
            href="https://www.neilnevitt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center flex-col gap-8 w-full cursor-pointer"
          >
            <div className="w-full h-full">
              <Image
                className="w-full h-full rounded object-contain transform transition-transform duration-300 group-hover:scale-105"
                src="/neilnevitt-homepage.webp"
                alt="Healthcare Website"
                width={2830}
                height={1346}
              />
            </div>
            <div className="flex items-center justify-between max-w-[406px] md:max-w-full w-full lg:px-0">
              <div className="block">
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-1">
                  Podiatry Business
                </h2>
                <h3 className="font-medium text-lg text-gray-800 dark:text-zinc-200">
                  Healthcare
                </h3>
              </div>
              <button
                aria-label="Visit Podiatry Business site"
                className="border border-[#6fa96f] dark:border-indigo-500 py-2 px-4 rounded-full transition-all duration-300 group-hover:bg-[#6fa96f] dark:group-hover:bg-indigo-500 cursor-pointer"
              >
                <svg
                  className="stroke-[#6fa96f] dark:stroke-indigo-500 transition-all duration-300 group-hover:stroke-white"
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
      </div>
    </section>
  );
}
