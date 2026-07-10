"use client";

import { useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import ScoreCard from "@/components/dashboard/ScoreCard";
import WalletOverview from "@/components/dashboard/WalletOverview";
import AIInsights from "@/components/dashboard/AIInsights";
import Scanner from "@/components/dashboard/Scanner";

export default function DashboardPage() {
  const [finished, setFinished] = useState(false);

  return (
    <main className="flex min-h-screen bg-zinc-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <div className="p-8">
          {!finished ? (
            <Scanner onFinish={() => setFinished(true)} />
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              <ScoreCard />
              <WalletOverview />
              <AIInsights />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}