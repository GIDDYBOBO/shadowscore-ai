"use client";

interface GaugeProps {
  score: number;
}

export default function Gauge({ score }: GaugeProps) {
  const percentage = Math.min(Math.max(score / 1000, 0), 1);
  const circumference = 2 * Math.PI * 90;
  const offset = circumference * (1 - percentage);

  return (
    <div className="flex flex-col items-center">
      <svg width="220" height="220" viewBox="0 0 220 220">
        <circle
          cx="110"
          cy="110"
          r="90"
          fill="none"
          stroke="#27272a"
          strokeWidth="14"
        />

        <circle
          cx="110"
          cy="110"
          r="90"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 110 110)"
          className="transition-all duration-1000"
        />

        <text
          x="110"
          y="110"
          textAnchor="middle"
          dy="8"
          className="fill-white text-4xl font-bold"
        >
          {score}
        </text>
      </svg>

      <p className="mt-4 text-zinc-400">
        Reputation Score
      </p>
    </div>
  );
}