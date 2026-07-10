"use client";

import Link from "next/link";

const links = [
  "Overview",
  "Portfolio",
  "Transactions",
  "AI Insights",
  "Security",
  "Settings",
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-white/10 bg-zinc-950">
      <div className="border-b border-white/10 p-6">
        <h1 className="text-2xl font-bold text-white">
          ShadowScore
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          AI Reputation Engine
        </p>
      </div>

      <nav className="flex-1 p-4">
        {links.map((link) => (
          <Link
            key={link}
            href="#"
            className="mb-2 block rounded-lg px-4 py-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
          >
            {link}
          </Link>
        ))}
      </nav>
    </aside>
  );
}