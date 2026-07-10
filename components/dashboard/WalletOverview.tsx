"use client";

import { useAccount, useBalance } from "wagmi";

export default function WalletOverview() {
  const { address, chain } = useAccount();

  const { data, isLoading } = useBalance({
    address,
  });

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        Wallet Overview
      </h2>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-zinc-500 text-sm">Address</p>
          <p className="font-mono text-white break-all">
            {address ?? "Not Connected"}
          </p>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">Network</p>
          <p className="text-white">
            {chain?.name ?? "--"}
          </p>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">Balance</p>

          <p className="text-white">
            {isLoading
              ? "Loading..."
              : `${data?.formatted ?? "0"} ${data?.symbol ?? ""}`}
          </p>
        </div>
      </div>
    </div>
  );
}