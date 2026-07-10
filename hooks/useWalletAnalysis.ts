"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { analyzeWallet, WalletAnalysis } from "@/services/analyzer";

export default function useWalletAnalysis() {
  const { address, isConnected } = useAccount();

  const [loading, setLoading] = useState(false);

  const [analysis, setAnalysis] = useState<WalletAnalysis>({
    tokenCount: 0,
    nftCount: 0,
    score: 0,
    rating: "Unknown",
  });

  useEffect(() => {
    if (!isConnected || !address) return;

    async function load() {
      setLoading(true);

      try {
        const result = await analyzeWallet(address);
        setAnalysis(result);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }

    load();
  }, [address, isConnected]);

  return {
    loading,
    analysis,
  };
}