"use client";

import React, { useRef, useState } from "react";
import FormButton from "../ui/FormButton";

export default function Contact() {
  const form = useRef(null);

  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setErrorMessage("");
    setMessageSent(false);

    const formData = new FormData(form.current);
    formData.append("access_key", "c1eb05ac-6ab1-4a50-a826-9ddce24dca20");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        form.current.reset();
        setMessageSent(true);
        setErrorMessage("");

        setTimeout(() => setMessageSent(false), 5000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
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
              <div
                className="mb-6 flex items-center gap-3 rounded-lg border border-lightmode/30 bg-lightmode/10 px-4 py-3 text-lightmode dark:border-darkmode/30 dark:bg-darkmode/10 dark:text-darkmode"
                aria-live="polite"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lightmode text-white dark:bg-darkmode">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 10.5L8.5 14L15 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium">
                  Message sent successfully. I’ll get back to you shortly.
                </p>
              </div>
            )}

            {errorMessage && (
              <div
                className="mb-6 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-red-700"
                role="alert"
              >
                <p className="text-sm font-medium">{errorMessage}</p>
              </div>
            )}

            <form ref={form} onSubmit={sendMessage} className="space-y-4">
              <div>
                <label className="flex items-center mb-2 text-zinc-900 dark:text-zinc-100">
                  Name <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  name="name"
                  required
                  className="w-full border rounded-md px-4 py-2 bg-white dark:bg-zinc-100 focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none text-black"
                />
              </div>

              <div>
                <label className="flex items-center mb-2 text-zinc-900 dark:text-zinc-100">
                  Email <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border rounded-md px-4 py-2 bg-white dark:bg-zinc-100 focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none text-black"
                />
              </div>

              <div>
                <label className="flex items-center mb-2 text-zinc-900 dark:text-zinc-100">
                  Message <span className="ml-1 text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full border rounded-md px-4 py-2 bg-white dark:bg-zinc-100 focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none text-black resize-none"
                />
              </div>

              <div className="mt-8 lg:mt-4">
                <FormButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </FormButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
