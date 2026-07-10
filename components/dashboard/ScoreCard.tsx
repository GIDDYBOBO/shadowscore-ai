"use client";

import { useAccount } from "wagmi";

export default function ScoreCard() {
  const { isConnected } = useAccount();

  const score = isConnected ? 842 : "--";

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <p className="text-zinc-400">
        ShadowScore
      </p>

      <h1 className="mt-4 text-7xl font-bold text-white">
        {score}
      </h1>

      <p className="mt-3 text-zinc-500">
        {isConnected
          ? "Wallet successfully analyzed."
          : "Connect your wallet to begin analysis."}
      </p>
    </div>
  );
}