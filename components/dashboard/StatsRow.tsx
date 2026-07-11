"use client";

import { useBalance } from "wagmi";
import { useAccount } from "wagmi";

export default function StatsRow() {
  const { address } = useAccount();

  const { data } = useBalance({
    address,
  });

  const stats = [
    {
      title: "Balance",
      value: data
        ? `${Number(data.formatted).toFixed(3)} ${data.symbol}`
        : "--",
    },
    {
      title: "Transactions",
      value: "1,350",
    },
    {
      title: "Tokens",
      value: "12",
    },
    {
      title: "NFTs",
      value: "8",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-white/10 bg-zinc-900 p-6"
        >
          <p className="text-sm text-zinc-500">
            {stat.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}