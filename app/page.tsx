import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import ScoreCard from "@/components/dashboard/ScoreCard";
import WalletOverview from "@/components/dashboard/WalletOverview";
import AIInsights from "@/components/dashboard/AIInsights";
import ReputationBreakdown from "@/components/dashboard/ReputationBreakdown";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import ReputationChart from "@/components/dashboard/ReputationChart";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import RiskMeter from "@/components/dashboard/RiskMeter";
import ShadowAI from "@/components/dashboard/ShadowAI";
import WalletIdentity from "@/components/dashboard/WalletIdentity";
import ShadowReport from "@/components/dashboard/ShadowReport";
import SecurityScanner from "@/components/dashboard/SecurityScanner";
import WalletHealth from "@/components/dashboard/WalletHealth";
import QuickStats from "@/components/dashboard/QuickStats";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-zinc-950">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="grid gap-6 p-8 lg:grid-cols-2">
  <ScoreCard />
  <WalletIdentity />
  <div className="lg:col-span-2">
    <ShadowReport />
    <SecurityScanner />
  </div>
  <WalletOverview />
  <WalletHealth />
  <AIInsights />
  <ShadowAI />
  <RiskMeter />
  <ReputationBreakdown />
  <ActivityTimeline />
  <ReputationChart />
  <QuickStats />
  <RecentTransactions />
</div>
      </div>
    </main>
  );
}