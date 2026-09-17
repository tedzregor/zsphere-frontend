'use client'

import { useState } from "react";
import TextType from '@/components/website/TextType';
import LogoLoop from '@/components/LogoLoop';
import GradientText from '@/components/GradientText';
import DriftWall from '@/components/DriftWall';
import InquirySection from "@/components/website/InquirySection";
import PricingInquiryModal from "@/components/website/PricingInquiryModal";

import Image from "next/image";

import ServerPerformanceComparison from '@/components/website/ServerPerformanceComparison';
import Link from "next/link";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

import {
  FaComments,
  FaLaptopCode,
  FaCloudUploadAlt,
  FaFacebookMessenger
} from 'react-icons/fa';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/images/website/wordpress-logo.png", alt: "Wordpress Hosting" },
  { src: "/images/website/shopify-logo.png", alt: "Shopify Hosting" },
  { src: "/images/website/prestashop-logo.png", alt: "Prestashop Hosting" },
  { src: "/images/website/magento-logo.png", alt: "Magento Hosting" },
  { src: "/images/website/laravel-logo.png", alt: "PHP Laravel Hosting" },
  { src: "/images/website/nextjs-logo.png", alt: "NextJS Hosting" },
  { src: "/images/website/vuejs-logo.png", alt: "VueJS Hosting" },
  { src: "/images/website/mysql-logo.png", alt: "MySQL Hosting" },
  { src: "/images/website/ubuntu-logo.png", alt: "Ubuntu Server Hosting" },
  { src: "/images/website/cpanel-logo.png", alt: "Cpanel Hosting" },
];

const driftwall_items = [
  { image: '/images/website/real-estate-website.png', title: 'Falls' },
  { image: '/images/website/spa-website.png', title: 'Falls' },
  { image: '/images/website/construction-website.png', title: 'Falls' },
  { image: '/images/website/zsphere-website.png', title: 'Falls' },
  
  { image: '/images/website/pharmacy-website.png', title: 'Falls' },
  { image: '/images/website/catering-website.png', title: 'Peaks' },
  { image: '/images/website/law-firm-website.png', title: 'Peaks' },
  { image: '/images/website/zsphere-website-admin.png', title: 'Falls' },

  { image: '/images/website/dental-clinic-website.png', title: 'Peaks' },
  { image: '/images/website/pamico-website.png', title: 'Peaks' },
  { image: '/images/website/travel-and-tour-website.jpg', title: 'Falls' },
  { image: '/images/website/spa-website.png', title: 'Falls' },

  { image: '/images/website/zsphere-website.png', title: 'Peaks' },
  { image: '/images/website/construction-website.png', title: 'Falls' },
  { image: '/images/website/dental-clinic-website.png', title: 'Peaks' },
  { image: '/images/website/pamico-website.png', title: 'Peaks' },

  { image: '/images/website/restaurant-website.png', title: 'Peaks' },
  { image: '/images/website/real-estate-website.png', title: 'Falls' },
  { image: '/images/website/e-commerce-website.png', title: 'Falls' },
  { image: '/images/website/salon-website.png', title: 'Peaks' },

  { image: '/images/website/zsphere-website-admin-night.png', title: 'Falls' },
  { image: '/images/website/medical-website.png', title: 'Falls' },
  { image: '/images/website/hotel-website.png', title: 'Falls' },
  { image: '/images/website/school-website.png', title: 'Peaks' },
  
  { image: '/images/website/gym-website.png', title: 'Peaks' },
  { image: '/images/website/financial-services-website.png', title: 'Falls' },
  { image: '/images/website/event-website.png', title: 'Falls' },
  { image: '/images/website/catering-website.png', title: 'Peaks' },
];

export default function HomePage() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleBuyNow = (service: string, price: string) => {
    setSelectedService(service);
    setSelectedPrice(price);
    setIsModalOpen(true);
  };

  const { t, language, setLanguage } = useLanguage();

  return (
    <main>
      {/* Floating Messenger Button */}
      <a
        href="https://www.facebook.com/profile.php?id=61576194366880"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on Facebook"
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#0084FF]
          text-white
          shadow-[0_10px_30px_rgba(0,132,255,0.45)]
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-[0_15px_40px_rgba(0,132,255,0.65)]
        "
      >
        <FaFacebookMessenger className="text-4xl" />
      </a>

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

          {/* Language Selector */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-1">
              {/* English */}
              <button
                type="button"
                onClick={() => setLanguage("EN")}
                aria-label="English"
                className={`
                  flex h-10 w-12 items-center justify-center
                  rounded-md transition-all duration-200
                  ${language === "EN" ? "bg-white/15" : "hover:bg-white/10"}
                `}
              >
                <span className="text-2xl">🇺🇸</span>
              </button>

              {/* Horizontal Divider */}
              <div className="h-[2px] w-8 bg-white/60" />

              {/* Filipino */}
              <button
                type="button"
                onClick={() => setLanguage("TL")}
                aria-label="Filipino"
                className={`
                  flex h-10 w-12 items-center justify-center
                  rounded-md transition-all duration-200
                  ${language === "TL" ? "bg-white/15" : "hover:bg-white/10"}
                `}
              >
                <span className="text-2xl">🇵🇭</span>
              </button>

              {/* Horizontal Divider */}
              <div className="h-[2px] w-8 bg-white/60" />

              {/* Korean */}
              <button
                type="button"
                onClick={() => setLanguage("KO")}
                aria-label="Korean"
                className={`
                  flex h-10 w-12 items-center justify-center
                  rounded-md transition-all duration-200
                  ${language === "KO" ? "bg-white/15" : "hover:bg-white/10"}
                `}
              >
                <span className="text-2xl">🇰🇷</span>
              </button>

              {/* Horizontal Divider */}
              <div className="h-[2px] w-8 bg-white/60" />

              {/* Japanese */}
              <button
                type="button"
                onClick={() => setLanguage("JA")}
                aria-label="Japanese"
                className={`
                  flex h-10 w-12 items-center justify-center
                  rounded-md transition-all duration-200
                  ${language === "JA" ? "bg-white/15" : "hover:bg-white/10"}
                `}
              >
                <span className="text-2xl">🇯🇵</span>
              </button>
            </div>
          </div>
            
          <GradientText
            colors={["#0085fa", "#ffffff" ,"#a7f8f4"]}
            animationSpeed={11}
            showBorder={false}
            className="custom-class" 
          >
        {t("hero.title")}
          </GradientText>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#website-pricing"
              // href="/contact"
              className="rounded-md bg-white px-8 py-2 text-lg font-semibold text-black transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
            >
              {t("hero.get_started")}
            </a>

            {/* <a
              href="#inquire-now"
              // href="/pricing"
              className="rounded-md border border-white bg-transparent px-8 py-2 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg"
            >
              Get Started
            </a> */}
          </div>
      
          <TextType
            className="mt-4 text-lg md:text-4xl"
            text={[
              t("hero.paragraph_1"),
              t("hero.paragraph_2"),
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

      <section id="services" className="relative z-20 -mt-[21vh] px-6 pb-5">
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
                {t("services.title_1")}
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                {t("services.description_1")}
              </p>

              <div className="mt-auto pt-6">
                <Link
                  href="#website-pricing"
                  className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  <span>{t("services.view_pricing")}</span>
                  <ArrowRight
                    size={24}
                    strokeWidth={2.5}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                  />
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
                {t("services.title_2")}
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                {t("services.description_2")}
              </p>

              <div className="mt-auto pt-6">
                <Link
                  href="#hosting-pricing"
                  // href={`/contact?service=${encodeURIComponent("Shared Cloud Hosting")}`}
                   className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  {t("services.view_pricing")}
                  <ArrowRight
                    size={24}
                    strokeWidth={2.5}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                  />
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
                {t("services.title_3")}
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                {t("services.description_3")}
              </p>

              <div className="mt-auto pt-6">
                {/* Button */}
                <button
                  type="button"
                  onClick={() =>
                    handleBuyNow("Dedicated Cloud Server", "Custom")
                  }
                  className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  {t("services.inquire_now")}

                  <ArrowRight
                    size={24}
                    strokeWidth={2.5}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                  />
                </button>
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
                {t("services.title_4")}
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                {t("services.description_4")}
              </p>

              <div className="mt-auto pt-6">
                {/* Button */}
                <button
                  type="button"
                  onClick={() =>
                    handleBuyNow("Digital Advertising & Marketing", "--")
                  }
                  className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  {t("services.inquire_now")}

                  <ArrowRight
                    size={24}
                    strokeWidth={2.5}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                  />
                </button>
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
                {t("services.title_5")}
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                {t("services.description_5")}
              </p>
              <div className="mt-auto pt-6">
                {/* Button */}
                <button
                  type="button"
                  onClick={() =>
                    handleBuyNow("Point Of Sale (POS)", "--")
                  }
                  className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  {t("services.inquire_now")}

                  <ArrowRight
                    size={24}
                    strokeWidth={2.5}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                  />
                </button>
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
                {t("services.title_6")}
              </h3>

              <p className="flex-1 leading-relaxed text-gray-600">
                {t("services.description_6")}
              </p>
              
              <div className="mt-6">
              {/* Button */}
                <button
                  type="button"
                  onClick={() =>
                    handleBuyNow("Branding & Design", "--")
                  }
                  className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  {t("services.inquire_now")}

                  <ArrowRight
                    size={24}
                    strokeWidth={2.5}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '150px', position: 'relative', overflow: 'hidden', marginTop: '4rem' }}>
          <LogoLoop
            logos={imageLogos}
            speed={30}
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
            speed={70}
          />
        </div>
      </section>

      {/* PRICING */}
        <section id="website-pricing" className=" relative z-20 overflow-hidden bg-[#f8fcff]px-6 py-15">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

            {/* Top-left blue glow */}
            <div
              className="
                absolute -left-[180px] -top-[180px]
                h-[500px] w-[500px]
                rounded-full
                bg-blue-200/45
                blur-[90px]
              "
            />

            {/* Top-right blue glow */}
            <div
              className="
                absolute -right-[180px] -top-[100px]
                h-[450px] w-[450px]
                rounded-full
                bg-sky-200/35
                blur-[100px]
              "
            />

            {/* Center soft glow */}
            <div
              className="
                absolute left-1/2 top-[35%]
                h-[500px] w-[700px]
                -translate-x-1/2
                rounded-full
                bg-white
                blur-[100px]
              "
            />

            {/* Bottom-left blue glow */}
            <div
              className="
                absolute -left-[200px] bottom-[-150px]
                h-[500px] w-[600px]
                rounded-full
                bg-sky-200/40
                blur-[100px]
              "
            />

            {/* Bottom-right blue glow */}
            <div
              className="
                absolute -right-[180px] bottom-[-180px]
                h-[550px] w-[550px]
                rounded-full
                bg-blue-300/35
                blur-[110px]
              "
            />

            {/* Flowing wave */}
            <svg
              className="absolute left-0 top-[80px] h-[300px] w-full opacity-30"
              viewBox="0 0 1440 300"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M0,180
                  C180,280 280,40 500,120
                  C700,200 780,260 980,150
                  C1150,60 1280,40 1440,100
                "
                fill="none"
                stroke="white"
                strokeWidth="3"
              />

              <path
                d="
                  M0,195
                  C180,295 280,55 500,135
                  C700,215 780,275 980,165
                  C1150,75 1280,55 1440,115
                "
                fill="none"
                stroke="#bfdbfe"
                strokeWidth="2"
              />

              <path
                d="
                  M0,210
                  C180,310 280,70 500,150
                  C700,230 780,290 980,180
                  C1150,90 1280,70 1440,130
                "
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>

            {/* Bottom flowing wave */}
            <svg
              className="absolute bottom-[-20px] left-0 h-[280px] w-full opacity-25"
              viewBox="0 0 1440 280"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M0,180
                  C200,80 300,250 520,170
                  C730,90 850,60 1050,170
                  C1210,260 1320,220 1440,140
                "
                fill="none"
                stroke="#93c5fd"
                strokeWidth="4"
              />

              <path
                d="
                  M0,195
                  C200,95 300,265 520,185
                  C730,105 850,75 1050,185
                  C1210,275 1320,235 1440,155
                "
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        <div className="mx-auto max-w-7xl">
        
          {/* Section Heading */}
          <div className="mx-auto mb-6 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              {t("web_pricing.title")}
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#101828] md:text-5xl">
               {t("web_pricing.paragraph_1")}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
              {t("web_pricing.paragraph_2")}
            </p>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-blue-500" />
          </div>

          {/* Pricing Cards */}
          <div className="grid items-stretch gap-6 lg:grid-cols-3">

            {/* STANDARD WEBSITE */}
            <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div>
                <h3 className="text-2xl font-bold text-[#101828]">
                  {t("web_pricing.plans.standard_title")}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-500">
                   {t("web_pricing.plans.standard_description")}
                </p>
              </div>

              {/* Price */}
              <div className="mt-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight text-[#101828]">
                    {t("web_pricing.plans.standard_price")}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-400">
                  {t("web_pricing.plans.standard_note")}
                </p>
              </div>

              {/* Button */}
              <button
                  type="button"
                  onClick={() =>
                    handleBuyNow(t("web_pricing.plans.standard_title"), t("web_pricing.plans.standard_price"))
                  }
                  className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  {t("web_pricing.plans.standard_buy_button")}

                  <ArrowRight
                    size={24}
                    strokeWidth={2.5}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                  />
                </button>

              <div className="my-7 h-px bg-gray-200" />

              <p className="mb-5 text-sm font-semibold text-[#101828]">
                {t("web_pricing.plans.standard_whats_included")}
              </p>

              {/* Features */}
              <ul className="space-y-3 text-sm text-gray-600">

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                 {t("web_pricing.plans.standard_included_1")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_2")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_3")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_4")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_5")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_6")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_7")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_8")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_9")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_10")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_11")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_12")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                   {t("web_pricing.plans.standard_included_13")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                   {t("web_pricing.plans.standard_included_14")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_15")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                   {t("web_pricing.plans.standard_included_16")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.standard_included_17")}
                </li>

              </ul>
            </div>


            {/* E-COMMERCE WEBSITE - FEATURED */}
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#101828] p-7 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2">

              {/* Featured Badge */}
              <div className="absolute right-5 top-5">
                <span className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                  {t("web_pricing.plans.most_popular")}
                </span>
              </div>

              <div>
                <h3 className="pr-28 text-2xl font-bold">
                  {t("web_pricing.plans.ecom_title")}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-300">
                 {t("web_pricing.plans.ecom_description")}
                </p>
              </div>

              {/* Price */}
              <div className="mt-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                   {t("web_pricing.plans.ecom_price")}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-400">
                  {t("web_pricing.plans.ecom_note")}
                </p>
              </div>
             
              {/* Button */}
              <button
                  type="button"
                  onClick={() =>
                    handleBuyNow(t("web_pricing.plans.ecom_title"), t("web_pricing.plans.ecom_price"))
                  }
                  className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                  {t("web_pricing.plans.ecom_buy_button")}

                  <ArrowRight
                    size={24}
                    strokeWidth={2.5}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                  />
                </button>

              <div className="my-7 h-px bg-white/10" />

              <p className="mb-5 text-sm font-semibold text-white">
                {t("web_pricing.plans.ecom_whats_included")}
              </p>

              {/* Features */}
              <ul className="space-y-3 text-sm text-gray-300">

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_1")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_2")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_3")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_4")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_5")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_6")}
                </li>

                <li className="mt-4 border-t border-white/10 pt-4 font-semibold text-white">
                  {t("web_pricing.plans.ecom_included_features")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_7")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_8")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_9")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_10")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_11")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_12")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_13")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_14")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_15")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_16")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_17")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_18")}
                </li>

                <li className="mt-4 border-t border-white/10 pt-4">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_19")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_20")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_21")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                 
                  {t("web_pricing.plans.ecom_included_free_domain")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_22")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_23")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                   {t("web_pricing.plans.ecom_included_24")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                   {t("web_pricing.plans.ecom_included_25")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-blue-400">✓</span>
                  {t("web_pricing.plans.ecom_included_26")}
                </li>
            
              </ul>

              {/* Why this plan */}
              <div className="mt-7 rounded-xl bg-white/5 p-4">
                <p className="text-xs font-semibold text-blue-400">
                   {t("web_pricing.plans.why_this_plan")}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                   {t("web_pricing.plans.why_this_plan_answer")}
                </p>
              </div>

            </div>

            {/* CUSTOMIZED PREMIUM WEBSITE */}
            <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div>
                <h3 className="text-2xl font-bold text-[#101828]">
                 {t("web_pricing.plans.custom_title")}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-500">
                   {t("web_pricing.plans.custom_description")}
                </p>
              </div>

              {/* Price */}
              <div className="mt-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight text-[#101828]">
                     {t("web_pricing.plans.custom_price")}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-400">
                  {t("web_pricing.plans.custom_notes")}
                </p>
              </div>

              {/* Button */}
              <button
                  type="button"
                  onClick={() =>
                    handleBuyNow("Customized Premium Website", "Custom")
                  }
                  className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                >
                   {t("web_pricing.plans.custom_buy_button")}

                  <ArrowRight
                    size={24}
                    strokeWidth={2.5}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                  />
                </button>

              <div className="my-7 h-px bg-gray-200" />

              <p className="mb-5 text-sm font-semibold text-[#101828]">
                {t("web_pricing.plans.custom_whats_included")}
              </p>

              <ul className="space-y-3 text-sm text-gray-600">

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                 {t("web_pricing.plans.custom_included_1")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_2")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_3")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_4")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_5")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_6")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_7")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_8")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_9")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_10")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_11")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_12")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_13")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_14")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_15")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_16")}
                </li>

                <li className="flex gap-3">
                  <span className="font-semibold text-green-500">✓</span>
                  {t("web_pricing.plans.custom_included_17")}
                </li>

              </ul>

            </div>

          </div>

          {/* Pricing Note */}
          <p className="mt-8 text-center text-xs text-gray-400">
            {t("web_pricing.plans.web_pricing_notes")}
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
      <section id="hosting-pricing" className="mt-0 w-full relative z-20 overflow-hidden bg-[#f8fcff]px-6 py-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

          {/* Top-left blue glow */}
          <div
            className="
              absolute -left-[180px] -top-[180px]
              h-[500px] w-[500px]
              rounded-full
              bg-blue-200/45
              blur-[90px]
            "
          />

          {/* Top-right blue glow */}
          <div
            className="
              absolute -right-[180px] -top-[100px]
              h-[450px] w-[450px]
              rounded-full
              bg-sky-200/35
              blur-[100px]
            "
          />

          {/* Center soft glow */}
          <div
            className="
              absolute left-1/2 top-[35%]
              h-[500px] w-[700px]
              -translate-x-1/2
              rounded-full
              bg-white
              blur-[100px]
            "
          />

          {/* Bottom-left blue glow */}
          <div
            className="
              absolute -left-[200px] bottom-[-150px]
              h-[500px] w-[600px]
              rounded-full
              bg-sky-200/40
              blur-[100px]
            "
          />

          {/* Bottom-right blue glow */}
          <div
            className="
              absolute -right-[180px] bottom-[-180px]
              h-[550px] w-[550px]
              rounded-full
              bg-blue-300/35
              blur-[110px]
            "
          />

          {/* Flowing wave */}
          <svg
            className="absolute left-0 top-[80px] h-[300px] w-full opacity-30"
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0,180
                C180,280 280,40 500,120
                C700,200 780,260 980,150
                C1150,60 1280,40 1440,100
              "
              fill="none"
              stroke="white"
              strokeWidth="3"
            />

            <path
              d="
                M0,195
                C180,295 280,55 500,135
                C700,215 780,275 980,165
                C1150,75 1280,55 1440,115
              "
              fill="none"
              stroke="#bfdbfe"
              strokeWidth="2"
            />

            <path
              d="
                M0,210
                C180,310 280,70 500,150
                C700,230 780,290 980,180
                C1150,90 1280,70 1440,130
              "
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>

          {/* Bottom flowing wave */}
          <svg
            className="absolute bottom-[-20px] left-0 h-[280px] w-full opacity-25"
            viewBox="0 0 1440 280"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0,180
                C200,80 300,250 520,170
                C730,90 850,60 1050,170
                C1210,260 1320,220 1440,140
              "
              fill="none"
              stroke="#93c5fd"
              strokeWidth="4"
            />

            <path
              d="
                M0,195
                C200,95 300,265 520,185
                C730,105 850,75 1050,185
                C1210,275 1320,235 1440,155
              "
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="mt-0 mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            {t("hosting_pricing.title")}
          </p>

        <h2 className="text-3xl font-bold tracking-tight text-[#101828] md:text-5xl">
          {t("hosting_pricing.paragraph_1")}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
          {t("hosting_pricing.paragraph_2")}
        </p>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-blue-500" /></div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* BASIC SHARED CLOUD */}
          <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-2xl font-bold text-[#101828]">
              {t("hosting_pricing.plans.basic_shared_title")}
            </h3>

            <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-500">
              {t("hosting_pricing.plans.basic_shared_description")}
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-[#101828]">
                {t("hosting_pricing.plans.basic_shared_price")}
              </span>

              <p className="mt-1 text-sm text-gray-400">
                {t("hosting_pricing.plans.basic_shared_note")}
              </p>
            </div>

            {/* Button */}
            <button
                type="button"
                onClick={() =>
                  handleBuyNow(t("hosting_pricing.plans.basic_shared_title"), t("hosting_pricing.plans.basic_shared_price"))
                }
                className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
              >
                {t("hosting_pricing.plans.basic_shared_buy_button")}

                <ArrowRight
                  size={24}
                  strokeWidth={2.5}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                />
              </button>

            <div className="my-7 h-px bg-gray-200" />

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.basic_shared_included_1")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.basic_shared_included_2")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.basic_shared_included_3")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.basic_shared_included_4")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.basic_shared_included_5")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.basic_shared_included_6")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.basic_shared_included_7")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.basic_shared_included_8")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.basic_shared_included_9")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.basic_shared_included_10")}</li>
            </ul>

          </div>

          {/* BUSINESS SHARED CLOUD */}
          <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#101828] p-7 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2">

            <div className="absolute right-5 top-5">
              <span className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                {t("hosting_pricing.plans.most_popular")}
              </span>
            </div>

            <h3 className="pr-24 text-2xl font-bold">
              {t("hosting_pricing.plans.business_shared_title")}
            </h3>

            <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-300">
              {t("hosting_pricing.plans.business_shared_description")}
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold">
                {t("hosting_pricing.plans.business_shared_price")}
              </span>

              <p className="mt-1 text-sm text-gray-400">
                {t("hosting_pricing.plans.business_shared_note")}
              </p>
            </div>

            {/* Button */}
            <button
                type="button"
                onClick={() =>
                  handleBuyNow(t("hosting_pricing.plans.business_shared_title"), t("hosting_pricing.plans.business_shared_price"))
                }
                className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
              >
                {t("hosting_pricing.plans.business_shared_buy_button")}

                <ArrowRight
                  size={24}
                  strokeWidth={2.5}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                />
              </button>

            <div className="my-7 h-px bg-white/10" />

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-3"><span className="text-blue-400">✓</span>{t("hosting_pricing.plans.business_shared_included_1")}</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>{t("hosting_pricing.plans.business_shared_included_2")}</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>{t("hosting_pricing.plans.business_shared_included_3")}</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>{t("hosting_pricing.plans.business_shared_included_4")}</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>{t("hosting_pricing.plans.business_shared_included_5")}</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>{t("hosting_pricing.plans.business_shared_included_6")}</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>{t("hosting_pricing.plans.business_shared_included_7")}</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>{t("hosting_pricing.plans.business_shared_included_8")}</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>{t("hosting_pricing.plans.business_shared_included_9")}</li>
              <li className="flex gap-3"><span className="text-blue-400">✓</span>{t("hosting_pricing.plans.business_shared_included_10")}</li>
            </ul>

          </div>

          {/* STARTUP SHARED CLOUD */}
          <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-2xl font-bold text-[#101828]">
              {t("hosting_pricing.plans.premium_shared_title")}
            </h3>

            <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-500">
              {t("hosting_pricing.plans.premium_shared_description")}
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-[#101828]">
                {t("hosting_pricing.plans.premium_shared_price")}
              </span>

              <p className="mt-1 text-sm text-gray-400">
                {t("hosting_pricing.plans.premium_shared_note")}
              </p>
            </div>

            {/* Button */}
            <button
                type="button"
                onClick={() =>
                  handleBuyNow(t("hosting_pricing.plans.premium_shared_title"), t("hosting_pricing.plans.premium_shared_price"))
                }
                className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
              >
                {t("hosting_pricing.plans.premium_shared_buy_button")}

                <ArrowRight
                  size={24}
                  strokeWidth={2.5}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
                />
              </button>

            <div className="my-7 h-px bg-gray-200" />

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.premium_shared_included_1")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.premium_shared_included_2")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.premium_shared_included_3")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.premium_shared_included_4")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.premium_shared_included_5")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.premium_shared_included_6")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.premium_shared_included_7")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.premium_shared_included_8")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.premium_shared_included_9")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.premium_shared_included_10")}</li>
              <li className="flex gap-3"><span className="text-green-500">✓</span>{t("hosting_pricing.plans.premium_shared_included_11")}</li>
            </ul>

          </div>

          {/* DEDICATED CLOUD SERVER */}
          <div className="group flex h-full flex-col rounded-2xl border-2 border-indigo-500 bg-gradient-to-b from-indigo-50 to-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-2xl font-bold text-[#101828]">
              {t("hosting_pricing.plans.dedicated_title")}
            </h3>

            <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-gray-500">
              {t("hosting_pricing.plans.dedicated_description")}
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-[#101828]">
                {t("hosting_pricing.plans.dedicated_price")}
              </span>

              <p className="mt-1 text-sm text-gray-400">
                {t("hosting_pricing.plans.dedicated_price")}
              </p>
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() =>
                handleBuyNow(t("hosting_pricing.plans.dedicated_title"), t("hosting_pricing.plans.dedicated_price"))
              }
              className="group flex w-full items-center justify-center gap-1 bg-linear-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
            >
              {t("hosting_pricing.plans.dedicated_buy_button")}

              <ArrowRight
                size={24}
                strokeWidth={2.5}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-3"
              />
            </button>

            <div className="my-7 h-px bg-gray-200" />

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_1")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_2")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_3")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_4")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_5")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_6")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_7")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_8")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_9")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_10")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_11")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_12")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_13")}</li>
              <li className="flex gap-3"><span className="text-indigo-500">✓</span>{t("hosting_pricing.plans.dedicated_included_14")}</li>
            </ul>
          </div>
        </div>

        <PricingInquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={selectedService}
          price={selectedPrice}
        />

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

      {/* Web Development Process */}
      <section className="mt-0 w-full bg-[#101828] px-6 py-14">
        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="mb-10 text-center text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
               {t("development_process.title")}
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              {t("development_process.paragraph")}
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
                   {t("development_process.consultation")}
                </h3>

                <p className="mx-auto max-w-xs leading-relaxed text-gray-400">
                   {t("development_process.consultation_description")}
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
                  {t("development_process.development")}
                </h3>

                <p className="mx-auto max-w-xs leading-relaxed text-gray-400">
                  {t("development_process.development_description")}
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
                  {t("development_process.deployment")}
                </h3>

                <p className="mx-auto max-w-xs leading-relaxed text-gray-400">
                  {t("development_process.deployment_description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 520 }}>
          <DriftWall
              items={driftwall_items}
              columns={3}
              tileWidth={450}
              tileHeight={300}
              gap={18}
              tilt={22}
              turn={0}
              perspective={1200}
              depth={120}
              speed={30}
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

      {/* Server Performance Comparison */}
      <section id="zsphere-server" className="w-full overflow-hidden bg-blue-50">
        <ServerPerformanceComparison />
      </section>

      {/* =========================================================
          ZCARE+ SUPPORT & MAINTENANCE
      ========================================================= */}
      <section id="zcare-support" className="relative w-full overflow-hidden">

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
                {t("support.title")}
              </span>

            </div>


            {/* Heading */}
            <h2 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-[#101828] sm:text-5xl xl:text-6xl">

              {t("support.paragraph_1")}

              <span className="block text-blue-600">
                {t("support.paragraph_1_1")}
              </span>

            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
               {t("support.paragraph_2")}
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
                    {t("support.proactive_monitoring")}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-gray-500">
                    {t("support.proactive_monitoring_para")}
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
                     {t("support.priority_technical_support")}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-gray-500">
                    {t("support.priority_technical_support_para")}
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
                    {t("support.routine_maintenance")}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-gray-500">
                    {t("support.routine_maintenance_para")}
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
                    {t("support.enhanced_security")}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-gray-500">
                    {t("support.enhanced_security_para")}
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
                    {t("support.backup_recovery")}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-gray-500">
                    {t("support.backup_recovery_para")}
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
                    {t("support.reduced_costs")}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-gray-500">
                    {t("support.reduced_costs_para")}
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
                    {t("support.focus_growing")}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {t("support.focus_growing_para")}
                  </p>

                </div>


                <div className="border-t border-gray-200 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">

                  <p className="mb-2 text-xs font-semibold text-gray-400">
                    {t("support.included_with")}
                  </p>

                  <div className="space-y-1.5 text-sm text-gray-600">

                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span>
                      {t("support.included_premium")}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span>
                       {t("support.included_dedicated")}
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
                  {t("support.system_status")}
                </p>

                <p className="mt-1 font-semibold text-[#101828]">
                  {t("support.system_status_para")}
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
                  {t("support.security_monitoring")}
                </p>

                <div className="mt-1 flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-emerald-500" />

                  <p className="font-semibold text-[#101828]">
                    {t("support.protection_active")}
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
