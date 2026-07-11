"use client";

export default function RiskMeter() {
  const risk = 18;

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        AI Risk Analysis
      </h2>

      <div className="mt-8">
        <div className="h-4 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
            style={{ width: `${risk}%` }}
          />
        </div>

        <p className="mt-5 text-3xl font-bold text-green-400">
          {risk}% Risk
        </p>

        <p className="mt-2 text-zinc-500">
          Wallet appears healthy with minimal security concerns.
        </p>
      </div>
    </div>
  );
}