import GridShape from "@/components/common/GridShape";
import Link from "next/link";
import { Wrench, Server, Clock } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0f172a] px-6">

      {/* Background */}
      <GridShape />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#101828] to-slate-900" />

      {/* Glow Effects */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Icon */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <Wrench className="h-14 w-14 text-blue-400" />
        </div>

        {/* Badge */}
        <div className="mt-8 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          🚧 Website Update In Progress
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Currently
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Under Maintenance
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          We're working behind the scenes to improve your experience.
          Our team is currently updating this section of the website with
          new features, enhancements, and content.
        </p>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <Server className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
            <h3 className="font-semibold text-white">
              Infrastructure Updates
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Improving performance, reliability, and security.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <Wrench className="mx-auto mb-4 h-10 w-10 text-blue-400" />
            <h3 className="font-semibold text-white">
              New Features
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Enhancing functionality and user experience.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <Clock className="mx-auto mb-4 h-10 w-10 text-indigo-400" />
            <h3 className="font-semibold text-white">
              Coming Soon
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              The updated page will be available shortly.
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            Return Home
          </Link>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
          >
            Contact Our Team
          </Link>

        </div>

        {/* Footer */}
        <p className="mt-16 text-sm text-slate-500">
          © {new Date().getFullYear()} ZSphere Technologies. All rights reserved.
        </p>

      </div>
    </div>
  );
}