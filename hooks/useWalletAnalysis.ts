"use client";

import { useAccount, useBalance } from "wagmi";
import { analyzeWallet } from "@/services/walletAnalysis";

export default function useWalletAnalysis() {

  const { isConnected } = useAccount();

  const { data } = useBalance();

  const balance = Number(
    data?.formatted ?? 0
  );

  return analyzeWallet(
    balance,
    isConnected
  );
}