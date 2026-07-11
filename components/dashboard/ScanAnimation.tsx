"use client";

import useAnalysis from "@/hooks/useAnalysis";

const steps = [
  "Reading Wallet...",
  "Fetching Balance...",
  "Analyzing Reputation...",
  "Checking Security...",
  "Building AI Report...",
];

export default function ScanAnimation() {
  const { loading, finished } = useAnalysis();

  if (!loading && !finished) {
    return (
      <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
        <h2 className="text-xl font-bold text-white">
          Shadow Scanner
        </h2>

        <p className="mt-6 text-zinc-400">
          Connect your wallet to begin AI analysis.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">

      <h2 className="text-xl font-bold text-white">
        Shadow Scanner
      </h2>

      <div className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-3 text-cyan-400"
          >
            {finished ? "✅" : "⏳"}
            {step}
          </div>
        ))}
      </div>

      {finished && (
        <div className="mt-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-400">
          Analysis Completed Successfully
        </div>
      )}
    </div>
  );
}