"use client";

import useWalletAnalysis from "@/hooks/useWalletAnalysis";

export default function ReputationBadge() {
  const analysis = useWalletAnalysis();

  let badge = "Explorer";
  let color = "text-zinc-400";
  let bg = "bg-zinc-800";

  if (analysis.score >= 900) {
    badge = "Legend";
    color = "text-yellow-400";
    bg = "bg-yellow-500/10";
  } else if (analysis.score >= 800) {
    badge = "Trusted";
    color = "text-cyan-400";
    bg = "bg-cyan-500/10";
  } else if (analysis.score >= 700) {
    badge = "Verified";
    color = "text-emerald-400";
    bg = "bg-emerald-500/10";
  } else if (analysis.score >= 600) {
    badge = "Growing";
    color = "text-blue-400";
    bg = "bg-blue-500/10";
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        Reputation Badge
      </h2>

      <div className={`mt-8 rounded-2xl ${bg} p-8 text-center`}>
        <div className="text-6xl">🏆</div>

        <h3 className={`mt-4 text-3xl font-bold ${color}`}>
          {badge}
        </h3>

        <p className="mt-2 text-zinc-400">
          Wallet Grade {analysis.grade}
        </p>

        <div className="mt-6 text-5xl font-bold text-white">
          {analysis.score}
        </div>

        <p className="text-zinc-500">
          Reputation Score
        </p>
      </div>
    </div>
  );
}