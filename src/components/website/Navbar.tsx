"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="absolute left-0 top-0 z-50 w-full bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-2 md:px-8 lg:px-10">

        {/* LOGO */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/website/company_logo.png"
            alt="company logo"
            width={136}
            height={136}
            priority
            className="h-20 w-52 object-contain md:h-22 md:w-60"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="text-base font-medium text-white transition hover:text-gray-300"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-base font-medium text-white transition hover:text-gray-300"
          >
            Services
          </Link>

          <Link
            href="/about-us"
            className="text-base font-medium text-white transition hover:text-gray-300"
          >
            About Us
          </Link>

          <Link
            href="/contact-us"
            className="text-base font-medium text-white transition hover:text-gray-300"
          >
            Contact Us
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">
          <ShoppingCartIcon />

          {/* DESKTOP SIGN IN */}
          <Link
            href="/sign-in"
            className="hidden text-base font-medium text-white transition hover:text-gray-300 md:block"
          >
            Sign In
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center text-white md:hidden"
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

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-1">

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

            <Link
              href="/sign-in"
              onClick={closeMenu}
              className="mt-2 rounded-lg border border-white/20 px-4 py-3 text-base font-medium text-white transition hover:bg-white/10"
            >
              Sign In
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

