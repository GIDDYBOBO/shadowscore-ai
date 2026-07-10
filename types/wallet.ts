export interface WalletInfo {
  address: string;
  chain: string;
  balance: number;
  symbol: string;
}

export interface PortfolioToken {
  symbol: string;
  balance: number;
  valueUSD: number;
}

export interface WalletActivity {
  hash: string;
  type: string;
  timestamp: string;
}

export interface ReputationResult {
  score: number;
  rating: string;
  explanation: string[];
}