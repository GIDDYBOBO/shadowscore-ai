export interface WalletAnalysis {
  tokenCount: number;
  nftCount: number;
  score: number;
  rating: string;
}

export async function analyzeWallet(
  address: string
): Promise<WalletAnalysis> {
  const response = await fetch(`/api/wallet?address=${address}`);

  if (!response.ok) {
    throw new Error("Failed to analyze wallet.");
  }

  const wallet = await response.json();

  const tokenCount = wallet.tokenCount;
  const nftCount = wallet.nftCount;

  let score = 500;

  score += Math.min(tokenCount * 10, 200);
  score += Math.min(nftCount * 5, 100);

  score = Math.min(score, 1000);

  let rating = "Average";

  if (score >= 850) rating = "Excellent";
  else if (score >= 700) rating = "Good";
  else if (score < 500) rating = "Poor";

  return {
    tokenCount,
    nftCount,
    score,
    rating,
  };
}