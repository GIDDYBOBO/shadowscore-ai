"use client";

import { useAccount } from "wagmi";

export default function Topbar() {
  const { address, chain } = useAccount();

  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-zinc-950 px-8 py-5">
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Dashboard
        </h2>

        <p className="text-sm text-zinc-500">
          AI-powered blockchain intelligence
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3">
        <p className="text-xs text-zinc-500">
          Connected Wallet
        </p>

        <p className="font-mono text-sm text-white">
          {address
            ? `${address.slice(0, 6)}...${address.slice(-4)}`
            : "Not Connected"}
        </p>

        <p className="text-xs text-emerald-400">
          {chain?.name ?? "--"}
        </p>
      </div>
    </header>
  );
}