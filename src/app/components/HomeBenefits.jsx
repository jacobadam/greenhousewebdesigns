export default function HomeBenefits() {
  return (
    <section className="w-full py-12 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h1 className="text-2xl xl:text-3xl font-bold text-center text-black dark:text-white leading-[3.25rem] mb-5 max-w-full lg:max-w-3xl lg:mx-auto">
            Why choose us
          </h1>
          <p className="text-gray-800 dark:text-zinc-200 lg:max-w-3xl lg:mx-auto">
            At every step of our process, we prioritize the user, ensuring that
            our products and services are designed with their needs in mind.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b xl:border-r border-black dark:border-gray-200 xl:border-b lg:border-b lg:border-r md:border-r md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <svg
                width={41}
                height={40}
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.9748 20.881C35.9748 29.599 28.7427 36.6663 19.8214 36.6663C10.9001 36.6663 3.66797 29.599 3.66797 20.881C3.66797 12.163 10.9001 5.09568 19.8214 5.09568M24.5097 13.5339L24.5097 6.47144C24.5097 4.29971 26.5287 2.67032 28.5372 3.59985C32.0158 5.20969 35.825 8.34044 36.9426 13.6748C37.3403 15.5727 35.6588 17.1415 33.6765 17.1154L28.0511 17.0415C26.0876 17.0157 24.5097 15.4529 24.5097 13.5339Z"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium text-black dark:text-white leading-7 mb-3">
              100% Secure
            </h2>
            <p className="text-sm font-normal text-gray-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem] ">
              Accurate results are our top priority, ensuring you always have
              reliable information at your fingertips.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10  border-b xl:border-r border-black dark:border-gray-200 xl:border-b lg:border-b lg:border-r md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7902 36.3474V15.4701H10.1937C6.95999 15.4701 5.34314 15.4701 4.33856 16.4747C3.33398 17.4793 3.33398 19.0961 3.33398 22.3298V29.4877C3.33398 32.7214 3.33398 34.3383 4.33856 35.3429C5.34314 36.3474 6.95999 36.3474 10.1937 36.3474H10.7902ZM10.7902 36.3474L10.7902 16.6441L16.5588 4.56233C17.1667 3.28919 18.8123 2.93155 19.8938 3.83756C21.4853 5.17082 22.4046 7.1404 22.4046 9.21655V10.7792C22.4046 12.5405 23.8325 13.9683 25.5938 13.9683H31.6889C33.0937 13.9683 33.7961 13.9683 34.3227 14.1434C35.6341 14.5791 36.5558 15.7593 36.661 17.1371C36.7032 17.6905 36.5331 18.372 36.1928 19.7349L33.3431 31.1494C32.7199 33.6458 32.4083 34.894 31.4778 35.6207C30.5472 36.3475 29.2607 36.3475 26.6877 36.3475L10.7902 36.3474Z"
                  stroke="#10B981"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white leading-7 mb-3">
              Custom Designed
            </h2>
            <p className="text-sm font-normal text-gray-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem] ">
              Our designs are made by an in-house design team, which allows us
              to make anything we want.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b border-black dark:border-gray-200 xl:border-b lg:border-b lg:border-r-0 md:border-r md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <svg
                width={41}
                height={40}
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.8908 18.8886V7.77745C32.8908 5.68232 32.8908 4.63476 32.24 3.98388C31.5891 3.33301 30.5415 3.33301 28.4464 3.33301H12.8908C10.7957 3.33301 9.74815 3.33301 9.09727 3.98388C8.4464 4.63476 8.4464 5.68232 8.4464 7.77745V18.8886M15.1131 9.99967H26.2242M15.1131 16.6663H26.2242M8.4464 23.333H11.7797C12.8152 23.333 13.3329 23.333 13.7412 23.5022C14.2858 23.7277 14.7184 24.1603 14.9439 24.7048C15.1131 25.1132 15.1131 25.6309 15.1131 26.6663C15.1131 27.7018 15.1131 28.2195 15.2822 28.6279C15.5078 29.1724 15.9404 29.605 16.4849 29.8305C16.8933 29.9997 17.411 29.9997 18.4464 29.9997H22.8908C23.9263 29.9997 24.444 29.9997 24.8524 29.8305C25.3969 29.605 25.8295 29.1724 26.055 28.6279C26.2242 28.2195 26.2242 27.7018 26.2242 26.6663C26.2242 25.6309 26.2242 25.1132 26.3933 24.7048C26.6189 24.1603 27.0515 23.7277 27.596 23.5022C28.0044 23.333 28.5221 23.333 29.5575 23.333H32.8908C34.986 23.333 36.0335 23.333 36.6844 23.9839C37.3353 24.6348 37.3353 25.6823 37.3353 27.7775V32.2219C37.3353 34.317 37.3353 35.3646 36.6844 36.0155C36.0335 36.6663 34.986 36.6663 32.8908 36.6663H8.4464C6.35127 36.6663 5.3037 36.6663 4.65283 36.0155C4.00195 35.3646 4.00195 34.317 4.00195 32.2219V27.7775C4.00195 25.6823 4.00195 24.6348 4.65283 23.9839C5.3037 23.333 6.35127 23.333 8.4464 23.333Z"
                  stroke="#0EA5E9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white leading-7 mb-3">
              Top Tier Pagespeed Scores
            </h2>
            <p className="text-sm font-normal text-gray-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem] ">
              Our sites have zero bloat, zero waste, and built with purpose so
              we get perfect 90-100/100 speed scores with Google.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b border-black dark:border-gray-200 xl:border-r  lg:border-r lg:border-b-0  md:border-b">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <svg
                width={41}
                height={40}
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33398 35H35.334M8.66732 30.5C6.82637 30.5 5.33398 29.1569 5.33398 27.5V17C5.33398 15.3431 6.82637 14 8.66732 14C10.5083 14 12.0007 15.3431 12.0007 17V27.5C12.0007 29.1569 10.5083 30.5 8.66732 30.5ZM20.334 30.5C18.493 30.5 17.0007 29.1569 17.0007 27.5V12.5C17.0007 10.8431 18.493 9.5 20.334 9.5C22.1749 9.5 23.6673 10.8431 23.6673 12.5V27.5C23.6673 29.1569 22.1749 30.5 20.334 30.5ZM32.0007 30.5C30.1597 30.5 28.6673 29.1569 28.6673 27.5V8C28.6673 6.34315 30.1597 5 32.0007 5C33.8416 5 35.334 6.34315 35.334 8V27.5C35.334 29.1569 33.8416 30.5 32.0007 30.5Z"
                  stroke="#4F46E5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white leading-7 mb-3">
              Money Back Guarantee
            </h2>
            <p className="text-sm font-normal text-gray-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem] ">
              If we can’t design something you like, you get your money back and
              the contract is cancelled. We stand by our work.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-b border-black dark:border-gray-200 xl:border-r  lg:border-r md:border-r md:border-b-0">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5556 16.1108V28.333M7.22222 28.333V27.7775C7.22222 25.6823 7.22222 24.6348 7.8731 23.9839C8.52397 23.333 9.57154 23.333 11.6667 23.333H29.4444C31.5396 23.333 32.5871 23.333 33.238 23.9839C33.8889 24.6348 33.8889 25.6823 33.8889 27.7775V28.333M20.5556 12.2219C18.4604 12.2219 17.4129 12.2219 16.762 11.571C16.1111 10.9201 16.1111 9.87258 16.1111 7.77745C16.1111 5.68232 16.1111 4.63476 16.762 3.98388C17.4129 3.33301 18.4604 3.33301 20.5556 3.33301C22.6507 3.33301 23.6983 3.33301 24.3491 3.98388C25 4.63476 25 5.68232 25 7.77745C25 9.87258 25 10.9201 24.3491 11.571C23.6983 12.2219 22.6507 12.2219 20.5556 12.2219ZM9.44444 34.4441C9.44444 35.6714 8.44952 36.6663 7.22222 36.6663C5.99492 36.6663 5 35.6714 5 34.4441C5 33.2168 5.99492 32.2219 7.22222 32.2219C8.44952 32.2219 9.44444 33.2168 9.44444 34.4441ZM22.7778 34.4441C22.7778 35.6714 21.7829 36.6663 20.5556 36.6663C19.3283 36.6663 18.3333 35.6714 18.3333 34.4441C18.3333 33.2168 19.3283 32.2219 20.5556 32.2219C21.7829 32.2219 22.7778 33.2168 22.7778 34.4441ZM36.1111 34.4441C36.1111 35.6714 35.1162 36.6663 33.8889 36.6663C32.6616 36.6663 31.6667 35.6714 31.6667 34.4441C31.6667 33.2168 32.6616 32.2219 33.8889 32.2219C35.1162 32.2219 36.1111 33.2168 36.1111 34.4441Z"
                  stroke="#F43F5E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white leading-7 mb-3">
              Unmatched Support
            </h2>
            <p className="text-sm font-normal text-gray-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem] ">
              Call or text us anytime, no phone trees or robots. When you call
              us you get me - the owner and developer.
            </p>
          </div>
          <div className="relative w-full bg-transparent p-5 text-center transition-all duration-500 xl:p-10 border-black dark:border-gray-200 ">
            <div className=" flex justify-center items-center mx-auto mb-5 w-10 h-10 transition-all duration-500">
              <svg
                width={41}
                height={40}
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.91862 23.333C6.91862 24.0234 7.47826 24.583 8.16862 24.583C8.85898 24.583 9.41862 24.0234 9.41862 23.333H6.91862ZM31.9186 20.833V23.333H34.4186V20.833H31.9186ZM9.41862 23.333V20.833H6.91862V23.333H9.41862ZM20.6686 9.58301C26.8818 9.58301 31.9186 14.6198 31.9186 20.833H34.4186C34.4186 13.2391 28.2625 7.08301 20.6686 7.08301V9.58301ZM20.6686 7.08301C13.0747 7.08301 6.91862 13.2391 6.91862 20.833H9.41862C9.41862 14.6198 14.4554 9.58301 20.6686 9.58301V7.08301ZM11.0332 22.083H9.00195V24.583H11.0332V22.083ZM9.00195 34.583H11.0332V32.083H9.00195V34.583ZM12.752 32.8643V23.8018H10.252V32.8643H12.752ZM11.0332 34.583C11.9824 34.583 12.752 33.8135 12.752 32.8643H10.252C10.252 32.4328 10.6017 32.083 11.0332 32.083V34.583ZM2.75195 28.333C2.75195 31.7848 5.55017 34.583 9.00195 34.583V32.083C6.93089 32.083 5.25195 30.4041 5.25195 28.333H2.75195ZM9.00195 22.083C5.55017 22.083 2.75195 24.8812 2.75195 28.333H5.25195C5.25195 26.2619 6.93089 24.583 9.00195 24.583V22.083ZM11.0332 24.583C10.6017 24.583 10.252 24.2332 10.252 23.8018H12.752C12.752 22.8525 11.9824 22.083 11.0332 22.083V24.583ZM30.304 24.583H32.3353V22.083H30.304V24.583ZM32.3353 32.083H30.304V34.583H32.3353V32.083ZM31.0853 32.8643V23.8018H28.5853V32.8643H31.0853ZM30.304 32.083C30.7355 32.083 31.0853 32.4328 31.0853 32.8643H28.5853C28.5853 33.8135 29.3548 34.583 30.304 34.583V32.083ZM36.0853 28.333C36.0853 30.4041 34.4064 32.083 32.3353 32.083V34.583C35.7871 34.583 38.5853 31.7848 38.5853 28.333H36.0853ZM32.3353 24.583C34.4064 24.583 36.0853 26.2619 36.0853 28.333H38.5853C38.5853 24.8812 35.7871 22.083 32.3353 22.083V24.583ZM30.304 22.083C29.3548 22.083 28.5853 22.8525 28.5853 23.8018H31.0853C31.0853 24.2332 30.7355 24.583 30.304 24.583V22.083Z"
                  fill="#D946EF"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white leading-7 mb-3">
              Support
            </h2>
            <p className="text-sm font-normal text-gray-800 dark:text-zinc-200 transition-all duration-500 leading-[1.4rem] ">
              Our commitment to exceptional support ensures that you receive the
              assistance you need, whenever you need it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
