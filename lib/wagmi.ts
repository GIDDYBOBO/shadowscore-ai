import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia, polygon, base } from "wagmi/chains";

const projectId = "95e1ce683b3e904d3c0ffa8e69057f05";

console.log("WalletConnect Project ID:", projectId);

export const config = getDefaultConfig({
  appName: "ShadowScore AI",
  projectId,
  chains: [mainnet, sepolia, polygon, base],
  ssr: true,
});