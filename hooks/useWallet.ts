"use client";

import { useAccount } from "wagmi";

export default function useWallet() {
  const account = useAccount();

  return {
    address: account.address,
    chain: account.chain,
    isConnected: account.isConnected,
  };
}