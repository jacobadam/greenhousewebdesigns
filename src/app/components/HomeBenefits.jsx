export default function HomeBenefits() {
  return (
    <section className="w-full py-12 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h1 className="text-2xl xl:text-3xl font-bold text-center text-black dark:text-white leading-[3.25rem] mb-5 max-w-full lg:max-w-3xl lg:mx-auto">
            Why choose us
          </h1>
          <p className="text-zinc-900 dark:text-zinc-100 lg:max-w-3xl lg:mx-auto">
            At every stage, we design with the end user in mind, delivering
            greater trust, engagement and impact.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b xl:border-r border-black dark:border-gray-200 xl:border-b lg:border-b lg:border-r md:border-r md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <img
                src="secure.svg"
                alt="Secure Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-lg font-medium text-zinc-900 dark:text-white leading-7 mb-3">
              100% Secure
            </h2>
            <p className="text-sm font-normal text-zinc-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem]">
              Incorporating data protection best practices, privacy and security
              are our top priority.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10  border-b xl:border-r border-black dark:border-gray-200 xl:border-b lg:border-b lg:border-r md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <img
                src="custom.svg"
                alt="Custom Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-lg font-medium text-zinc-900 dark:text-white leading-7 mb-3">
              Tailor Made
            </h2>
            <p className="text-sm font-normal text-zinc-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem]">
              Incorporating data protection best practices, privacy and security
              are our top priority.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b border-black dark:border-gray-200 xl:border-b lg:border-b lg:border-r-0 md:border-r md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <img
                src="performance.svg"
                alt="Performance Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-lg font-medium text-zinc-900 dark:text-white leading-7 mb-3">
              Top Performance Scores
            </h2>
            <p className="text-sm font-normal text-zinc-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem]">
              Our code is lean, efficient, and purpose-built — consistently
              scoring 90–100 on Google PageSpeed.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b border-black dark:border-gray-200 xl:border-r  lg:border-r lg:border-b-0  md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <img
                src="chat.svg"
                alt="Chat Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-lg font-medium text-zinc-900 dark:text-white leading-7 mb-3">
              Free Consultation
            </h2>
            <p className="text-sm font-normal text-zinc-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem]">
              Ensure our skills and expertise align with your long-term vision
              on a complimentary, no-obligation Zoom call.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b border-black dark:border-gray-200 xl:border-r  lg:border-r md:border-r md:border-b-0">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <img
                src="scalable.svg"
                alt="Scalable Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-lg font-medium text-zinc-900 dark:text-white leading-7 mb-3">
              Scalable Designs
            </h2>
            <p className="text-sm font-normal text-zinc-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem]">
              Sites are easy to update, expand, and maintain as your business
              grows.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-black dark:border-gray-200 ">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <img
                src="support.svg"
                alt="Support Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-lg font-medium text-zinc-900 dark:text-white leading-7 mb-3">
              Unmatched Support
            </h2>
            <p className="text-sm font-normal text-zinc-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem]">
              One-on-one personalized support whenever you need it — just call,
              text or email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
