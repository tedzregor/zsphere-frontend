import TextType from '@/components/website/TextType';
import SplitFlapText from '@/components/SplitFlapText';
import StrokeText from '@/components/website/StrokeText';
import TrueFocus from '@/components/website/TrueFocus';
import LogoLoop from '@/components/LogoLoop';
import GradientText from '@/components/GradientText';
import Beams from '@/components/Beams';
import Masonry from '@/components/Masonry';
import DriftWall from '@/components/DriftWall';
import ElectricBorder from '@/components/ElectricBorder';
import InquirySection from "@/components/website/InquirySection";

import Image from "next/image";

import ServerPerformanceComparison from '@/components/website/ServerPerformanceComparison';
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
  { src: "/images/website/wordpress-logo.png", alt: "Wordpress Hosting", href: "https://company1.com" },
  { src: "/images/website/shopify-logo.png", alt: "Shopify Hosting", href: "https://company1.com" },
  { src: "/images/website/prestashop-logo.png", alt: "Prestashop Hosting", href: "https://company1.com" },
  { src: "/images/website/magento-logo.png", alt: "Magento Hosting", href: "https://company1.com" },
  { src: "/images/website/laravel-logo.png", alt: "PHP Laravel Hosting", href: "https://company1.com" },
  { src: "/images/website/nextjs-logo.png", alt: "NextJS Hosting", href: "https://company1.com" },
  { src: "/images/website/vuejs-logo.png", alt: "VueJS Hosting", href: "https://company1.com" },
  { src: "/images/website/mysql-logo.png", alt: "MySQL Hosting", href: "https://company1.com" },
  { src: "/images/website/ubuntu-logo.png", alt: "Ubuntu Server Hosting", href: "https://company1.com" },
  { src: "/images/website/cpanel-logo.png", alt: "Cpanel Hosting", href: "https://company1.com" },
];

// Items for the masonry layout
const items = [
    {
      id: "1",
      img: "/images/website/pamico-website.png",
      url: "https://pinoyofwinsurance.ph",
      height: 400,
    },
    {
      id: "2",
      img: "/images/website/pamico-website-admin.png",
      url: "https://pinoyofwinsurance.ph",
      height: 250,
    },
    {
      id: "3",
      img: "/images/website/zsphere-website.png",
      url: "https://zspheretech.com",
      height: 600,
    },
    {
      id: "4",
      img: "/images/website/homepage-banner9.png",
      url: "https://example.com/three",
      height: 400,
    },
        {
      id: "5",
      img: "/images/website/homepage-banner9.png",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "6",
      img: "/images/website/homepage-banner9.png",
      url: "https://example.com/three",
      height: 500,
    },
    // ... more items
];

const driftwall_items = [
  { image: '/images/website/real-estate-website.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/spa-website.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/construction-website.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/zsphere-website.png', title: 'Falls', href: 'https://example.com/three' },
  
  
  { image: '/images/website/pharmacy-website.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/catering-website.png', title: 'Peaks', href: 'https://example.com/one' },
  { image: '/images/website/law-firm-website.png', title: 'Peaks', href: 'https://example.com/one' },
  { image: '/images/website/zsphere-website-admin.png', title: 'Falls', href: 'https://example.com/three' },

  { image: '/images/website/dental-clinic-website.png', title: 'Peaks', href: 'https://example.com/one' },
  { image: '/images/website/pamico-website.png', title: 'Peaks', href: 'https://example.com/one' },
  { image: '/images/website/travel-and-tour-website.jpg', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/spa-website.png', title: 'Falls', href: 'https://example.com/three' },

  { image: '/images/website/zsphere-website.png', title: 'Peaks', href: 'https://example.com/one' },
  { image: '/images/website/construction-website.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/dental-clinic-website.png', title: 'Peaks', href: 'https://example.com/one' },
  { image: '/images/website/pamico-website.png', title: 'Peaks', href: 'https://example.com/one' },

  { image: '/images/website/restaurant-website.png', title: 'Peaks', href: 'https://example.com/one' },
  { image: '/images/website/real-estate-website.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/e-commerce-website.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/salon-website.png', title: 'Peaks', href: 'https://example.com/one' },

  { image: '/images/website/zsphere-website-admin-night.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/medical-website.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/hotel-website.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/school-website.png', title: 'Peaks', href: 'https://example.com/one' },
  
  { image: '/images/website/gym-website.png', title: 'Peaks', href: 'https://example.com/one' },
  { image: '/images/website/financial-services-website.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/event-website.png', title: 'Falls', href: 'https://example.com/three' },
  { image: '/images/website/catering-website.png', title: 'Peaks', href: 'https://example.com/one' },
 
];

export default function HomePage() {
  return (
    <main>
      <section
        className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/website/homepage-banner19.png')",
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
            href="#inquire-now"
            // href="/contact"
            className="rounded-md bg-white px-8 py-2 text-lg font-semibold text-black transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
          >
            Contact Us
          </a>

          <a
            href="#inquire-now"
            // href="/pricing"
            className="rounded-md border border-white bg-transparent px-8 py-2 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
     
        <TextType
          className="mt-4 text-lg md:text-4xl"
          text={[
            "From custom website and mobile development to hosting, deployment, and infrastructure.",
            "We provide the technology your business needs to grow.",
          ]}
          typingSpeed={40}
          pauseDuration={4500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={10}
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
              <div className="mx-auto mb-0 flex h-32 w-32 items-center justify-center">
                <Image
                  src="/images/website/services/web-mobile-dev-icon.png"
                  alt="Website & Mobile Development"
                  width={128}
                  height={128}
                  className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
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
                  href="#website-pricing"
                // href={`/pricing?service=${encodeURIComponent("Website & Mobile Development")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
              >
                View Pricing
              </Link>
            </div>
            </div>

            {/* Shared Cloud Hosting */}
            <div className="group flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-0 flex h-32 w-32 items-center justify-center">
                <Image
                  src="/images/website/services/hosting-shared-icon.png"
                  alt="Shared NVMe Cloud Hosting"
                  width={128}
                  height={128}
                  className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
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
                  href="#hosting-pricing"
                  // href={`/contact?service=${encodeURIComponent("Shared Cloud Hosting")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Dedicated Cloud Server */}
          <div className="group flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
               <div className="mx-auto mb-0 flex h-32 w-32 items-center justify-center">
                  <Image
                    src="/images/website/services/dedicated-server-icon.png"
                    alt="Dedicated Server Hosting"
                    width={128}
                    height={128}
                    className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
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
                  href="#inquire-now"
                  // href={`/contact?service=${encodeURIComponent("Dedicated Cloud Server")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  Inquire Now
                </Link>
              </div>
            </div>

            {/* Digital Marketing */}
          <div className="group flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-0 flex h-32 w-32 items-center justify-center">
                <Image
                  src="/images/website/services/digital-marketing-icon.png"
                  alt="Digital Marketing"
                  width={128}
                  height={128}
                  className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
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
                  href="#inquire-now"
                  // href={`/contact?service=${encodeURIComponent("Digital Marketing")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  Inquire Now
                </Link>
              </div>
            </div>

            {/* Point of Sale */}
            <div className="group flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-0 flex h-32 w-32 items-center justify-center">
                <Image
                  src="/images/website/services/point-of-sale-icon.png"
                  alt="Point of Sale (POS)"
                  width={128}
                  height={128}
                  className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
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
                 href="#inquire-now"
                  // href={`/contact?service=${encodeURIComponent("Point of Sale (POS)")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  Inquire Now
                </Link>
              </div>
            </div>

            {/* Branding & Design */}
            <div className="group flex h-full flex-col rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-0 flex h-32 w-32 items-center justify-center">
                <Image
                  src="/images/website/services/branding-and-design-icon.png"
                  alt="branding & design"
                  width={128}
                  height={128}
                  className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
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
                  href="#inquire-now"
                  // href={`/contact?service=${encodeURIComponent("Branding & Design")}`}
                  className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '150px', position: 'relative', overflow: 'hidden', marginTop: '6rem' }}>
          <LogoLoop
            logos={imageLogos}
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
            logos={imageLogos}
            useCustomRender={false}
          />
        </div>
      </section>

      {/* Web Development Process */}
      <section className="mt-10 w-full bg-[#101828] px-6 py-14">
        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="mb-10 text-center text-white">
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

            <div className="grid gap-12 md:grid-cols-3 mb-6">

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

        {/* Masonry and Drift Wall */}
        {/* <div className="relative mt-16 h-[680px] w-full px-4 md:h-[550px] md:px-6 lg:h-[450px]">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          /> 
        </div>*/}
        <div style={{ height: 520 }}>
          <DriftWall
              items={driftwall_items}
              columns={4}
              tileWidth={450}
              tileHeight={300}
              gap={18}
              tilt={22}
              turn={-2}
              perspective={1200}
              depth={120}
              speed={44}
              direction="up"
              variance={0.45}
              parallax={0.6}
              lift={64}
              fade={0.15}
              dim={2}
              overlayColor="#fefefe"
              radius={14}
              roll={0}
              pauseOnHover={false}
              grayscale={false}
          />
        </div>
      </section>
       
      {/* PRICING */}
      <section id="website-pricing" className="mt-0 w-full bg-[#f8fafc] px-6 py-15">
        <div className="mx-auto max-w-7xl">
        
          {/* Section Heading */}
          <div className="mx-auto mb-6 max-w-3xl text-center">
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
                    ₱19,998
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-400">
                  One-time website development
                </p>
              </div>

              {/* Button */}
            <Link
                href="#inquire-now"
                // href={`/contact?service=${encodeURIComponent("Standard Website")}`}
                className="text-center items-center justify-center  block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
              >
                Buy Now
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
                  5 Pages Ready (Home, About, Services, Contact, News)
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  Content Management
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
                  24/7 Expert Support
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
                    ₱54,998
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-400">
                  One-time website development
                </p>
              </div>

              {/* Button */}
              <Link
                href="#inquire-now"
                // href={`/contact?service=${encodeURIComponent("E-Commerce Website")}`}
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
                  24/7 Expert Support
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  ZCare+ Support and Maintenance
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
                href="#inquire-now"
                // href={`/contact?service=${encodeURIComponent("Customized Premium Website")}`}
                className="block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
              >
                Inquire Now
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
                  Free ZCare+ Support & Maintenance
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

        {/* Payment Methods */}
        <div className="mb-0 mt-4 flex flex-col items-center">
          {/* <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            We Accept
          </p> */}

          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1">
            
            {/* VISA */}
            <div className="flex h-10 min-w-[64px] items-center justify-center rounded-lg bg-white px-3 shadow-sm ring-1 ring-slate-200">
              <span className="text-[17px] font-black italic tracking-tight text-[#1a2b78]">
                VISA
              </span>
            </div>

            {/* Mastercard */}
            <div className="flex h-10 min-w-[72px] items-center justify-center rounded-lg bg-white px-3 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center">
                <span className="h-5 w-5 rounded-full bg-[#eb001b]" />
                <span className="-ml-2 h-5 w-5 rounded-full bg-[#f79e1b] opacity-95" />
              </div>
            </div>

            {/* JCB */}
            <div className="flex h-10 min-w-[64px] items-center justify-center rounded-lg bg-white px-3 shadow-sm ring-1 ring-slate-200">
              <span className="text-[15px] font-extrabold italic text-[#087da9]">
                JCB
              </span>
            </div>

            {/* American Express */}
            <div className="flex h-10 min-w-[72px] items-center justify-center rounded-lg bg-[#2878b9] px-3 shadow-sm">
              <span className="text-[12px] font-black tracking-wide text-white">
                AMEX
              </span>
            </div>

            {/* PayPal */}
            <div className="flex h-10 min-w-[78px] items-center justify-center rounded-lg bg-white px-3 shadow-sm ring-1 ring-slate-200">
              <span className="text-[15px] font-black italic text-[#0070ba]">
                <span className="text-[#003087]">P</span>ayPal
              </span>
            </div>

            {/* GCash */}
            <div className="flex h-10 min-w-[72px] items-center justify-center rounded-lg bg-white px-3 shadow-sm ring-1 ring-slate-200">
              <span className="text-[15px] font-extrabold text-[#0072ce]">
                GCash
              </span>
            </div>

          </div>
        </div>
        {/* End of payment methods */}

      </section>


      {/* Hosting Plans */}

      <section id="hosting-pricing" className="mt-0 w-full bg-[#f8fafc] px-6 py-15">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Hosting Plans
          </p>

        <h2 className="text-3xl font-bold tracking-tight text-[#101828] md:text-5xl">
          Launch your Website with High-Performance Cloud Hosting
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
          Fast, secure, and reliable cloud hosting solutions designed to keep your
          website online, protected, and ready to grow with your business.
        </p>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-blue-500" /></div>


        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* BASIC SHARED CLOUD */}
          <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-2xl font-bold text-[#101828]">
              Basic Shared Cloud
            </h3>

            <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-500">
              Affordable cloud hosting for startups, portfolios, and small business websites.
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-[#101828]">
                ₱8,998
              </span>

              <p className="mt-1 text-sm text-gray-400">
                Annual hosting subscription
              </p>
            </div>

            <Link
              href="#inquire-now"
              // href={`/contact?service=${encodeURIComponent("Basic Shared Cloud")}`}
              className="mt-6 block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              Buy Now
            </Link>

            <div className="my-7 h-px bg-gray-200" />

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3"><span className="text-green-500">✓</span>15 GB NVMe Storage Allocation</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>500 GB Monthly Bandwidth Capacity</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>1 Free Hosted Domain Name</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>Easy To Use Control Panel Access</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>Built-In Mailing List Integration</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>Multiple Email Accounts</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>Free MySQL Database</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>Zero Setup Fee</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>No Cost Backup Service</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>24/7 Technical Support</li>
            </ul>

          </div>

          {/* BUSINESS SHARED CLOUD */}
          <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#101828] p-7 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2">

            <div className="absolute right-5 top-5">
              <span className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                Most Popular
              </span>
            </div>

            <h3 className="pr-24 text-2xl font-bold">
              Business Shared Cloud
            </h3>

            <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-300">
              Ideal for growing businesses that require more storage and bandwidth.
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold">
                ₱14,998
              </span>

              <p className="mt-1 text-sm text-gray-400">
                Annual hosting subscription
              </p>
            </div>

            <Link
              href="#inquire-now"
              // href={`/contact?service=${encodeURIComponent("Business Shared Cloud")}`}
              className="mt-6 block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              Buy Now
            </Link>

            <div className="my-7 h-px bg-white/10" />

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-3"><span className="text-blue-400">✓</span>25 GB NVMe Storage Allocation</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>1 TB Monthly Bandwidth Capacity</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>1 Free Hosted Domain Name</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>Easy To Use Control Panel Access</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>Built-In Mailing List Integration</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>Multiple Email Accounts</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>Free MySQL Database</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>Zero Setup Fee</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>No Cost Backup Service</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>24/7 Technical Support</li>
            </ul>

          </div>

          {/* STARTUP SHARED CLOUD */}
          <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-2xl font-bold text-[#101828]">
              Premium Shared Cloud
            </h3>

            <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-500">
              Enhanced hosting with maintenance support for growing online businesses.
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-[#101828]">
                ₱49,998
              </span>

              <p className="mt-1 text-sm text-gray-400">
                Annual hosting subscription
              </p>
            </div>

            <Link
              href="#inquire-now"
              // href={`/contact?service=${encodeURIComponent("Startup Shared Cloud")}`}
              className="mt-6 block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              Buy Now
            </Link>

            <div className="my-7 h-px bg-gray-200" />

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3"><span className="text-green-500">✓</span>50 GB NVMe Storage Allocation</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>1 TB Monthly Bandwidth Capacity</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>1 Free Hosted Domain Name</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>Easy To Use Control Panel Access</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>Built-In Mailing List Integration</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>Multiple Email Accounts</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>Free MySQL Database</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>Zero Setup Fee</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>No Cost Backup Service</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>24/7 Technical Support</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>ZCare+ Support and Maintenance</li>
            </ul>

          </div>

          {/* DEDICATED CLOUD SERVER */}
          <div className="group flex h-full flex-col rounded-2xl border-2 border-indigo-500 bg-gradient-to-b from-indigo-50 to-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-2xl font-bold text-[#101828]">
              Dedicated Cloud Server
            </h3>

            <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-500">
              Enterprise-grade cloud infrastructure tailored to your requirements.
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-[#101828]">
                Custom
              </span>

              <p className="mt-1 text-sm text-gray-400">
                Pricing based on requirements
              </p>
            </div>

            <Link
            href="#inquire-now"
              // href={`/contact?service=${encodeURIComponent("Dedicated Cloud Server")}`}
              className="mt-6 block w-full bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-center text-base font-semibold text-white transition-all duration-300 hover:shadow-lg"
            >
              Inquire Now
            </Link>

            <div className="my-7 h-px bg-gray-200" />

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>Custom NVMe Storage Allocation</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>Custom CPU Allocation</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>Custom RAM Allocation</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>3 Domains Available</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>1 TB Monthly Bandwidth Capacity</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>1 Free Hosted Domain Name</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>Easy To Use Control Panel Access</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>Built-In Mailing List Integration</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>Multiple Email Accounts</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>Free MySQL Database</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>Zero Setup Fee</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>No Cost Backup Service</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>24/7 Technical Support</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>ZCare+ Support and Maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Server Performance Comparison */}
      <section className="w-full overflow-hidden bg-blue-50">
        <ServerPerformanceComparison />
      </section>

{/* =========================================================
    ZCARE+ SUPPORT & MAINTENANCE
========================================================= */}
{/* =========================================================
    ZCARE+ SUPPORT & MAINTENANCE
========================================================= */}
<section className="relative w-full overflow-hidden">

  {/* =====================================================
      FULL-WIDTH BACKGROUND IMAGE
  ===================================================== */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-[0.58]"
    style={{
      backgroundImage:
        "url('/images/website/zsphere-support-bg.png')",
    }}
  />

  {/* Dark/light overlay for readability */}
  <div className="absolute inset-0 bg-white/20" />

  {/* =====================================================
      CONTENT
  ===================================================== */}
  <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1600px] items-center px-6 py-16 sm:px-10 lg:px-14 xl:px-20">

    {/* ===================================================
        LEFT — ZCARE+ CONTENT PANEL
    =================================================== */}
    <div className="w-full max-w-[760px] rounded-[2rem] bg-white/95 p-7 shadow-2xl backdrop-blur-md sm:p-10 lg:p-12">

      {/* Label */}
      <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2">

        <span className="h-2 w-2 rounded-full bg-blue-600" />

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
          ZCare+ Support & Maintenance
        </span>

      </div>


      {/* Heading */}
      <h2 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-[#101828] sm:text-5xl xl:text-6xl">

        Reliable Support for

        <span className="block text-blue-600">
          Your Digital Platform
        </span>

      </h2>


      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
        Reliable after-sales support for your website and hosting.
        ZCare+ helps keep your digital platform secure, optimized,
        monitored, and available when your customers need it most.
      </p>


      {/* =================================================
          BENEFITS
      ================================================= */}
      <div className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">


        {/* Proactive Monitoring */}
        <div className="flex gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 12h4l2-7 4 14 2-7h6" />
            </svg>

          </div>

          <div>
            <h3 className="font-semibold text-[#101828]">
              Proactive Monitoring
            </h3>

            <p className="mt-1.5 text-sm leading-6 text-gray-500">
              Continuous monitoring helps identify potential issues
              before they affect your business.
            </p>
          </div>

        </div>


        {/* Priority Support */}
        <div className="flex gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 13a8 8 0 0 1 16 0" />
              <path d="M4 13v4a2 2 0 0 0 2 2h1v-6H4z" />
              <path d="M20 13v4a2 2 0 0 1-2 2h-1v-6h3z" />
              <path d="M9 19h6" />
            </svg>

          </div>

          <div>
            <h3 className="font-semibold text-[#101828]">
              Priority Technical Support
            </h3>

            <p className="mt-1.5 text-sm leading-6 text-gray-500">
              Get timely assistance from our technical team whenever
              technical concerns arise.
            </p>
          </div>

        </div>


        {/* Routine Maintenance */}
        <div className="flex gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.2 2.2-2.8-2.8 2-2.4z" />
            </svg>

          </div>

          <div>
            <h3 className="font-semibold text-[#101828]">
              Routine Maintenance
            </h3>

            <p className="mt-1.5 text-sm leading-6 text-gray-500">
              Regular updates, optimization, and system checks keep
              your website stable and efficient.
            </p>
          </div>

        </div>


        {/* Enhanced Security */}
        <div className="flex gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
              <path d="M9 12l2 2 4-4" />
            </svg>

          </div>

          <div>
            <h3 className="font-semibold text-[#101828]">
              Enhanced Security
            </h3>

            <p className="mt-1.5 text-sm leading-6 text-gray-500">
              Security best practices and monitoring help protect
              your website against potential threats.
            </p>
          </div>

        </div>


        {/* Backup & Recovery */}
        <div className="flex gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <ellipse cx="12" cy="5" rx="7" ry="3" />
              <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
              <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
            </svg>

          </div>

          <div>
            <h3 className="font-semibold text-[#101828]">
              Backup & Recovery
            </h3>

            <p className="mt-1.5 text-sm leading-6 text-gray-500">
              Recovery assistance helps minimize downtime and maintain
              business continuity.
            </p>
          </div>

        </div>


        {/* Reduced IT Costs */}
        <div className="flex gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="8" />
              <path d="M12 7v10M15 9.5c-.5-1-1.5-1.5-3-1.5-1.7 0-3 .8-3 2s1.2 2 3 2 3 .8 3 2-1.3 2-3 2c-1.5 0-2.5-.5-3-1.5" />
            </svg>

          </div>

          <div>
            <h3 className="font-semibold text-[#101828]">
              Reduced IT Costs
            </h3>

            <p className="mt-1.5 text-sm leading-6 text-gray-500">
              Reduce the need for a dedicated in-house IT team with
              professional support.
            </p>
          </div>

        </div>

      </div>


      {/* =================================================
          FOCUS ON GROWING
      ================================================= */}
      <div className="mt-10 rounded-2xl bg-gray-50 p-5 sm:p-6">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div className="max-w-lg">

            <h3 className="flex items-center gap-2 font-semibold text-[#101828]">
              <span className="text-blue-600">✦</span>
              Focus on Growing Your Business
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              We handle the technical responsibilities so you can
              focus on innovation, customers, and growth.
            </p>

          </div>


          <div className="border-t border-gray-200 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">

            <p className="mb-2 text-xs font-semibold text-gray-400">
              INCLUDED WITH
            </p>

            <div className="space-y-1.5 text-sm text-gray-600">

              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Premium Shared Cloud
              </div>

              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Dedicated Cloud Server
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* =====================================================
        RIGHT-SIDE IMAGE INFORMATION CARDS
        These sit directly over the full background image.
    ===================================================== */}

    {/* System Status */}
    <div className="absolute right-5 top-58 z-20 hidden w-[290px] rounded-2xl border border-white/40 bg-white/95 p-5 shadow-2xl backdrop-blur-xl md:block lg:right-10 xl:right-16">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-gray-400">
            System Status
          </p>

          <p className="mt-1 font-semibold text-[#101828]">
            All Systems Operational
          </p>
        </div>

        <span className="mt-1 h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />

      </div>

      <div className="mt-5 grid grid-cols-3 divide-x divide-gray-200">

        <div className="pr-3">
          <p className="text-[10px] text-gray-400">
            UPTIME
          </p>

          <p className="mt-1 text-lg font-bold text-[#101828]">
            99.9%
          </p>
        </div>

        <div className="px-3">
          <p className="text-[10px] text-gray-400">
            CPU
          </p>

          <p className="mt-1 text-lg font-bold text-[#101828]">
            32%
          </p>
        </div>

        <div className="pl-3">
          <p className="text-[10px] text-gray-400">
            STATUS
          </p>

          <p className="mt-1 text-lg font-bold text-emerald-600">
            LIVE
          </p>
        </div>

      </div>

    </div>


    {/* Security Monitoring */}
    <div className="absolute bottom-10 right-5 z-20 hidden w-[275px] rounded-2xl border border-white/40 bg-white/95 p-4 shadow-2xl backdrop-blur-xl md:block lg:right-10 xl:right-16">

      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
            <path d="M9 12l2 2 4-4" />
          </svg>

        </div>

        <div>

          <p className="text-xs text-gray-400">
            Security Monitoring
          </p>

          <div className="mt-1 flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <p className="font-semibold text-[#101828]">
              Protection Active
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      <section id="inquire-now">
        <InquirySection />
      </section>
    </main>
  );
}
