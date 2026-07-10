"use client";

import { useAccount, useBalance } from "wagmi";

export default function useWalletBalance() {
  const { address } = useAccount();

  const balance = useBalance({
    address,
  });

  return balance;
}