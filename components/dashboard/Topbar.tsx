"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Topbar() {
  const { address, isConnected } = useAccount();

  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-zinc-950 px-8">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-sm text-zinc-500">
          AI-powered wallet intelligence
        </p>
      </div>

      {isConnected ? (
        <div className="rounded-xl border border-emerald-500/20 bg-zinc-900 px-4 py-2 font-mono text-sm text-emerald-400">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </div>
      ) : (
        <ConnectButton
          accountStatus="avatar"
          chainStatus="icon"
          showBalance={false}
        />
      )}
    </header>
  );
}