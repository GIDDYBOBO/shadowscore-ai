"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { getTokenBalances } from "@/services/blockchain";

export default function usePortfolio() {
  const { address, isConnected } = useAccount();

  const [loading, setLoading] = useState(false);

  const [tokens, setTokens] = useState<any[]>([]);

  useEffect(() => {
    if (!isConnected || !address) return;

    async function load() {
      setLoading(true);

      try {
        const result = await getTokenBalances(address);
        setTokens(result);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }

    load();
  }, [address, isConnected]);

  return {
    loading,
    tokens,
  };
}