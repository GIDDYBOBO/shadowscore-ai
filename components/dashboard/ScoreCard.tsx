"use client";

import Card from "@/components/ui/Card";
import useWalletAnalysis from "@/hooks/useWalletAnalysis";

export default function ScoreCard() {
  const { analysis, loading } = useWalletAnalysis();

  return (
    <Card title="ShadowScore">
      <div className="space-y-5">

        <div>
          <h1 className="text-6xl font-bold text-white">
            {loading ? "--" : analysis.score}
          </h1>

          <p className="mt-2 text-emerald-400">
            {loading ? "Analyzing..." : analysis.rating}
          </p>
        </div>

        <div className="h-3 rounded-full bg-zinc-800">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
            style={{
              width: `${analysis.score / 10}%`,
            }}
          />
        </div>

      </div>
    </Card>
  );
}