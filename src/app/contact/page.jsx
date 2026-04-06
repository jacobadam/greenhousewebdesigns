"use client";

import React, { useRef, useState } from "react";
import Button from "../ui/LinkButton";

export default function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    formData.append("access_key", "c1eb05ac-6ab1-4a50-a826-9ddce24dca20");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setMessageSent(true);
        setErrorMessage(false);
        form.current.reset();
        setTimeout(() => setMessageSent(false), 5000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-transparent grow z-10 pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 z-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:items-start items-center lg:justify-start justify-center">
          <div className="flex flex-col items-center text-center px-4 sm:px-6">
            <h2 className="text-black dark:text-white text-3xl md:text-4xl xl:text-5xl font-semibold leading-snug pb-5">
              Contact
            </h2>
            <p className="text-zinc-900 dark:text-zinc-100 text-base font-normal pb-6">
              Get in touch and let&apos;s discuss how I can serve your business.
            </p>
            <div className="py-6 border-t border-gray-400 dark:border-zinc-200 text-center">
              <div className="flex flex-col items-center">
                <div className="rounded-lg p-3">
                  <img
                    src="/email.svg"
                    alt="Email Icon"
                    className="w-6 h-6 object-contain dark:invert"
                  />
                </div>

                <p className="text-zinc-800 dark:text-zinc-200 text-xs font-normal">
                  greenhousewebdesigns@gmail.com
                </p>
              </div>
              <div className="flex flex-col items-center mt-8">
                <div className="rounded-lg p-3">
                  <img
                    src="/phone.svg"
                    alt="Phone Icon"
                    className="w-6 h-6 object-contain dark:invert"
                  />
                </div>

                <p className="text-zinc-800 dark:text-zinc-200 text-xs font-normal">
                  (+1) 672-888-0185
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 rounded-lg">
            {messageSent && (
              <p
                className="text-center text-lightmode dark:text-indigo-600 text-xl font-bold"
                aria-live="polite"
              >
                Message sent!
              </p>
            )}
            {errorMessage && (
              <p
                className="text-center text-red-600 text-xl font-bold py-4"
                aria-live="assertive"
                role="alert"
              >
                {errorMessage}
              </p>
            )}

            <form
              ref={form}
              onSubmit={sendMessage}
              className="space-y-4"
              aria-labelledby="contact-form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center mb-2 text-zinc-900 dark:text-zinc-100"
                >
                  Name{" "}
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  aria-required="true"
                  className="w-full border rounded-md px-4 py-2 bg-white dark:bg-zinc-100 focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center mb-2 text-zinc-900 dark:text-zinc-100"
                >
                  Email{" "}
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  className="w-full border rounded-md px-4 py-2 bg-white dark:bg-zinc-100 focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="flex items-center mb-2 text-zinc-900 dark:text-zinc-100"
                >
                  Message{" "}
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  aria-required="true"
                  className="w-full border rounded-md px-4 py-2 bg-white dark:bg-zinc-100 focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none text-black"
                />
              </div>

              <Button href="/services">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
