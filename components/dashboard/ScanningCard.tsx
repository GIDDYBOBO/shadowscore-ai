"use client";

import { motion } from "framer-motion";

export default function ScanningCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-white text-xl font-semibold">
        Shadow AI
      </h2>

      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="mt-8"
      >
        <p className="text-zinc-400">
          Scanning blockchain...
        </p>
      </motion.div>
    </div>
  );
}