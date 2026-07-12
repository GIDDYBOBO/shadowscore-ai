"use client";

import useTransactions from "@/hooks/useTransactions";

export default function RecentTransactions() {
  const { transactions, loading } = useTransactions();

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        Recent Transactions
      </h2>

      {loading && (
        <p className="mt-6 text-zinc-400 animate-pulse">
          Loading transactions...
        </p>
      )}

      {!loading &&
        Array.isArray(transactions) &&
        transactions.length === 0 && (
          <p className="mt-6 text-zinc-400">
            No transactions found.
          </p>
        )}

      {!loading &&
        Array.isArray(transactions) &&
        transactions.length > 0 && (
          <div className="mt-6 space-y-4">
            {transactions.map((tx: any, index: number) => (
              <div
                key={tx.uniqueId ?? tx.hash ?? index}
                className="rounded-xl border border-white/10 bg-zinc-950 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
                    {tx.category ?? "Transfer"}
                  </span>

                  <span className="text-xs text-zinc-500">
                    {tx.blockNum ?? "--"}
                  </span>
                </div>

                <p className="mt-4 break-all font-mono text-xs text-white">
                  {tx.hash ?? "Unknown Hash"}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-zinc-500">
                      Asset
                    </p>

                    <p className="text-white">
                      {tx.asset ?? "ETH"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      Value
                    </p>

                    <p className="text-white">
                      {tx.value ?? "--"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}