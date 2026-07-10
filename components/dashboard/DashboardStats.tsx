"use client";

import useWalletAnalysis from "@/hooks/useWalletAnalysis";
import useWalletData from "@/hooks/useWalletData";
import StatCard from "./StatCard";

export default function DashboardStats() {
  const { analysis } = useWalletAnalysis();
  const { wallet } = useWalletData();

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="ShadowScore"
        value={analysis.score}
        subtitle={analysis.rating}
      />

      <StatCard
        title="ETH Balance"
        value={`${wallet.ethBalance.toFixed(4)} ETH`}
      />

      <StatCard
        title="Tokens"
        value={wallet.tokenCount}
      />

      <StatCard
        title="NFTs"
        value={wallet.nftCount}
      />

    </div>
  );
}