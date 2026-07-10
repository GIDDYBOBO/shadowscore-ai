"use client";

import { Sparkles } from "lucide-react";

export default function AIInsights() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
      <div className="mb-6 flex items-center gap-3">
        <Sparkles className="text-violet-400" />

        <h2 className="text-xl font-semibold text-white">
          AI Insights
        </h2>
      </div>

      <div className="space-y-4 text-sm leading-7 text-zinc-400">
        <p>
          ✓ Wallet has never interacted with known scam
          contracts.
        </p>

        <p>
          ✓ Excellent DeFi participation history.
        </p>

        <p>
          ✓ Portfolio appears diversified.
        </p>

        <p>
          ⚠ Two inactive token approvals detected.
        </p>
      </div>
    </div>
  );
}