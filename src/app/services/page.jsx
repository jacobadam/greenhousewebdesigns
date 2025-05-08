"use client";

import React, { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("tabs-with-pill-1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
        </div>
        <div className="mb-4">
          <div className="tabs">
            <div className="flex w-full items-center justify-center">
              <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 gap-4 overflow-x-auto sm:mb-9 lg:mb-16">
                {[
                  {
                    id: "tabs-with-pill-1",
                    label: "Performance Optimization",
                  },
                  {
                    id: "tabs-with-pill-2",
                    label: "Custom Built Website",
                  },
                  {
                    id: "tabs-with-pill-3",
                    label: (
                      <>
                        Custom Built Website &
                        <br />
                        Full Content Package
                      </>
                    ),
                  },
                ].map((tab) => (
                  <li key={tab.id} className="w-full">
                    <button
                      onClick={() => handleTabClick(tab.id)}
                      className={`group flex items-center justify-center text-center gap-4 py-5 lg:py-0 px-6 rounded-2xl text-base font-medium transition-all duration-500 w-full min-h-[80px] sm:min-h-[110px] 
                        ${
                          activeTab === tab.id
                            ? "bg-gradient-to-tr from-[#6fa96f] to-[#71b468] dark:from-indigo-500 dark:to-violet-600 text-white"
                            : "text-zinc-900 dark:text-zinc-100 hover:bg-gradient-to-tr hover:from-[#6fa96f] hover:to-[#71b468] dark:hover:bg-gradient-to-tr dark:hover:from-indigo-500 dark:hover:to-violet-600 hover:text-white"
                        }`}
                      role="tab"
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              {activeTab === "tabs-with-pill-1" && (
                <div
                  id="tabs-with-pill-1"
                  role="tabpanel"
                  className="tabcontent"
                  style={{ display: "block" }}
                >
                  <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 flex justify-center text-center lg:text-left">
                      <div className="max-w-screen-lg">
                        <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight font-bold text-zinc-900 dark:text-zinc-100">
                          Performance Optimization
                        </h2>
                        <p className="mb-4 font-light text-zinc-800 dark:text-zinc-200">
                          This includes a full assessment of your current
                          website to identify key areas for improvement. During
                          a detailed feedback session, I’ll gather your specific
                          requirements and prioritize the changes that will have
                          the most impact on your site’s performance. You’ll
                          have the opportunity to review all changes to ensure
                          everything meets your expectations.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === "tabs-with-pill-2" && (
                <div
                  id="tabs-with-pill-2"
                  role="tabpanel"
                  className="tabcontent"
                  style={{ display: "block" }}
                >
                  <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 flex justify-center text-center lg:text-left">
                      <div className="max-w-screen-lg">
                        <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight font-bold text-zinc-900 dark:text-zinc-100">
                          Custom Built Website
                        </h2>
                        <p className="mb-4 font-light text-zinc-800 dark:text-zinc-200">
                          I’ll work closely with you to understand your vision
                          and requirements during a comprehensive planning
                          session. From there, I’ll create a fully optimized
                          website with up to five pages. This package includes
                          two reviews for refinements.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {activeTab === "tabs-with-pill-3" && (
                <div
                  id="tabs-with-pill-3"
                  role="tabpanel"
                  className="tabcontent"
                  style={{ display: "block" }}
                >
                  <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 flex justify-center text-center lg:text-left">
                      <div className="max-w-screen-lg">
                        <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight font-bold text-zinc-900 dark:text-zinc-100">
                          Custom Built Website and Full Content Package
                        </h2>
                        <p className="mb-4 font-light text-zinc-800 dark:text-zinc-200">
                          This comprehensive package includes everything in the
                          custom build service plus professionally crafted
                          content for every page. All content will align with
                          your brand voice and is tailored to engage your
                          audience. An in-depth SEO analysis will ensure that
                          all content contributes to your site’s visibility and
                          business growth.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
