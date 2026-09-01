"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#061633] text-white">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 lg:px-10">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* =================================================
              ZSPHERE BRAND
          ================================================= */}
          <div className="lg:col-span-2">

            <Link
              href="/"
              className="inline-flex items-center"
            >
              <Image
                src="/images/website/company_logo.png"
                alt="Zsphere Technologies"
                width={220}
                height={80}
                priority
                className="h-auto w-56 object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-blue-100/60">
              Technology solutions designed to help businesses build,
              manage, and grow their digital presence with confidence.
            </p>


            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}
            <div className="mt-7 flex items-center gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-200 hover:border-blue-400/50 hover:bg-blue-600 hover:text-white"
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-200 hover:border-red-400/50 hover:bg-red-600 hover:text-white"
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-200 hover:border-pink-400/50 hover:bg-pink-500 hover:text-white"
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


          {/* =================================================
              COMPANY
          ================================================= */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="mt-5 h-0.5 w-7 bg-blue-500" />

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  Blog
                </Link>
              </li>

            </ul>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <div className="mt-5 h-0.5 w-7 bg-blue-500" />

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/services/web-development"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/web-hosting"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  Web Hosting
                </Link>
              </li>

              <li>
                <Link
                  href="/services/cloud"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  Cloud Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="/services/support"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  ZCare+ Support
                </Link>
              </li>

            </ul>

          </div>


          {/* =================================================
              RESOURCES
          ================================================= */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>

            <div className="mt-5 h-0.5 w-7 bg-blue-500" />

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/support"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  Support Center
                </Link>
              </li>

              <li>
                <Link
                  href="/knowledge-base"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  Knowledge Base
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  Get Support
                </Link>
              </li>

              <li>
                <Link
                  href="/status"
                  className="text-sm text-blue-100/60 transition hover:text-white"
                >
                  System Status
                </Link>
              </li>

            </ul>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}
        <div className="my-10 h-px w-full bg-white/10" />


        {/* =====================================================
            PAYMENT METHODS
        ===================================================== */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              We Accept
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">

              {/* VISA */}
              <div className="flex h-10 min-w-[62px] items-center justify-center rounded-md bg-white px-3 shadow-sm">
                <span className="text-lg font-black italic tracking-tight text-[#1A1F71]">
                  VISA
                </span>
              </div>


              {/* MASTERCARD */}
              <div className="flex h-10 min-w-[72px] items-center justify-center rounded-md bg-white px-2 shadow-sm">
                <div className="flex items-center">
                  <span className="-mr-2 h-5 w-5 rounded-full bg-[#EB001B]" />
                  <span className="h-5 w-5 rounded-full bg-[#F79E1B]/90" />
                </div>
              </div>


              {/* JCB */}
              <div className="flex h-10 min-w-[62px] items-center justify-center rounded-md bg-white px-3 shadow-sm">
                <span className="text-sm font-black italic text-[#1682A7]">
                  JCB
                </span>
              </div>


              {/* AMERICAN EXPRESS */}
              <div className="flex h-10 min-w-[72px] items-center justify-center rounded-md bg-[#2E77BC] px-2 shadow-sm">
                <span className="text-[11px] font-black tracking-wide text-white">
                  AMEX
                </span>
              </div>


              {/* PAYPAL */}
              <div className="flex h-10 min-w-[62px] items-center justify-center rounded-md bg-white px-3 shadow-sm">
                <span className="text-lg font-black italic text-[#003087]">
                  P
                </span>
                <span className="-ml-1 text-sm font-bold text-[#009CDE]">
                  PayPal
                </span>
              </div>


              {/* GCASH */}
              <div className="flex h-10 min-w-[72px] items-center justify-center rounded-md bg-white px-3 shadow-sm">
                <span className="text-sm font-bold text-[#007DFE]">
                  GCash
                </span>
              </div>

            </div>

          </div>


          {/* =================================================
              PAYMENT DESCRIPTION
          ================================================= */}
          <div className="max-w-sm">

            <p className="text-sm leading-6 text-blue-100/50">
              Secure and convenient payment options are available
              for our products, hosting services, and technology
              solutions.
            </p>

          </div>

        </div>


        {/* =====================================================
            SECOND DIVIDER
        ===================================================== */}
        <div className="my-8 h-px w-full bg-white/10" />


        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}
        <div className="flex flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <p className="text-blue-100/50">
            © 2026 Zsphere Technologies. All Rights Reserved.
          </p>


          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">

            <Link
              href="/terms-of-service"
              className="text-blue-100/50 transition hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              href="/privacy-policy"
              className="text-blue-100/50 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact-us"
              className="text-blue-100/50 transition hover:text-white"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
