"use client";

const metrics = [
  {
    title: "Wallet Age",
    score: 180,
    max: 200,
  },
  {
    title: "Transaction History",
    score: 160,
    max: 200,
  },
  {
    title: "Security",
    score: 190,
    max: 200,
  },
  {
    title: "Protocol Trust",
    score: 150,
    max: 200,
  },
  {
    title: "Portfolio",
    score: 120,
    max: 200,
  },
];

export default function ReputationBreakdown() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        Reputation Breakdown
      </h2>

      <div className="mt-8 space-y-6">
        {metrics.map((metric) => {
          const percent = (metric.score / metric.max) * 100;

          return (
            <div key={metric.title}>
              <div className="mb-2 flex justify-between">
                <span className="text-zinc-400">
                  {metric.title}
                </span>

                <span className="text-white">
                  {metric.score}/{metric.max}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-1000"
                  style={{
                    width: `${percent}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}