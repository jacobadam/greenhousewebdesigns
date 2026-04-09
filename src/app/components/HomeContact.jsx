"use client";

import React, { useRef, useState } from "react";
import FormButton from "../ui/FormButton";

export default function HomeContact() {
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
    <div className="h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent pt-24 py-12 lg:py-12">
      <div className="mb-14 text-center">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black dark:text-white mb-5">
          Contact
        </h1>
        <p className="text-zinc-900 dark:text-zinc-100 text-lg md:text-xl max-w-3xl mx-auto">
          Have a project in mind or need help with your website? Get in touch
          and I&apos;ll get back to you shortly.
        </p>
      </div>

      <div className="w-full max-w-lg px-6">
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
              Message sent successfully. I&apos;ll get back to you shortly.
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

        <form ref={form} onSubmit={sendMessage}>
          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-zinc-900 dark:text-zinc-200 text-sm font-medium">
              Name <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              name="name"
              required
              className="block w-full h-11 px-5 py-2.5 text-base border border-gray-300 bg-white dark:bg-zinc-200 rounded focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none text-black"
            />
          </div>

          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-zinc-900 dark:text-zinc-200 text-sm font-medium">
              Email <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="block w-full h-11 px-5 py-2.5 text-base border border-gray-300 bg-white rounded focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none text-black"
            />
          </div>

          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-zinc-900 dark:text-zinc-200 text-sm font-medium">
              Message <span className="ml-1 text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows="4"
              className="block w-full h-40 px-4 py-2.5 text-base border border-gray-300 bg-white rounded focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none text-black resize-none"
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
  );
}
