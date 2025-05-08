import HomeServicesCard from "./HomeServicesCard";

export default function HomeServices() {
  return (
    <section className="w-full h-full py-24 md:py-8 flex items-center justify-center bg-zinc-200 dark:bg-zinc-950">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="lg:w-4/5 flex flex-col items-center justify-center mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h1 className="text-2xl xl:text-3xl font-bold mb-2 text-black dark:text-white">
              Quality Design, Real Impact
            </h1>
            <p className="text-gray-800 dark:text-zinc-200 text-center leading-relaxed">
              Discover a range of solutions tailored <br /> to meet your
              business needs
            </p>
            <a
              href="/services"
              aria-label="Go to services"
              className="flex justify-center items-center relative h-[50px] w-40 overflow-hidden border dark:border-indigo-500 border-[#6fa96f] dark:hover:border-indigo-500 bg-[#6fa96f] dark:bg-transparent px-3 text-white dark:text-indigo-500 dark:hover:text-black hover:shadow-2xl before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#6fa96f] dark:before:bg-indigo-500 before:transition-all before:duration-300 hover:text-white hover:shadow-[#6fa96f] dark:hover:shadow-indigo-500 hover:before:left-0 hover:before:w-full rounded-full font-semibold mt-4"
            >
              <span className="relative z-3">Services</span>
            </a>
          </div>

          <div>
            <HomeServicesCard />
          </div>
        </div>
      </div>
    </section>
  );
}
