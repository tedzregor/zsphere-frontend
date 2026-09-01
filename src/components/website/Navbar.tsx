"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  return (
    <nav className="absolute left-0 top-0 z-50 w-full bg-black/70 backdrop-blur-md">

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}
      <div className="mx-auto flex w-full items-center px-5 py-2 sm:px-6 md:px-8 lg:px-10">

        {/* ===================================================
            LOGO
        =================================================== */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={closeMenu}
        >
          <Image
            src="/images/website/company_logo.png"
            alt="Zsphere Technologies"
            width={136}
            height={136}
            priority
            className="h-20 w-48 object-contain sm:w-52 md:h-22 md:w-60"
          />
        </Link>


        {/* ===================================================
            SOCIAL MEDIA — BESIDE LOGO
        =================================================== */}
        <div className="ml-3 hidden items-center gap-2 border-r border-white/15 pr-5 md:flex lg:ml-4">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-blue-600 hover:text-white"
          >
            <svg
              className="h-[17px] w-[17px]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.7v8h3.4z" />
            </svg>
          </a>


          {/* YouTube */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-red-600 hover:text-white"
          >
            <svg
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.8V8.2l6.5 3.8-6.5 3.8z" />
            </svg>
          </a>


          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-pink-500 hover:text-white"
          >
            <svg
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

        </div>


        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}
        <div className="ml-auto hidden items-center gap-7 lg:flex xl:gap-9">

          <Link
            href="/"
            className="text-sm font-medium text-white transition hover:text-blue-300 xl:text-base"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-white transition hover:text-blue-300 xl:text-base"
          >
            Services
          </Link>

          <Link
            href="/about-us"
            className="text-sm font-medium text-white transition hover:text-blue-300 xl:text-base"
          >
            About Us
          </Link>

          <Link
            href="/contact-us"
            className="text-sm font-medium text-white transition hover:text-blue-300 xl:text-base"
          >
            Contact Us
          </Link>

        </div>


        {/* ===================================================
            RIGHT SIDE
        =================================================== */}
        <div className="ml-auto flex items-center gap-3 sm:gap-4 lg:ml-8 lg:gap-5">

          {/* Shopping Cart */}
          <ShoppingCartIcon />


          {/* =================================================
              LANGUAGE SELECTOR
          ================================================= */}
          <div className="relative hidden md:block">

            <button
              type="button"
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-white transition hover:text-blue-300"
              aria-expanded={languageOpen}
              aria-haspopup="true"
            >

              <Globe className="h-4 w-4" />

              <span>{language}</span>

              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />

            </button>


            {/* =================================================
                LANGUAGE DROPDOWN
            ================================================= */}
            {languageOpen && (
              <div className="absolute right-0 top-full mt-3 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-2xl">

                {/* English */}
                <button
                  type="button"
                  onClick={() => selectLanguage("EN")}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-blue-50 ${
                    language === "EN"
                      ? "font-semibold text-blue-600"
                      : "text-gray-700"
                  }`}
                >

                  <span className="text-lg leading-none">
                    🇺🇸
                  </span>

                  <span className="flex-1">
                    English
                  </span>

                  {language === "EN" && (
                    <span className="text-blue-600">
                      ✓
                    </span>
                  )}

                </button>


                {/* Korean */}
                <button
                  type="button"
                  onClick={() => selectLanguage("KO")}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-blue-50 ${
                    language === "KO"
                      ? "font-semibold text-blue-600"
                      : "text-gray-700"
                  }`}
                >

                  <span className="text-lg leading-none">
                    🇰🇷
                  </span>

                  <span className="flex-1">
                    한국어
                  </span>

                  {language === "KO" && (
                    <span className="text-blue-600">
                      ✓
                    </span>
                  )}

                </button>


                {/* Japanese */}
                <button
                  type="button"
                  onClick={() => selectLanguage("JA")}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-blue-50 ${
                    language === "JA"
                      ? "font-semibold text-blue-600"
                      : "text-gray-700"
                  }`}
                >

                  <span className="text-lg leading-none">
                    🇯🇵
                  </span>

                  <span className="flex-1">
                    日本語
                  </span>

                  {language === "JA" && (
                    <span className="text-blue-600">
                      ✓
                    </span>
                  )}

                </button>

              </div>
            )}

          </div>


          {/* =================================================
              SIGN IN
          ================================================= */}
          <Link
            href="/sign-in"
            className="hidden text-sm font-medium text-white transition hover:text-blue-300 md:block xl:text-base"
          >
            Sign In
          </Link>


          {/* =================================================
              SIGN UP
          ================================================= */}
          <Link
            href="/sign-up"
            className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 md:block xl:px-5 xl:py-2.5 xl:text-base"
          >
            Sign Up
          </Link>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center rounded-lg p-1.5 text-white transition hover:bg-white/10 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>

        </div>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#07152f]/98 px-5 py-5 shadow-2xl backdrop-blur-xl md:hidden">

          <div className="flex flex-col gap-1">

            {/* Navigation */}
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-white transition hover:bg-white/10"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-white transition hover:bg-white/10"
            >
              Services
            </Link>

            <Link
              href="/about-us"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-white transition hover:bg-white/10"
            >
              About Us
            </Link>

            <Link
              href="/contact-us"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>


            {/* =================================================
                MOBILE LANGUAGE
            ================================================= */}
            <div className="my-3 border-y border-white/10 py-4">

              <div className="mb-3 flex items-center gap-2 px-4">

                <Globe className="h-4 w-4 text-white/50" />

                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Language
                </p>

              </div>

              <div className="grid grid-cols-3 gap-2 px-4">

                {/* English */}
                <button
                  type="button"
                  onClick={() => selectLanguage("EN")}
                  className={`flex flex-col items-center gap-1 rounded-lg px-2 py-3 text-xs font-medium transition ${
                    language === "EN"
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/15"
                  }`}
                >
                  <span className="text-xl">
                    🇺🇸
                  </span>

                  <span>
                    English
                  </span>
                </button>


                {/* Korean */}
                <button
                  type="button"
                  onClick={() => selectLanguage("KO")}
                  className={`flex flex-col items-center gap-1 rounded-lg px-2 py-3 text-xs font-medium transition ${
                    language === "KO"
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/15"
                  }`}
                >
                  <span className="text-xl">
                    🇰🇷
                  </span>

                  <span>
                    한국어
                  </span>
                </button>


                {/* Japanese */}
                <button
                  type="button"
                  onClick={() => selectLanguage("JA")}
                  className={`flex flex-col items-center gap-1 rounded-lg px-2 py-3 text-xs font-medium transition ${
                    language === "JA"
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/15"
                  }`}
                >
                  <span className="text-xl">
                    🇯🇵
                  </span>

                  <span>
                    日本語
                  </span>
                </button>

              </div>

            </div>


            {/* =================================================
                MOBILE AUTH
            ================================================= */}
            <div className="grid grid-cols-2 gap-3 pt-2">

              <Link
                href="/sign-in"
                onClick={closeMenu}
                className="rounded-lg border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                onClick={closeMenu}
                className="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Sign Up
              </Link>

            </div>


            {/* =================================================
                MOBILE SOCIAL MEDIA
            ================================================= */}
            <div className="mt-5 border-t border-white/10 pt-5">

              <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                Follow Us
              </p>

              <div className="flex items-center gap-3 px-4">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-blue-600"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.7v8h3.4z" />
                  </svg>
                </a>


                {/* YouTube */}
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-red-600"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.8V8.2l6.5 3.8-6.5 3.8z" />
                  </svg>
                </a>


                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-pink-500"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

              </div>

            </div>

          </div>
        </div>
      )}

    </nav>
  );
}