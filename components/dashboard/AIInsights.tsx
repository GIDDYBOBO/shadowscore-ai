"use client";

import useReputation from "@/hooks/useReputation";

export default function AIInsights() {
  const rep = useReputation();

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        AI Insights
      </h2>

      <div className="mt-6 space-y-4 text-zinc-300 leading-7">
        <p>
          Reputation Grade:{" "}
          <span className="text-cyan-400 font-semibold">
            {rep.grade}
          </span>
        </p>

        <p>
          Current Risk:{" "}
          <span className="text-emerald-400">
            {rep.risk}%
          </span>
        </p>

        <p>
          Overall Status:{" "}
          <span className="text-white">
            {rep.status}
          </span>
        </p>

        <div className="rounded-xl bg-zinc-950 p-4 border border-cyan-500/20">
          <p>
            Shadow AI recommends maintaining regular activity,
            avoiding risky contracts, and increasing wallet
            history to improve your reputation score.
          </p>
        </div>
      </div>
    </div>
  );
}