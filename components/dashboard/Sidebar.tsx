"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ShieldCheck,
  Wallet,
  Activity,
  Bot,
  Settings,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Reputation",
    href: "/dashboard/reputation",
    icon: ShieldCheck,
  },
  {
    name: "Wallet",
    href: "/dashboard/wallet",
    icon: Wallet,
  },
  {
    name: "Activity",
    href: "/dashboard/activity",
    icon: Activity,
  },
  {
    name: "AI Agent",
    href: "/dashboard/agent",
    icon: Bot,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-white/10 bg-zinc-950">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-white">
          ShadowScore
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          AI Reputation Engine
        </p>
      </div>

      <nav className="px-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-4 right-4">
        <button className="flex w-full items-center gap-3 rounded-xl border border-white/10 p-3 text-zinc-400 hover:bg-white/5">
          <Settings size={18} />
          Settings
        </button>
      </div>
    </aside>
  );
}