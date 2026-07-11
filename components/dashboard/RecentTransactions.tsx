"use client";

const txs = [
  {
    hash: "0x83...91a",
    type: "Swap",
    status: "Success",
  },
  {
    hash: "0x18...abc",
    type: "Mint",
    status: "Success",
  },
  {
    hash: "0xf9...882",
    type: "Transfer",
    status: "Pending",
  },
  {
    hash: "0xa7...123",
    type: "Stake",
    status: "Success",
  },
];

export default function RecentTransactions() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        Recent Transactions
      </h2>

      <div className="mt-8 space-y-5">
        {txs.map((tx) => (
          <div
            key={tx.hash}
            className="flex justify-between border-b border-white/5 pb-4"
          >
            <div>
              <p className="font-mono text-white">
                {tx.hash}
              </p>

              <p className="text-sm text-zinc-500">
                {tx.type}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-sm ${
                tx.status === "Success"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {tx.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}