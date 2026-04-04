export default function HomeBenefits() {
  const benefits = [
    {
      icon: "secure.svg",
      alt: "Secure Icon",
      title: "100% Secure",
      description:
        "Incorporating data protection best practices, privacy and security are our top priority.",
      border:
        "border-b xl:border-r border-[#71b468] dark:border-darkmode xl:border-b lg:border-b lg:border-r md:border-r md:border-b",
    },
    {
      icon: "custom.svg",
      alt: "Custom Icon",
      title: "Tailor Made",
      description:
        "Incorporating data protection best practices, privacy and security are our top priority.",
      border:
        "border-b xl:border-r border-[#71b468] dark:border-darkmode xl:border-b lg:border-b lg:border-r md:border-b",
    },
    {
      icon: "performance.svg",
      alt: "Performance Icon",
      title: "Top Performance Scores",
      description:
        "Our code is lean, efficient, and purpose-built — consistently scoring 90–100 on Google PageSpeed.",
      border:
        "border-b border-[#71b468] dark:border-darkmode xl:border-b lg:border-b lg:border-r-0 md:border-r md:border-b",
    },
    {
      icon: "chat.svg",
      alt: "Chat Icon",
      title: "Free Consultation",
      description:
        "Ensure our skills and expertise align with your long-term vision on a complimentary, no-obligation Zoom call.",
      border:
        "border-b border-[#71b468] dark:border-darkmode xl:border-r lg:border-r lg:border-b-0 md:border-b",
    },
    {
      icon: "scalable.svg",
      alt: "Scalable Icon",
      title: "Scalable Designs",
      description:
        "Sites are easy to update, expand, and maintain as your business grows.",
      border:
        "border-b border-[#71b468] dark:border-darkmode xl:border-r lg:border-r md:border-r md:border-b-0",
    },
    {
      icon: "support.svg",
      alt: "Support Icon",
      title: "Unmatched Support",
      description:
        "One-on-one personalized support whenever you need it — just call, text or email.",
      border: "border-[#71b468] dark:border-darkmode",
    },
  ];

  return (
    <section className="w-full py-12 lg:py-28 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-black dark:text-white leading-13 mb-5 max-w-full lg:max-w-3xl lg:mx-auto">
            Why choose us
          </h1>
          <p className="text-zinc-900 dark:text-zinc-100 lg:max-w-3xl lg:mx-auto text-lg md:text-xl">
            At every stage, we design with the end user in mind, delivering
            greater trust, engagement and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`relative w-full p-5 text-center transition-all duration-500 xl:p-10 ${item.border}`}
            >
              <div className="flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-lg font-medium text-zinc-900 dark:text-white leading-7 mb-3">
                {item.title}
              </h2>
              <p className="text-sm font-normal text-zinc-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
