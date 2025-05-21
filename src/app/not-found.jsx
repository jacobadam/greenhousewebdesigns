export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8 flex-grow z-10">
      <div className="text-center">
        <p className="text-xl font-semibold text-lightmode dark:text-darkmode">
          404
        </p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-white">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="flex justify-center items-center relative h-[50px] w-40 overflow-hidden border dark:border-darkmode border-lightmode dark:hover:border-darkmode bg-transparent px-3 dark:text-darkmode text-lightmode dark:hover:text-white hover:shadow-2xl before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-lightmode dark:before:bg-darkmode before:transition-all before:duration-300 hover:text-white hover:shadow-lightmode dark:hover:shadow-darkmode hover:before:left-0 hover:before:w-full rounded-full font-semibold mt-4"
          >
            <span className="relative z-3">Back to home</span>
          </a>
        </div>
      </div>
    </main>
  );
}
