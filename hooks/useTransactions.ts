"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function useTransactions() {
  const { address } = useAccount();

  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!address) {
      setTransactions([]);
      return;
    }

    async function load() {
      setLoading(true);

      try {
        const res = await fetch(
          `/api/transactions?address=${address}`
        );

        const data = await res.json();

        console.log("Transactions API:", data);

        if (Array.isArray(data)) {
          setTransactions(data);
        } else {
          setTransactions([]);
        }
      } catch (error) {
        console.error(error);
        setTransactions([]);
      }

      setLoading(false);
    }

    load();
  }, [address]);

  return {
    transactions,
    loading,
  };
}