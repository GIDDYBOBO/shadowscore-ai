import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import ScoreCard from "@/components/dashboard/ScoreCard";
import WalletOverview from "@/components/dashboard/WalletOverview";
import Portfolio from "@/components/dashboard/Portfolio";
import AIInsights from "@/components/dashboard/AIInsights";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-zinc-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <div className="grid gap-6 p-8 lg:grid-cols-2">
          <ScoreCard />
          <WalletOverview />
          <Portfolio />
          <AIInsights />
        </div>
      </div>
    </main>
  );
}