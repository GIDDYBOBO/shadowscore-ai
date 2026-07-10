"use client";

import Card from "@/components/ui/Card";
import useWalletData from "@/hooks/useWalletData";

export default function Portfolio() {
  const { wallet, loading } = useWalletData();

  if (loading || !wallet) {
    return (
      <Card title="Portfolio">
        Loading...
      </Card>
    );
  }

  return (
    <Card title="Portfolio">
      <div className="space-y-4">

        <div className="flex justify-between border-b border-white/10 pb-3">
          <span className="text-zinc-400">
            ETH
          </span>

          <span className="text-white font-semibold">
            {wallet.ethBalance.toFixed(4)}
          </span>
        </div>

        {wallet.tokens.map((token: any) => (
          <div
            key={token.symbol}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">

              {token.logo && (
                <img
                  src={token.logo}
                  className="h-8 w-8 rounded-full"
                />
              )}

              <div>
                <p className="text-white">
                  {token.symbol}
                </p>

                <p className="text-xs text-zinc-500">
                  {token.name}
                </p>
              </div>

            </div>

            <span className="text-zinc-300">
              {(Number(token.balance) /
                Math.pow(10, token.decimals)).toFixed(4)}
            </span>

          </div>
        ))}

      </div>
    </Card>
  );
}