"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-5 left-5 right-5 z-[9999]
        mx-auto max-w-xl
        animate-in slide-in-from-bottom-5 duration-500
      "
    >
      <div className="rounded-2xl border border-white/10 bg-[#101828]/95 p-5 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">
              🍪 Cookie Preferences
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              We use cookies to improve your browsing experience, analyze
              website traffic, and enhance our services. By clicking
              <span className="font-semibold text-white"> Accept</span>, you
              agree to our use of cookies.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            {/* <Link
              href="/privacy-policy"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/30 hover:text-white"
            >
              Learn More
            </Link> */}

            <button
              onClick={acceptCookies}
              className="
                rounded-lg
                bg-gradient-to-r
                from-teal-600
                via-blue-600
                to-indigo-600
                px-5
                py-2
                text-sm
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
