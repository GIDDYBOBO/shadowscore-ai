export interface WalletMetrics {
  balance: number;
  transactionCount: number;
  tokenCount: number;
  chainCount: number;
  walletAgeDays: number;
}

export function calculateShadowScore(metrics: WalletMetrics) {
  let score = 300;

  // Wallet age (max 200)
  score += Math.min(metrics.walletAgeDays / 365, 4) * 50;

  // Transactions (max 200)
  score += Math.min(metrics.transactionCount / 1000, 2) * 100;

  // Token diversity (max 150)
  score += Math.min(metrics.tokenCount * 10, 150);

  // Multi-chain activity (max 100)
  score += Math.min(metrics.chainCount * 25, 100);

  // Balance (max 250)
  score += Math.min(metrics.balance * 20, 250);

  return Math.round(Math.min(score, 1000));
}