'use client';

import {
  ShieldCheck,
  Gauge,
  Network,
  Server,
  Clock3,
  UsersRound,
  CircleAlert,
  WifiOff,
  TriangleAlert,
  PowerOff,
  Activity,
  Maximize,
  ChartNoAxesCombined,
} from "lucide-react";

import ElectricBorder from '@/components/ElectricBorder';

const zSphereFeatures = [
  {
    title: "Dedicated Resources",
    description: "Never oversold or oversubscribed",
    icon: ShieldCheck,
  },
  {
    title: "High Performance",
    description: "Consistent speed, 24/7",
    icon: Gauge,
  },
  {
    title: "Low Latency",
    description: "Optimized network routing",
    icon: Network,
  },
  {
    title: "Enterprise Grade",
    description: "Premium hardware & NVMe storage",
    icon: Server,
  },
  {
    title: "99.9% Uptime",
    description: "Reliable. Always online.",
    icon: Clock3,
  },
];

const genericFeatures = [
  {
    title: "Oversold Resources",
    description: "Too many users per server",
    icon: UsersRound,
  },
  {
    title: "Slow Performance",
    description: "Lag and inconsistent speed",
    icon: CircleAlert,
  },
  {
    title: "High Latency",
    description: "Poor network optimization",
    icon: WifiOff,
  },
  {
    title: "Low Reliability",
    description: "Outdated hardware",
    icon: TriangleAlert,
  },
  {
    title: "Frequent Downtime",
    description: "Service interruptions",
    icon: PowerOff,
  },
];

const bottomFeatures = [
  {
    title: "No Overloading",
    description: "We limit users per server",
    icon: ShieldCheck,
  },
  {
    title: "Real-Time Monitoring",
    description: "24/7 server health monitoring",
    icon: Activity,
  },
  {
    title: "Instant Scaling",
    description: "Resources scale with your needs",
    icon: Maximize,
  },
  {
    title: "Peace of Mind",
    description: "Focus on your business",
    icon: ChartNoAxesCombined,
  },
];

function ServerFeatureCard({ feature, variant }) {
  const Icon = feature.icon;

  const isGreen = variant === "green";

  return (
    <div
      className={`group flex items-center gap-3 rounded-xl border px-4 py-3.5 backdrop-blur-sm transition-all duration-300 sm:gap-4 sm:px-5 ${
        isGreen
          ? "border-lime-400/60 bg-[#101828]/80 hover:border-lime-400 hover:bg-lime-400/5"
          : "border-red-500/60 bg-[#101828]/80 hover:border-red-500 hover:bg-red-500/5"
      }`}
    >
      {/* Icon */}
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border sm:h-11 sm:w-11 ${
          isGreen
            ? "border-lime-400/60 text-lime-400"
            : "border-red-500/60 text-red-500"
        }`}
      >
        <Icon size={21} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-white sm:text-base">
          {feature.title}
        </h3>

        <p className="mt-0.5 text-xs leading-relaxed text-gray-400 sm:text-sm">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function BottomFeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="flex items-center gap-4 px-5 py-5 lg:px-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-lime-400/60 text-lime-400">
        <Icon size={21} strokeWidth={1.8} />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          {feature.title}
        </h3>

        <p className="mt-1 text-xs text-gray-400 sm:text-sm">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function ServerPerformanceComparison() {
  return (
    <section
      id="server-performance"
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#02050a] via-[#050b14] to-[#030712] py-16 sm:py-20 lg:py-24"
    >
      {/* ================================
          MODERN BACKGROUND GLOW
      ================================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Blue glow - left */}
        <div
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]"
        />

        {/* Cyan glow - center */}
        <div
          className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]"
        />

        {/* Indigo glow - right */}
        <div
          className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-indigo-600/20 blur-[150px]"
        />

        {/* Subtle top highlight */}
        <div
          className="absolute inset-x-0 top-0 h-[300px] bg-gradient-to-b from-blue-500/5 to-transparent"
        />

        {/* Subtle bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-[250px] bg-gradient-to-t from-black/20 to-transparent"
        />
      </div>

      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">

        {/* ================================
            SECTION HEADING
        ================================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <ElectricBorder
            className="py-10"
            color="#00b3ce"
            speed={1}
            chaos={0.10}
            thickness={6}
            style={{ borderRadius: 16 }}
          >
            <div>
              <h2
                style={{ margin: "6px 0 0", opacity: 0.8 }}
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              >
                We Never Overload our Servers
              </h2>

              <p className="mt-3 text-sm text-gray-400 sm:text-base md:text-lg">
                High-performance hosting infrastructure powered by NVMe. No
                Compromises.
              </p>
            </div>
          </ElectricBorder>
        </div>


        {/* ================================
            SERVER COMPARISON
        ================================= */}
        <div className="grid items-center gap-12 lg:grid-cols-2 xl:grid-cols-[1fr_80px_1fr]">

          {/* ==============================
              ZSPHERE SERVERS
          =============================== */}
          <div>

            {/* Title */}
            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.8)]" />

              <h3 className="text-2xl font-bold text-lime-400 sm:text-3xl">
                ZSphere{" "}
                <span className="font-normal text-white">
                  Servers
                </span>
              </h3>
            </div>

            <div className="grid items-center gap-6 xl:grid-cols-2">

              {/* Server Image */}
              <div className="relative flex justify-center">
                <div className="absolute inset-10 rounded-full bg-lime-400/10 blur-3xl" />

                <img
                  src="/images/website/zsphere-server.png"
                  alt="ZSphere Server"
                  className="relative z-10 h-auto w-full max-w-[360px] object-contain"
                  loading="lazy"
                />
              </div>

              {/* Feature Cards */}
              <div className="space-y-3">
                {zSphereFeatures.map((feature) => (
                  <ServerFeatureCard
                    key={feature.title}
                    feature={feature}
                    variant="green"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ==============================
              VS
          =============================== */}
          <div className="hidden items-center justify-center xl:flex">
            <div className="flex flex-col items-center">

              <div className="h-20 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent" />

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-700 bg-[#101828]">
                <span className="text-sm font-bold text-gray-400">
                  VS
                </span>
              </div>

              <div className="h-20 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent" />

            </div>
          </div>

          {/* ==============================
              GENERIC SERVERS
          =============================== */}
          <div>

            {/* Title */}
            <div className="mb-7 flex items-center justify-center gap-3">
              <h3 className="text-2xl font-bold text-red-500 sm:text-3xl">
                Generic{" "}
                <span className="font-normal text-white">
                  Servers
                </span>
              </h3>

              <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
            </div>

            <div className="grid items-center gap-6 xl:grid-cols-2">

              {/* Feature Cards */}
              <div className="order-2 space-y-3 xl:order-1">
                {genericFeatures.map((feature) => (
                  <ServerFeatureCard
                    key={feature.title}
                    feature={feature}
                    variant="red"
                  />
                ))}
              </div>

              {/* Server Image */}
              <div className="relative order-1 flex justify-center xl:order-2">
                <div className="absolute inset-10 rounded-full bg-red-500/10 blur-3xl" />

                <img
                  src="/images/website/generic-server.png"
                  alt="Generic Server"
                  className="relative z-10 h-auto w-full max-w-[360px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================================
            MOBILE VS
        ================================= */}
        <div className="my-10 flex items-center gap-4 xl:hidden">
          <div className="h-px flex-1 bg-gray-700" />

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-700 bg-[#101828]">
            <span className="text-xs font-bold text-gray-500">
              VS
            </span>
          </div>

          <div className="h-px flex-1 bg-gray-700" />
        </div>

        {/* ================================
            BOTTOM FEATURES
        ================================= */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-gray-700/70 bg-[#0c1422]/80 backdrop-blur-sm sm:mt-20">
          <div className="grid grid-cols-1 divide-y divide-gray-700/60 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">

            {bottomFeatures.map((feature) => (
              <BottomFeatureCard
                key={feature.title}
                feature={feature}
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
