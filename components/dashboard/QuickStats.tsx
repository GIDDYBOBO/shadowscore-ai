"use client";

import { useAccount, useBalance } from "wagmi";

export default function QuickStats() {

  const { chain, isConnected } = useAccount();

  const { data } = useBalance();

  return (

    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">

      <h2 className="text-xl font-semibold text-white">
        Quick Stats
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-5">

        <div className="rounded-xl bg-zinc-950 p-5">
          <p className="text-zinc-500">
            Network
          </p>

          <h3 className="mt-2 text-white">
            {chain?.name ?? "--"}
          </h3>
        </div>

        <div className="rounded-xl bg-zinc-950 p-5">
          <p className="text-zinc-500">
            Balance
          </p>

          <h3 className="mt-2 text-white">
            {data?.formatted
              ? Number(data.formatted).toFixed(4)
              : "0"}{" "}
            {data?.symbol}
          </h3>
        </div>

        <div className="rounded-xl bg-zinc-950 p-5">
          <p className="text-zinc-500">
            Status
          </p>

          <h3 className="mt-2 text-emerald-400">
            {isConnected
              ? "Connected"
              : "Offline"}
          </h3>
        </div>

        <div className="rounded-xl bg-zinc-950 p-5">
          <p className="text-zinc-500">
            Grade
          </p>

          <h3 className="mt-2 text-cyan-400">
            A+
          </h3>
        </div>

      </div>

    </div>

  );
}