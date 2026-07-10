"use client";

import { useAccount } from "wagmi";

export default function WalletStatus() {
  const { address, isConnected } = useAccount();

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/40 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500/80" />
        </span>

        <span className="text-xs font-medium text-zinc-400">
          {isConnected ? "Wallet Connected" : "No Wallet"}
        </span>
      </div>

      <span className="font-mono text-xs text-zinc-500">
        {isConnected && address
          ? `${address.slice(0, 6)}...${address.slice(-4)}`
          : "--"}
      </span>
    </>
  );
}