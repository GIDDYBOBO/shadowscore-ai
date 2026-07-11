"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import ScoreCard from "@/components/dashboard/ScoreCard";
import WalletIdentity from "@/components/dashboard/WalletIdentity";
import WalletOverview from "@/components/dashboard/WalletOverview";
import AIInsights from "@/components/dashboard/AIInsights";
import ShadowAI from "@/components/dashboard/ShadowAI";
import ShadowReport from "@/components/dashboard/ShadowReport";
import SecurityScanner from "@/components/dashboard/SecurityScanner";
import WalletHealth from "@/components/dashboard/WalletHealth";
import QuickStats from "@/components/dashboard/QuickStats";
import ReputationChart from "@/components/dashboard/ReputationChart";
import ReputationBreakdown from "@/components/dashboard/ReputationBreakdown";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import RiskMeter from "@/components/dashboard/RiskMeter";
import ScanAnimation from "@/components/dashboard/ScanAnimation";

import useAnalysis from "@/hooks/useAnalysis";

export default function DashboardPage() {
  const { finished } = useAnalysis();

  return (
    <main className="flex min-h-screen bg-zinc-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <div className="grid gap-6 p-8 lg:grid-cols-2">

          <ScoreCard />
          <WalletIdentity />

          <div className="lg:col-span-2">
            <ScanAnimation />
          </div>

          {finished && (
            <div className="lg:col-span-2">
              <ShadowReport />
            </div>
          )}

          <WalletOverview />
          <AIInsights />

          <SecurityScanner />
          <WalletHealth />

          <QuickStats />
          <RiskMeter />

          <ReputationChart />
          <ReputationBreakdown />

          <ActivityTimeline />
          <RecentTransactions />

          <div className="lg:col-span-2">
            <ShadowAI />
          </div>

        </div>
      </div>
    </main>
  );
}