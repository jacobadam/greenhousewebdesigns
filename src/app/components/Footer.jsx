export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent min-h-[80px] py-4 flex items-center justify-center z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm text-gray-500 block">
            © {currentYear}{" "}
            <a
              href="https://www.greenhousewebdesigns.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              Greenhouse Web Designs
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
