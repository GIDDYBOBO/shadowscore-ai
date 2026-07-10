"use client";

import Card from "@/components/ui/Card";
import usePortfolio from "@/hooks/usePortfolio";

export default function PortfolioCard() {
  const { loading, tokens } = usePortfolio();

  return (
    <Card title="Portfolio">

      {loading && (
        <p className="text-zinc-400">
          Loading portfolio...
        </p>
      )}

      {!loading && tokens.length === 0 && (
        <p className="text-zinc-500">
          No ERC-20 tokens found.
        </p>
      )}

      <div className="space-y-4">

        {tokens.map((token) => (
          <div
            key={token.symbol}
            className="flex items-center justify-between border-b border-white/5 pb-3"
          >
            <div>

              <p className="font-medium text-white">
                {token.symbol}
              </p>

              <p className="text-xs text-zinc-500">
                {token.name}
              </p>

            </div>

            <div className="text-right">

              <p className="text-sm text-zinc-300">
                {(Number(token.balance) / 10 ** token.decimals).toFixed(4)}
              </p>

            </div>

          </div>
        ))}

      </div>

    </Card>
  );
}