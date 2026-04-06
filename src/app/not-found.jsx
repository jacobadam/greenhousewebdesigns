import LinkButton from "./ui/LinkButton";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8 grow z-10">
      <div className="text-center">
        <p className="text-xl font-semibold text-lightmode dark:text-darkmode">
          404
        </p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-white">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <LinkButton href="/" width="w-40">
            Back to Home
          </LinkButton>
        </div>
      </div>
    </main>
  );
}
