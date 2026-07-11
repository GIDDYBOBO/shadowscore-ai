"use client";

import useReputation from "@/hooks/useReputation";

export default function WalletHealth() {
  const rep = useReputation();

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">

      <h2 className="text-xl font-semibold text-white">
        Wallet Health
      </h2>

      <div className="mt-8 space-y-6">

        <div>
          <div className="flex justify-between">
            <span className="text-zinc-400">
              Reputation
            </span>

            <span className="text-white">
              {rep.score}/1000
            </span>
          </div>

          <div className="mt-2 h-3 rounded-full bg-zinc-800">

            <div
              className="h-full rounded-full bg-cyan-500 transition-all duration-1000"
              style={{
                width: `${rep.score / 10}%`,
              }}
            />

          </div>

        </div>

        <div>
          <div className="flex justify-between">
            <span className="text-zinc-400">
              Security
            </span>

            <span className="text-white">
              {100 - rep.risk}%
            </span>
          </div>

          <div className="mt-2 h-3 rounded-full bg-zinc-800">

            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-1000"
              style={{
                width: `${100 - rep.risk}%`,
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}