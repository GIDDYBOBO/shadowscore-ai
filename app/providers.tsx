"use client";

import "@rainbow-me/rainbowkit/styles.css";

import { ReactNode, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { config } from "@/lib/wagmi";

const queryClient = new QueryClient();

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    console.log("✅ Providers mounted");
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}