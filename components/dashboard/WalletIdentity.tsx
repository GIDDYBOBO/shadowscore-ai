"use client";

import { useAccount } from "wagmi";
import useReputation from "@/hooks/useReputation";

export default function WalletIdentity() {
  const { address, chain, isConnected } = useAccount();
  const rep = useReputation();

  const shortAddress =
    address && `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <div className="flex items-center gap-5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-3xl font-bold text-white">
          {address ? address.slice(2, 4).toUpperCase() : "SS"}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            Wallet Identity
          </h2>

          <p className="font-mono text-sm text-zinc-400">
            {isConnected ? shortAddress : "Not Connected"}
          </p>

          <p className="mt-1 text-sm text-cyan-400">
            {chain?.name ?? "--"}
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl bg-zinc-950 p-4 text-center">
          <p className="text-sm text-zinc-500">Grade</p>
          <p className="mt-2 text-3xl font-bold text-cyan-400">
            {rep.grade}
          </p>
        </div>

        <div className="rounded-xl bg-zinc-950 p-4 text-center">
          <p className="text-sm text-zinc-500">Risk</p>
          <p className="mt-2 text-3xl font-bold text-emerald-400">
            {rep.risk}%
          </p>
        </div>

        <div className="rounded-xl bg-zinc-950 p-4 text-center">
          <p className="text-sm text-zinc-500">Status</p>
          <p className="mt-2 text-lg font-semibold text-white">
            {rep.status}
          </p>
        </div>
      </div>

      <button
        className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-[1.02]"
      >
        Mint Reputation Badge
      </button>
    </div>
  );
}