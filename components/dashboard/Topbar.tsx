"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";

export default function Topbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-zinc-950 px-8 py-5">
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Dashboard
        </h2>

        <p className="text-sm text-zinc-500">
          AI-powered blockchain intelligence
        </p>

        <p className="mt-2 text-xs text-zinc-400">
          Last Scan: {time || "--:--:--"}
        </p>
      </div>

      <ConnectButton
        accountStatus="address"
        chainStatus="icon"
        showBalance={false}
      />
    </header>
  );
}