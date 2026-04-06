import React, { useRef, useState } from "react";
import Button from "../ui/LinkButton";

export default function HomeContact() {
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
        form.current.reset();
        setMessageSent(true);
        setErrorMessage(false);
        setTimeout(() => setMessageSent(false), 5000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
        setMessageSent(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent py-24 lg:py-12">
      <div className="mb-14 text-center">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-black dark:text-white leading-13 mb-5 max-w-full lg:max-w-3xl lg:mx-auto">
          Contact
        </h1>
        <p className="text-zinc-900 dark:text-zinc-100 lg:max-w-3xl lg:mx-auto text-lg md:text-xl">
          Have a project in mind or need help with your website? Get in touch
          and I’ll get back to you shortly.
        </p>
      </div>

      {messageSent && (
        <p
          className="text-center text-lightmode dark:text-darkmode text-xl font-bold py-4"
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

      <form ref={form} onSubmit={sendMessage} className="w-full max-w-lg px-6">
        <div className="relative mb-6">
          <label
            htmlFor="name"
            className="flex items-center mb-2 text-zinc-900 dark:text-zinc-200 text-sm font-medium"
          >
            Name
            <svg
              width="7"
              height="7"
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
            className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-zinc-900 border border-gray-300 bg-white dark:bg-zinc-200 rounded placeholder-gray-400 focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none"
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="email"
            className="flex items-center mb-2 text-zinc-900 dark:text-zinc-200 text-sm font-medium"
          >
            Email
            <svg
              width="7"
              height="7"
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              aria-hidden="true"
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
            className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-zinc-900 border border-gray-300 bg-white rounded placeholder-gray-400 focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none"
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="message"
            className="flex items-center mb-2 text-zinc-900 dark:text-zinc-200 text-sm font-medium"
          >
            Message
            <svg
              width="7"
              height="7"
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <textarea
            className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-zinc-900 border border-gray-300 bg-white rounded placeholder-gray-400 focus:ring-2 focus:ring-lightmode dark:focus:ring-darkmode outline-none resize-none"
            name="message"
            id="message"
            required
            aria-required="true"
          />
        </div>

        <div className="mt-8 lg:mt-4">
          <Button href="/services">Submit</Button>
        </div>
      </form>
    </div>
  );
}
