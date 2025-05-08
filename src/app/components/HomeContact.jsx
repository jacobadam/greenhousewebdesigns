import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function HomeContact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "ojNtN4lneN6w9tjlE"
      )
      .then(
        () => {
          console.log("Success!");
          e.target.reset();
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.log("Failed...", error.text);
          setErrorMessage("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent py-24 lg:py-16">
      <h1 className="text-2xl xl:text-3xl font-bold text-center pt-8 text-black dark:text-white">
        Contact
      </h1>
      {messageSent && (
        <p
          className="text-center text-[#6fa96f] text-xl font-bold"
          aria-live="polite"
          role="alert"
        >
          Message sent!
        </p>
      )}
      {errorMessage && (
        <p
          className="text-center text-red-600 text-xl font-bold"
          aria-live="assertive"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        id="contact-form"
        className="w-full max-w-lg p-6"
      >
        <div className="relative mb-6">
          <label
            htmlFor="name"
            className="flex items-center mb-2 text-gray-800 dark:text-zinc-200 text-sm font-medium"
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
            className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 bg-white dark:bg-gray-00 rounded-full placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="email"
            className="flex items-center mb-2 text-gray-800 dark:text-zinc-200 text-sm font-medium"
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
            className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 bg-white rounded-full placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="message"
            className="flex items-center mb-2 text-gray-800 dark:text-zinc-200 text-sm font-medium"
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
            className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 border border-gray-300 bg-white rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
            name="message"
            id="message"
            required
            aria-required="true"
          />
        </div>

        <button
          type="submit"
          value="Send"
          title="Submit your message"
          className="flex justify-center items-center relative h-[50px] w-40 overflow-hidden border border-[#6fa96f] dark:border-indigo-500 bg-[#6fa96f] dark:bg-indigo-500 px-3 text-zinc-100 dark:text-white dark:hover:text-black hover:shadow-2xl before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#6fa96f] dark:before:bg-indigo-500 before:transition-all before:duration-500 hover:text-white hover:shadow-[#6fa96f] dark:hover:shadow-indigo-500 hover:before:left-0 hover:before:w-full rounded-full font-semibold mt-4"
        >
          <span className="relative z-3">Submit</span>
        </button>
      </form>
    </div>
  );
}
