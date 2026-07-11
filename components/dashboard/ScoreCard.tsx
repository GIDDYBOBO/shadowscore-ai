"use client";

import Gauge from "./Gauge";
import useReputation from "@/hooks/useReputation";

export default function ScoreCard() {
  const rep = useReputation();

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        ShadowScore
      </h2>

      <div className="mt-8 flex justify-center">
        <Gauge score={rep.score} />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div>
          <p className="text-zinc-500 text-sm">
            Grade
          </p>

          <p className="text-3xl font-bold text-cyan-400">
            {rep.grade}
          </p>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">
            Risk
          </p>

          <p className="text-3xl font-bold text-emerald-400">
            {rep.risk}%
          </p>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">
            Status
          </p>

          <p className="text-lg font-semibold text-white">
            {rep.status}
          </p>
        </div>
      </div>
    </div>
  );
}