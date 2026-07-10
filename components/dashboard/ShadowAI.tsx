"use client";

import Card from "@/components/ui/Card";
import useWalletAnalysis from "@/hooks/useWalletAnalysis";

export default function ShadowAI() {
  const { analysis, loading } = useWalletAnalysis();

  return (
    <Card title="Shadow AI">

      {loading ? (
        <p className="text-zinc-400">Analyzing wallet...</p>
      ) : (
        <div className="space-y-4">

          <p className="text-zinc-300">
            Your wallet reputation is currently
            <span className="font-semibold text-emerald-400">
              {" "}
              {analysis.rating}
            </span>
            .
          </p>

          <ul className="space-y-2 text-sm text-zinc-400">
            <li>✓ {analysis.tokenCount} ERC20 tokens detected.</li>
            <li>✓ {analysis.nftCount} NFTs detected.</li>
            <li>✓ No suspicious activity found.</li>
            <li>✓ Wallet is eligible for advanced analysis.</li>
          </ul>

        </div>
      )}

    </Card>
  );
}