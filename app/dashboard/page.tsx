import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import DashboardStats from "@/components/dashboard/DashboardStats";
import Portfolio from "@/components/dashboard/Portfolio";
import AIInsights from "@/components/dashboard/AIInsights";
import WalletOverview from "@/components/dashboard/WalletOverview";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-zinc-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <div className="space-y-8 p-8">

          <DashboardStats />

          <div className="grid gap-6 xl:grid-cols-3">

            <div className="xl:col-span-2">
              <Portfolio />
            </div>

            <WalletOverview />

          </div>

          <AIInsights />

        </div>

      </div>
    </main>
  );
}