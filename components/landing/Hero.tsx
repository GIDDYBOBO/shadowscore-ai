"use client";

import { motion } from "framer-motion";
import ConnectWallet from "@/components/wallet/ConnectWallet";
import WalletStatus from "@/components/wallet/WalletStatus";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

const dashboardRows = [
  { label: "Status", value: "Excellent" },
  { label: "AI Agent", value: "Online" },
  { label: "Risk Level", value: "Low" },
  { label: "Last Scan", value: "15 seconds ago" },
];

export default function Hero() {
  return (
    <section className="relative px-6 pb-32 pt-40 lg:px-8 lg:pb-40 lg:pt-48">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        {/* Left Side */}
        <div className="w-full max-w-xl text-center lg:max-w-lg lg:text-left">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 text-sm font-medium tracking-wide text-zinc-500"
          >
            Blockchain Reputation Intelligence
          </motion.p>

          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
          >
            The AI Agent
            <br />
            for Web3 Trust
          </motion.h1>

          <motion.div
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-10 max-w-xl space-y-4 lg:mx-0"
          >
            <p className="text-lg font-medium tracking-tight text-zinc-300 sm:text-xl">
              Monitor.
              <span className="text-zinc-500"> </span>
              Protect.
              <span className="text-zinc-500"> </span>
              Improve.
            </p>

            <p className="text-base leading-relaxed text-zinc-500 sm:text-lg">
              Know your blockchain reputation before everyone else.
            </p>
          </motion.div>

          <motion.div
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <div className="w-full sm:w-auto">
              <ConnectWallet />
            </div>

            <button
              type="button"
              className="w-full rounded-md border border-white/[0.12] bg-transparent px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/[0.2] hover:text-zinc-100 sm:w-auto"
            >
              View Demo
            </button>
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-full max-w-sm shrink-0"
        >
          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            {/* Wallet Header */}
            <div className="border-b border-white/[0.06] px-5 py-4">
              <div className="flex items-center justify-between">
                <WalletStatus />
              </div>
            </div>

            {/* Reputation Score */}
            <div className="px-5 py-5">
              <p className="text-xs font-medium tracking-wide text-zinc-500">
                Reputation Score
              </p>

              <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-semibold tracking-tight text-zinc-50">
                  842
                </span>
              </div>
            </div>

            {/* Dashboard Info */}
            <div className="border-t border-white/[0.06] px-5 py-4">
              <dl className="space-y-3">
                {dashboardRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between"
                  >
                    <dt className="text-xs text-zinc-500">
                      {row.label}
                    </dt>

                    <dd className="text-xs font-medium text-zinc-300">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}