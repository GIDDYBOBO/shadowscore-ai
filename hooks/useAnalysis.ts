"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function useAnalysis() {
  const { isConnected } = useAccount();

  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      setLoading(false);
      setFinished(false);
      return;
    }

    setLoading(true);
    setFinished(false);

    const timer = setTimeout(() => {
      setLoading(false);
      setFinished(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, [isConnected]);

  return {
    loading,
    finished,
  };
}