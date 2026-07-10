"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { getWalletData } from "@/services/walletData";

export default function useWalletData() {
  const { address, isConnected } = useAccount();

  const [loading, setLoading] = useState(false);

  const [wallet, setWallet] = useState<any>(null);

  useEffect(() => {
    if (!isConnected || !address) return;

    async function load() {
      setLoading(true);

      try {
        const data = await getWalletData(address);
        setWallet(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [address, isConnected]);

  return {
    wallet,
    loading,
  };
}