"use client";

import { useAccount, useBalance } from "wagmi";
import { calculateReputation } from "@/lib/reputation";

export default function useReputation() {
  const { isConnected } = useAccount();

  const { data } = useBalance();

  const balance = Number(data?.formatted ?? 0);

  const reputation = calculateReputation(
    isConnected,
    balance
  );

  return {
    balance,
    ...reputation,
  };
}