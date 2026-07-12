"use client";

import { useMemo, useState } from "react";
import useWalletAnalysis from "@/hooks/useWalletAnalysis";

function generateComparison(address: string) {
  const seed = address
    .toLowerCase()
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  const score = 600 + (seed % 401); // 600–1000
  const risk = Math.max(5, 100 - Math.floor(score / 10));

  let grade = "C";
  if (score >= 900) grade = "S";
  else if (score >= 850) grade = "A+";
  else if (score >= 800) grade = "A";
  else if (score >= 700) grade = "B";

  return { score, risk, grade };
}

export default function WalletComparison() {
  const analysis = useWalletAnalysis();

  const [address, setAddress] = useState("");

  const comparison = useMemo(() => {
    if (!address) return null;
    return generateComparison(address);
  }, [address]);

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-2xl font-bold text-white">
        Wallet Comparison
      </h2>

      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter another wallet address..."
        className="mt-6 w-full rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-white outline-none focus:border-cyan-500"
      />

      {!comparison && (
        <p className="mt-6 text-zinc-400">
          Enter a wallet address to compare.
        </p>
      )}

      {comparison && (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-zinc-950 p-6">
            <h3 className="text-lg font-semibold text-white">
              Your Wallet
            </h3>

            <p className="mt-4 text-white">
              Score: {analysis.score}
            </p>

            <p className="text-white">
              Grade: {analysis.grade}
            </p>

            <p className="text-white">
              Risk: {analysis.risk}%
            </p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-6">
            <h3 className="text-lg font-semibold text-white">
              Compared Wallet
            </h3>

            <p className="mt-4 text-white">
              Score: {comparison.score}
            </p>

            <p className="text-white">
              Grade: {comparison.grade}
            </p>

            <p className="text-white">
              Risk: {comparison.risk}%
            </p>
          </div>
        </div>
      )}

      {comparison && (
        <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-6">
          <h3 className="text-xl font-semibold text-white">
            Result
          </h3>

          {analysis.score >= comparison.score ? (
            <p className="mt-3 text-emerald-400">
              🎉 Your wallet leads by{" "}
              {analysis.score - comparison.score} points.
            </p>
          ) : (
            <p className="mt-3 text-yellow-400">
              The compared wallet leads by{" "}
              {comparison.score - analysis.score} points.
            </p>
          )}
        </div>
      )}
    </div>
  );
}