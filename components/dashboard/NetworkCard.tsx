"use client";

import Card from "@/components/ui/Card";

const chains = [
  "Ethereum",
  "Base",
  "Polygon",
  "Sepolia",
];

export default function NetworkCard() {
  return (
    <Card title="Supported Networks">
      <div className="grid grid-cols-2 gap-4">
        {chains.map((chain) => (
          <div
            key={chain}
            className="rounded-xl border border-white/10 bg-zinc-950 p-4 text-center"
          >
            <p className="font-semibold text-white">
              {chain}
            </p>

            <p className="mt-2 text-xs text-emerald-400">
              Supported
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}