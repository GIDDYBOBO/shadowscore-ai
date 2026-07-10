"use client";
import ConnectWallet from "@/components/wallet/ConnectWallet";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#" },
  { label: "Docs", href: "#" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-zinc-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-zinc-100 transition-colors hover:text-white"
        >
          ShadowScore AI
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

       <ConnectWallet />
      </nav>
    </header>
  );
}
