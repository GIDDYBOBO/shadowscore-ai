"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI Reputation",
    description:
      "Understand how your on-chain activity shapes your trust profile across protocols and communities.",
  },
  {
    title: "Risk Detection",
    description:
      "Surface anomalies and exposure patterns before they become reputational liabilities.",
  },
  {
    title: "Continuous Monitoring",
    description:
      "Always-on agents track wallet behavior, contract interactions, and signal changes in real time.",
  },
  {
    title: "Weekly Reports",
    description:
      "Curated summaries delivered to your inbox — actionable insights without the noise.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium tracking-wide text-zinc-500">
            Capabilities
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            Everything you need to stay ahead
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={item}
              className="group rounded-lg border border-white/[0.06] bg-zinc-900/40 p-8 transition-colors hover:border-white/[0.1] hover:bg-zinc-900/60"
            >
              <div className="mb-4 h-px w-8 bg-zinc-600 transition-colors group-hover:bg-zinc-400" />
              <h3 className="mb-3 text-base font-medium text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
