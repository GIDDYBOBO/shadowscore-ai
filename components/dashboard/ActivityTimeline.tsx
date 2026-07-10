"use client";

import Card from "@/components/ui/Card";

const activity = [
  {
    action: "Swapped ETH → USDC",
    time: "2 hours ago",
  },
  {
    action: "Connected to Uniswap",
    time: "Yesterday",
  },
  {
    action: "Received ETH",
    time: "3 days ago",
  },
  {
    action: "Minted NFT",
    time: "Last week",
  },
];

export default function ActivityTimeline() {
  return (
    <Card title="Recent Activity">
      <div className="space-y-5">
        {activity.map((item) => (
          <div
            key={item.action}
            className="flex items-center justify-between border-b border-white/5 pb-3"
          >
            <div>
              <p className="text-white">
                {item.action}
              </p>

              <p className="text-xs text-zinc-500">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}