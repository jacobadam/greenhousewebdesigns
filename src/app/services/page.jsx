import { FiCheckCircle, FiXSquare } from "react-icons/fi";

export default function Services() {
  return (
    <section
      className="pt-4 sm:pt-8 pb-20 relative bg-transparent flex-grow"
      style={{
        paddingTop: "clamp(8rem, 10vw, 8rem)",
        minHeight: "calc(100vh - clamp(4rem, 10vw, 8rem))",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 lg:mb-8 text-center">
          <div className="flex items-center justify-between gap-5 flex-col mb-14">
            <h2 className="text-zinc-800 dark:text-zinc-200 text-2xl lg:text-3xl font-semibold leading-snug">
              Services
            </h2>
            <p className="font-normal text-base text-zinc-900 dark:text-zinc-100 max-w-3xl text-center">
              Whether you need a simple refresh or a custom-built website, I
              provide a personalized approach that takes into account the needs
              of your business. My streamlined process allows you to focus on
              what matters while I bring your vision to life online.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
            <PriceColumn
              title="Performance Optimization"
              statement="Identify and implement high-impact improvements to boost your website's speed and efficiency."
              items={[
                {
                  children: "Full Website Performance Audit",
                  checked: true,
                },
                {
                  children: "Detailed Feedback & Planning Session",
                  checked: true,
                },
                {
                  children: "Professional Copywriting for All Pages",
                  checked: true,
                },
                {
                  children: "Ongoing Monitoring (Optional)",
                  checked: true,
                },
                {
                  children: "Design And Development",
                  checked: false,
                },
                {
                  children: "Hosting",
                  checked: false,
                },
              ]}
            />
            <PriceColumn
              title="Custom Built Website"
              statement="Get a fully responsive and optimized site tailored to your vision, with room for iteration."
              highlight
              items={[
                {
                  children: "Design And Development",
                  checked: true,
                },
                {
                  children: "Hosting",
                  checked: true,
                },
                {
                  children: "2 Feedback Sessions",
                  checked: true,
                },
                {
                  children: "Unlimited Edits",
                  checked: true,
                },
                {
                  children: "Professional Copywriting for All Pages",
                  checked: false,
                },
                {
                  children: "24/7 Support",
                  checked: false,
                },
                {
                  children: "Optional Blog Setup",
                  checked: false,
                },
              ]}
            />
            <PriceColumn
              title="Full Content Package"
              statement="Includes everything in the custom build plus engaging, SEO-driven content written for your brand."
              items={[
                {
                  children: "Design And Development",
                  checked: true,
                },

                {
                  children: "Hosting",
                  checked: true,
                },
                {
                  children: "2 Feedback Sessions",
                  checked: true,
                },
                {
                  children: "Unlimited Edits",
                  checked: true,
                },
                {
                  children: "Professional Copywriting for All Pages",
                  checked: true,
                },
                {
                  children: "24/7 Support",
                  checked: true,
                },
                {
                  children: "Optional Blog Setup",
                  checked: true,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
const PriceColumn = ({ highlight, title, statement, items }) => {
  return (
    <div
      className={`relative w-full rounded-lg p-6 md:p-8 bg-zinc-100 dark:bg-zinc-950 ${
        highlight ? "border-2 border-[#6fa96f] dark:border-indigo-500" : ""
      }`}
    >
      {highlight && (
        <span className="absolute right-4 top-0 -translate-y-1/2 rounded-full bg-[#6fa96f] dark:bg-indigo-500 px-2 py-0.5 text-sm font-bold text-white">
          Most Popular
        </span>
      )}

      <h1 className="mb-8 text-xl font-semibold text-zinc-800 dark:text-zinc-200">
        {title}
      </h1>

      <p className="mb-8 text- text-zinc-800 dark:text-zinc-200">{statement}</p>

      <div className="mb-8 space-y-2">
        {items.map((i) => (
          <CheckListItem key={i.children} checked={i.checked}>
            {i.children}
          </CheckListItem>
        ))}
      </div>
    </div>
  );
};

const CheckListItem = ({ children, checked }) => {
  return (
    <div className="flex items-center gap-2 text-base text-zinc-800 dark:text-zinc-200 justify-start text-left">
      {checked ? (
        <FiCheckCircle className="text-xl text-[#6fa96f] dark:text-indigo-500" />
      ) : (
        <FiXSquare className="text-xl text-zinc-400" />
      )}
      {children}
    </div>
  );
};
