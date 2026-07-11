"use client";

import useReputation from "@/hooks/useReputation";

export default function SecurityScanner() {
  const rep = useReputation();

  const checks = [
    {
      label: "Wallet Connected",
      status: rep.score > 0,
    },
    {
      label: "Healthy Reputation",
      status: rep.score >= 600,
    },
    {
      label: "Low Risk",
      status: rep.risk < 30,
    },
    {
      label: "Trusted Network",
      status: true,
    },
    {
      label: "No Suspicious Activity",
      status: rep.risk < 20,
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-2xl font-semibold text-white">
        Security Scanner
      </h2>

      <div className="mt-8 space-y-5">
        {checks.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-xl bg-zinc-950 p-4"
          >
            <span className="text-white">
              {item.label}
            </span>

            <span
              className={
                item.status
                  ? "text-emerald-400"
                  : "text-red-400"
              }
            >
              {item.status ? "✓ Safe" : "⚠ Check"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}