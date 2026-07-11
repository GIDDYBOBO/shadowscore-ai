"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", score: 620 },
  { day: "Tue", score: 670 },
  { day: "Wed", score: 720 },
  { day: "Thu", score: 760 },
  { day: "Fri", score: 805 },
  { day: "Sat", score: 835 },
  { day: "Today", score: 842 },
];

export default function ReputationChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        Reputation History
      </h2>

      <div className="mt-8 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#27272a" />

            <XAxis
              dataKey="day"
              stroke="#71717a"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#06b6d4"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}