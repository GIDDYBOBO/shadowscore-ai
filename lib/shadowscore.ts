export interface WalletMetrics {
  walletAge: number;
  transactionCount: number;
  tokenCount: number;
  chainCount: number;
  hasSuspiciousActivity: boolean;
}

export interface ScoreResult {
  score: number;
  rating: string;
  color: string;
}

export function calculateShadowScore(
  metrics: WalletMetrics
): ScoreResult {
  let score = 500;

  // Wallet age
  score += Math.min(metrics.walletAge * 40, 200);

  // Transaction history
  score += Math.min(metrics.transactionCount / 20, 150);

  // Token diversity
  score += Math.min(metrics.tokenCount * 8, 60);

  // Multi-chain activity
  score += metrics.chainCount * 20;

  // Risk penalty
  if (metrics.hasSuspiciousActivity) {
    score -= 250;
  }

  score = Math.max(0, Math.min(score, 1000));

  let rating = "Poor";
  let color = "text-red-500";

  if (score >= 850) {
    rating = "Excellent";
    color = "text-emerald-400";
  } else if (score >= 700) {
    rating = "Good";
    color = "text-green-400";
  } else if (score >= 500) {
    rating = "Average";
    color = "text-yellow-400";
  }

  return {
    score,
    rating,
    color,
  };
}