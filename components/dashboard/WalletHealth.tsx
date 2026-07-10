"use client";

import Card from "@/components/ui/Card";
import { CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const checks = [
  {
    icon: CheckCircle2,
    color: "text-emerald-400",
    title: "Wallet Security",
    value: "Excellent",
  },
  {
    icon: Clock,
    color: "text-cyan-400",
    title: "Wallet Age",
    value: "3.2 Years",
  },
  {
    icon: AlertTriangle,
    color: "text-yellow-400",
    title: "Risk Level",
    value: "Low",
  },
];

export default function WalletHealth() {
  return (
    <Card title="Wallet Intelligence">
      <div className="space-y-5">
        {checks.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-950 p-4"
            >
              <div className="flex items-center gap-3">
                <Icon className={item.color} size={22} />

                <div>
                  <p className="text-sm text-zinc-500">
                    {item.title}
                  </p>

                  <p className="font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}