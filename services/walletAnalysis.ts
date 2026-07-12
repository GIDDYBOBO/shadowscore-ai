import { calculateReputation } from "@/lib/reputation";

export interface WalletAnalysis {
  score: number;
  grade: string;
  risk: number;
  status: string;
  strengths: string[];
  weaknesses: string[];
}

export function analyzeWallet(
  balance: number,
  connected: boolean
): WalletAnalysis {

  const rep = calculateReputation(
    connected,
    balance
  );

  const strengths: string[] = [];
  const weaknesses: string[] = [];

  if (balance > 1)
    strengths.push("Healthy ETH balance");

  if (rep.risk < 20)
    strengths.push("Low risk profile");

  if (rep.score > 700)
    strengths.push("High reputation");

  if (!connected)
    weaknesses.push("Wallet not connected");

  if (balance < 0.1)
    weaknesses.push("Very low balance");

  if (rep.risk > 50)
    weaknesses.push("High security risk");

  return {
    ...rep,
    strengths,
    weaknesses,
  };
}