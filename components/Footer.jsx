export default function Footer() {
  const currentYear = new Date().getFullYear();
  const companyName = "Greenhouse Web Designs";

  return (
    <footer className="w-full bg-transparent min-h-[80px] py-4 flex items-center justify-center z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm text-gray-500 block">
            © {currentYear} {companyName}. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
