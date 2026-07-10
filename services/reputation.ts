import { calculateShadowScore } from "@/lib/shadowscore";

export async function analyzeWallet() {
  const result = calculateShadowScore({
    walletAge: 3,
    transactionCount: 2400,
    tokenCount: 15,
    chainCount: 4,
    hasSuspiciousActivity: false,
  });

  return {
    ...result,

    explanation: [
      "Wallet has been active for over three years.",
      "Healthy transaction history.",
      "Uses multiple blockchain networks.",
      "No suspicious activity detected.",
    ],
  };
}