"use client";

import Card from "@/components/ui/Card";
import useWalletData from "@/hooks/useWalletData";
import { useAccount } from "wagmi";

export default function WalletOverview() {
  const { wallet, loading } = useWalletData();
  const { address } = useAccount();

  return (
    <Card title="Wallet Overview">
      <div className="space-y-5">

        <div>
          <p className="text-sm text-zinc-500">Address</p>

          <p className="mt-1 font-mono text-sm text-white break-all">
            {address ?? "--"}
          </p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">ETH Balance</p>

          <p className="mt-1 text-lg font-semibold text-white">
            {loading || !wallet
              ? "Loading..."
              : `${wallet.ethBalance.toFixed(4)} ETH`}
          </p>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-500">Tokens</span>

          <span className="text-white">
            {loading || !wallet ? "--" : wallet.tokenCount}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-500">NFTs</span>

          <span className="text-white">
            {loading || !wallet ? "--" : wallet.nftCount}
          </span>
        </div>

      </div>
    </Card>
  );
}