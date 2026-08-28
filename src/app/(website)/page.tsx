import TextType from '@/components/website/TextType';

import SplitFlapText from '@/components/SplitFlapText';

import StrokeText from '@/components/website/StrokeText';

import TrueFocus from '@/components/website/TrueFocus';

import LogoLoop from '@/components/LogoLoop';

import GradientText from '@/components/GradientText';

import Link from "next/link";

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGooglecloud, SiCloudflare, SiServerfault } from 'react-icons/si';

import {
  FaComments,
  FaLaptopCode,
  FaCloudUploadAlt,
  FaBullhorn,
  FaCashRegister,
  FaPalette,
} from 'react-icons/fa';


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function HomePage() {
  return (
    <main>
      <section
        className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/website/homepage-banner9.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
       

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
          
        <GradientText
          colors={["#ffffff","#0085fa","#ffffff"]}
          animationSpeed={8}
          showBorder={false}
          className="custom-class" 
        >
        Build. Host. Scale.
        </GradientText>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="rounded-md bg-white px-8 py-2 text-lg font-semibold text-black transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
          >
            Contact Us
          </a>

          <a
            href="/pricing"
            className="rounded-md border border-white bg-transparent px-8 py-2 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg"
          >
            View Pricing
          </a>
        </div>
     
        <TextType className="mt-4 text-lg md:text-4xl"
          text={["From custom website and mobile development to hosting, deployment, and infrastructure.", "We provide the technology your business needs to grow."]}
          typingSpeed={40}
          pauseDuration={4500}
          showCursor
          cursorCharacter="_"
          texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
          deletingSpeed={10}
          // variableSpeedEnabled={false}
          variableSpeed={false}
          cursorBlinkDuration={0.5}
          
        />
        </div>
      </section>

      <section className="relative z-20 -mt-[21vh] px-6 pb-20">
        <div className="mx-auto max-w-7xl">
  
          {/* SERVICES */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* Website & Mobile Development */}
            <div className="group flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
                <SiReact className="text-5xl text-blue-500" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Website & Mobile Development
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                Modern, responsive, and high-performance applications built to help
                businesses establish a strong online presence and convert visitors
                into customers.
              </p>

              <div className="mt-auto pt-6">
              <Link
                href={`/pricing?service=${encodeURIComponent("Website & Mobile Development")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
              >
                View Pricing
              </Link>
            </div>
            </div>

            {/* Shared Cloud Hosting */}
            <div className="group flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
                <SiCloudflare className="text-5xl text-orange-500" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Shared NVMe Cloud Hosting
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                Reliable cloud hosting with NVMe storage, automated backups,
                enterprise-grade security, and scalable resources at an affordable
                price.
              </p>

              <div className="mt-auto pt-6">
                <Link
                  href={`/contact?service=${encodeURIComponent("Shared Cloud Hosting")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Dedicated Cloud Server */}
          <div className="group flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
                <SiServerfault className="text-5xl text-green-600" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Dedicated Cloud Server
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                High-performance dedicated cloud servers designed for enterprise
                applications, databases, ERP systems, and mission-critical workloads.
              </p>

              <div className="mt-auto pt-6">
                <Link
                  href={`/contact?service=${encodeURIComponent("Dedicated Cloud Server")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Digital Marketing */}
          <div className="group flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
                <FaBullhorn className="text-5xl text-purple-500" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Digital Adversiting & Marketing
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                Data-driven digital marketing strategies that help businesses reach
                the right audience, increase brand awareness, and generate more leads
                and conversions.
              </p>

              <div className="mt-auto pt-6">
                <Link
                  href={`/contact?service=${encodeURIComponent("Digital Marketing")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Point of Sale */}
            <div className="group flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
                <FaCashRegister className="text-5xl text-green-500" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Point of Sale (POS)
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                Smart and reliable POS solutions designed to streamline sales,
                inventory management, reporting, and day-to-day business operations.
              </p>

              <div className="mt-auto pt-6">
                <Link
                  href={`/contact?service=${encodeURIComponent("Point of Sale (POS)")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Branding & Design */}
            <div className="group flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
                <FaPalette className="text-5xl text-pink-500" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Branding & Design
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                Creative branding and design solutions that build a strong visual
                identity and help your business stand out across digital and
                traditional platforms.
              </p>

              <div className="mt-6">
                <Link
                  href={`/contact?service=${encodeURIComponent("Branding & Design")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden', marginTop: '6rem' }}>
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
          
          {/* Vertical loop with deceleration on hover */}
          <LogoLoop
            logos={techLogos}
            useCustomRender={false}
          />
        </div>

        {/* Web Development Process */}
        <div className="mt-24 w-full bg-[#101828] px-6 py-24">
          <div className="mx-auto max-w-6xl">

            {/* Section Heading */}
            <div className="mb-20 text-center text-white">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Our Process
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                How We Build Your Website
              </h2>

              <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-blue-500" />
            </div>

            {/* Process Steps */}
            <div className="relative">

              {/* Connecting Line - Desktop */}
              <div className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-white/20 md:block" />

              <div className="grid gap-12 md:grid-cols-3">

                {/* Step 1 */}
                <div className="relative text-center text-white">

                  <div className="relative z-10 mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600 shadow-lg shadow-blue-500/20">
                    <FaComments className="text-3xl" />

                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600">
                      1
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    Consultation
                  </h3>

                  <p className="mx-auto max-w-xs leading-relaxed text-gray-400">
                    We learn about your business, goals, audience, and requirements
                    to create the right strategy for your website.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative text-center text-white">

                  <div className="relative z-10 mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600 shadow-lg shadow-blue-500/20">
                    <FaLaptopCode className="text-3xl" />

                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600">
                      2
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    Design & Development
                  </h3>

                  <p className="mx-auto max-w-xs leading-relaxed text-gray-400">
                    We transform the strategy into a modern design and develop a
                    responsive, fast, and scalable website.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative text-center text-white">

                  <div className="relative z-10 mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600 shadow-lg shadow-blue-500/20">
                    <FaCloudUploadAlt className="text-3xl" />

                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600">
                      3
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    Deployment & Hosting
                  </h3>

                  <p className="mx-auto max-w-xs leading-relaxed text-gray-400">
                    Once everything is ready, we deploy your website and configure
                    secure, reliable hosting for your business.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      {/* PRICING */}
<section className="mt-24 w-full bg-[#f8fafc] px-6 py-24">
  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
        Pricing Plans
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-[#101828] md:text-5xl">
        Choose the Right Website for Your Business
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
        Professional websites built to help your business establish an online
        presence, manage your content, and grow online.
      </p>

      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-blue-500" />
    </div>

    {/* Pricing Cards */}
    <div className="grid items-stretch gap-6 lg:grid-cols-3">

      {/* STANDARD WEBSITE */}
      <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div>
          <h3 className="text-2xl font-bold text-[#101828]">
            Standard Website
          </h3>

          <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-500">
            A professional website solution for businesses that need a
            modern online presence.
          </p>
        </div>

        {/* Price */}
        <div className="mt-6">
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold tracking-tight text-[#101828]">
              ₱20,000
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-400">
            One-time website development
          </p>
        </div>

        {/* Button */}
       <Link
          href={`/contact?service=${encodeURIComponent("Standard Website")}`}
          className="text-center items-center justify-center  block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
        >
          View Pricing
        </Link>

        <div className="my-7 h-px bg-gray-200" />

        <p className="mb-5 text-sm font-semibold text-[#101828]">
          What's included:
        </p>

        {/* Features */}
        <ul className="space-y-3 text-sm text-gray-600">

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            25 GB NVMe Storage Allocation
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Responsive & Mobile-Friendly Design
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            SEO-Ready Website Structure
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Google Analytics Integration
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Google Maps Integration
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Custom-Built CMS
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Product & Content Management
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Sales Transaction Manager
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Sales Reports
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Electronic Inquiry Form
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Premium Control Panel
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Database Included
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Free SSL Certificate — 1 Year
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Free Domain Registration — 1 Year
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Complimentary Hosting — 1 Year
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Multiple Professional Email Accounts*
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Zero Setup Fee
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Free ZCare+ Plus Support & Maintenance
          </li>

        </ul>
      </div>


      {/* E-COMMERCE WEBSITE - FEATURED */}
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#101828] p-7 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2">

        {/* Featured Badge */}
        <div className="absolute right-5 top-5">
          <span className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
            Most Popular
          </span>
        </div>

        <div>
          <h3 className="pr-28 text-2xl font-bold">
            E-Commerce Website
          </h3>

          <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-300">
            A complete online store solution designed to help businesses
            sell products and manage online transactions.
          </p>
        </div>

        {/* Price */}
        <div className="mt-6">
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold tracking-tight">
              ₱50,000
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-400">
            One-time website development
          </p>
        </div>

        {/* Button */}
        <Link
          href={`/contact?service=${encodeURIComponent("E-Commerce Website")}`}
          className="text-center block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
        >
          Buy Now
        </Link>

        <div className="my-7 h-px bg-white/10" />

        <p className="mb-5 text-sm font-semibold text-white">
          What's included:
        </p>

        {/* Features */}
        <ul className="space-y-3 text-sm text-gray-300">

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            50 GB NVMe Storage Allocation
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Responsive & Mobile-Friendly Design
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            SEO-Ready Website Structure
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Google Analytics Integration
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Google Maps Integration
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Custom-Built E-Commerce CMS
          </li>

          <li className="mt-4 border-t border-white/10 pt-4 font-semibold text-white">
            E-Commerce Features
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Product Catalog & Product Details
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Category & Product Management
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Inventory Management
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Shopping Cart
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Checkout System
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Payment Gateway Integration
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Customer Account Management
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Customer Management
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Order Management
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Sales Transaction Manager
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Sales Reports & Analytics
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Electronic Inquiry Form
          </li>

          <li className="mt-4 border-t border-white/10 pt-4">
            <span className="font-semibold text-blue-400">✓</span>
            Premium Control Panel
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Database Included
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Free SSL Certificate — 1 Year
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Free Domain Registration — 1 Year
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Complimentary Hosting — 1 Year
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Multiple Professional Email Accounts*
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Zero Setup Fee
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-blue-400">✓</span>
            Free ZCare+ Plus Support & Maintenance
          </li>

        </ul>

        {/* Why this plan */}
        <div className="mt-7 rounded-xl bg-white/5 p-4">
          <p className="text-xs font-semibold text-blue-400">
            Why this plan?
          </p>

          <p className="mt-2 text-sm leading-relaxed text-gray-300">
            A complete solution for businesses ready to sell products
            and accept online payments.
          </p>
        </div>

      </div>


      {/* CUSTOMIZED PREMIUM WEBSITE */}
      <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div>
          <h3 className="text-2xl font-bold text-[#101828]">
            Customized Premium Website
          </h3>

          <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-500">
            Tailored website solutions with custom functionality,
            design, and business requirements.
          </p>
        </div>

        {/* Price */}
        <div className="mt-6">
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold tracking-tight text-[#101828]">
              Custom
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-400">
            Pricing based on requirements
          </p>
        </div>

        {/* Button */}
        <Link
          href={`/contact?service=${encodeURIComponent("Customized Premium Website")}`}
          className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
        >
          Get Quote
        </Link>
        <div className="my-7 h-px bg-gray-200" />

        <p className="mb-5 text-sm font-semibold text-[#101828]">
          What's included:
        </p>

        <ul className="space-y-3 text-sm text-gray-600">

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Custom NVMe Storage Allocation
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Responsive & Mobile-Friendly Design
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            SEO-Ready Website Structure
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Google Analytics Integration
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Google Maps Integration
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Custom-Built CMS
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Customized Admin Panel
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Custom-Designed Web Pages
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Advanced Features & Functionality
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Database Included
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Premium Control Panel
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Free SSL Certificate — 1 Year
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Free Domain Registration — 1 Year
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Complimentary Hosting — 1 Year
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Multiple Professional Email Accounts*
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Zero Setup Fee
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-green-500">✓</span>
            Free ZCare+ Plus Support & Maintenance
          </li>

        </ul>

      </div>

    </div>

    {/* Pricing Note */}
    <p className="mt-8 text-center text-xs text-gray-400">
      * Professional email accounts are subject to available storage capacity.
      Domain, hosting, and SSL are complimentary for the first year.
    </p>

  </div>
</section>

      </section>

      <section>

     
      </section>
    </main>
  );
}
